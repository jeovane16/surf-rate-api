import { ApplicationError } from '@src/shared/aplicationError';

export class StormGlassError extends ApplicationError {
  constructor(message: string) {
    const internalMessage =
      'Unexpected error returned by the StormGlass service: Error: {"errors":["Rate Limit reached"]} Code: 429';
    super(`${internalMessage}: ${message}`);
  }
}
