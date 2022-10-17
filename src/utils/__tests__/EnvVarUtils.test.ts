import { EnvVarUtils } from '../EnvVarUtils';

describe('EnvVarUtils (Unit)', () => {
  // eslint-disable-next-line no-undef
  let oldEnv: NodeJS.ProcessEnv;

  beforeAll(() => {
    oldEnv = process.env;
  });

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...oldEnv };
  });

  describe('getApiUrl', () => {
    const apiUrl: string = 'api-url';

    test('successfully gets API url', () => {
      process.env = {
        GRAPHQL_API_URL: apiUrl,
      };
      expect(EnvVarUtils.getApiUrl()).toBe(apiUrl);
    });

    test('throws error if API url is missing', () => {
      process.env = {};
      expect(() => { EnvVarUtils.getApiUrl(); }).toThrow();
    });
  });

  describe('getApiPort', () => {
    const apiPort: number = 5894;

    test('successfully gets API url', () => {
      process.env = {
        GRAPHQL_API_PORT: `${apiPort}`,
      };
      expect(EnvVarUtils.getApiPort()).toBe(apiPort);
    });

    test('throws error if API url is missing', () => {
      process.env = {};
      expect(() => { EnvVarUtils.getApiPort(); }).toThrow();
    });
  });
});
