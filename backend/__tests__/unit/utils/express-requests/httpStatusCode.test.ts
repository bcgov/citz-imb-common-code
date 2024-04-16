import { httpStatusCode } from '@/utils';

// Test suite for the httpStatusCode enum
describe('httpStatusCode', () => {
  // Test case: Verify that each status code is defined and has the correct value
  it('should have the correct HTTP status codes', () => {
    expect(httpStatusCode.OK).toBe(200);
    expect(httpStatusCode.CREATED).toBe(201);
    expect(httpStatusCode.ACCEPTED).toBe(202);
    expect(httpStatusCode.NO_CONTENT).toBe(204);
    expect(httpStatusCode.NOT_MODIFIED).toBe(304);
    expect(httpStatusCode.BAD_REQUEST).toBe(400);
    expect(httpStatusCode.UNAUTHORIZED).toBe(401);
    expect(httpStatusCode.FORBIDDEN).toBe(403);
    expect(httpStatusCode.NOT_FOUND).toBe(404);
    expect(httpStatusCode.IM_A_TEAPOT).toBe(418);
    expect(httpStatusCode.INTERNAL_SERVER_ERROR).toBe(500);
    expect(httpStatusCode.NOT_IMPLEMENTED).toBe(501);
    expect(httpStatusCode.SERVICE_UNAVAIBLABLE).toBe(503);
  });
});
