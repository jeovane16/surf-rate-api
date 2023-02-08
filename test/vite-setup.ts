import { SetupServer } from '@src/server';
import supertest from 'supertest';
import { beforeAll } from 'vitest';

beforeAll(async () => {
  const server = new SetupServer();
  await server.init();
  globalThis.testRequest = supertest(server.getApp());
});
