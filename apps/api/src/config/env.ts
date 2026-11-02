export const env = {
  port: Number(process.env.PORT ?? 4000),
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET ?? 'dev-access-secret',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET ?? 'dev-refresh-secret',
  postgresUrl: process.env.POSTGRES_URL ?? 'postgresql://schoolportal:schoolportal@localhost:5432/schoolportal?schema=public',
  nodeEnv: process.env.NODE_ENV ?? 'development',
};
