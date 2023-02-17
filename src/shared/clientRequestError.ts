import { ApplicationError } from '@src/shared/aplicationError';

export class ClientRequestError extends ApplicationError {
  constructor(message: string) {
    const internalMessage =
      'Unexpected error when trying to communicate to StormGlass';
    super(`${internalMessage}: ${message}`);
  }
}
