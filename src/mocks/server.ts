import { setupServer } from 'msw/node';
import { handlers } from './requests/handlers';

export const server = setupServer(...handlers);
