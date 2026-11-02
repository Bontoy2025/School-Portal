import type { Request, Response, NextFunction } from 'express';
import { Role } from '@school-portal/shared';
import type { AuthenticatedRequest } from './auth';

export function requireRole(...allowedRoles: Role[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    if (!allowedRoles.includes(req.user.role as Role)) {
      return res.status(403).json({ success: false, error: 'Forbidden: insufficient role permissions' });
    }

    return next();
  };
}
