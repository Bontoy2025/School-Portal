import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../lib/jwt';
import { prisma } from '../lib/prisma';
import { requireAuth, type AuthenticatedRequest } from '../middleware/auth';
import { Role } from '@school-portal/shared';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const refreshSchema = z.object({
  refreshToken: z.string().min(10),
});

export function registerAuthRoutes(app: any) {
  app.post('/api/v1/auth/login', async (req: any, res: any) => {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, error: 'Invalid login payload' });
    }

    const { email, password } = parsed.data;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.isActive) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    const passwordValid = await bcrypt.compare(password, user.passwordHash);
    if (!passwordValid) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    const tokenPayload = {
      sub: user.id,
      email: user.email,
      role: user.role as Role,
      tenantId: user.tenantId,
    };

    const accessToken = signAccessToken(tokenPayload);
    const refreshToken = signRefreshToken(tokenPayload);

    return res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          tenantId: user.tenantId,
        },
        accessToken,
        refreshToken,
      },
    });
  });

  app.post('/api/v1/auth/refresh', async (req: any, res: any) => {
    const parsed = refreshSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, error: 'Invalid refresh token' });
    }

    try {
      const payload = verifyRefreshToken(parsed.data.refreshToken);
      const user = await prisma.user.findUnique({ where: { id: payload.sub } });

      if (!user || !user.isActive) {
        return res.status(401).json({ success: false, error: 'Session invalid' });
      }

      const nextAccess = signAccessToken({
        sub: user.id,
        email: user.email,
        role: user.role as Role,
        tenantId: user.tenantId,
      });

      return res.json({ success: true, data: { accessToken: nextAccess } });
    } catch (error) {
      return res.status(401).json({ success: false, error: 'Refresh token expired or invalid' });
    }
  });

  app.post('/api/v1/auth/logout', requireAuth, async (req: AuthenticatedRequest, res: any) => {
    return res.json({ success: true, message: `Logged out user ${req.user?.sub}` });
  });

  app.get('/api/v1/me', requireAuth, async (req: AuthenticatedRequest, res: any) => {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.sub },
      include: {
        student: true,
        teacher: true,
        parent: true,
      },
    });

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    return res.json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        role: user.role,
        tenantId: user.tenantId,
        student: user.student,
        teacher: user.teacher,
        parent: user.parent,
      },
    });
  });
}
