export abstract class ApplicationError extends Error {
  protected constructor(
    public message: string = 'Internal server error.',
    public code?: number
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
