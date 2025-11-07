import * as msw from 'msw';
const { rest } = msw as any;

export const handlers = [
  // mock an auth/me endpoint
  rest.get('/api/auth/me', (_req: any, res: any, ctx: any) => {
    return res(
      ctx.status(200),
      ctx.json({ id: 1, name: 'Test User', email: 'test@example.com' })
    );
  }),

  // mock login
  rest.post('/api/auth/login', (_req: any, res: any, ctx: any) => {
    return res(
      ctx.status(200),
      ctx.json({ access_token: 'fake-token', user: { id: 1, name: 'Test User' } })
    );
  }),
];
