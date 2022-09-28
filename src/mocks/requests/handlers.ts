import { rest } from 'msw';

export const handlers = [
  rest.get('/venda-assistida/user', (req, res, ctx) => {
    return res(ctx.json({ firstName: 'John ' }));
  }),
];
