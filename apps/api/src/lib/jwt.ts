import jwt from 'jsonwebtoken';
import type { Role } from '@school-portal/shared';
import { env } from '../config/env';

export type JwtUser = {
  sub: string;
  email: string;
  role: Role;
  tenantId: string;
};

export function signAccessToken(payload: JwtUser) {
  return jwt.sign(payload, env.jwtAccessSecret, { expiresIn: '15m' });
}

export function signRefreshToken(payload: JwtUser) {
  return jwt.sign(payload, env.jwtRefreshSecret, { expiresIn: '7d' });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, env.jwtAccessSecret) as JwtUser;
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, env.jwtRefreshSecret) as JwtUser;
}
