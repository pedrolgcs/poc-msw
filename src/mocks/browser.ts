import { setupWorker } from 'msw';
import { handlers } from './requests/handlers';

export const browser = setupWorker(...handlers);
