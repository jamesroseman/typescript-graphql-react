import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../../.env') });

/**
 * Interface for retrieving the value of environment variables in a type-safe and fail-fast way.
 */
export class EnvVarUtils {
  /**
   * Gets the desired URL of the GraphQL API.
   */
  static getApiUrl(): string {
    const graphqlAPIUrl: string | undefined = process.env.GRAPHQL_API_URL;
    if (graphqlAPIUrl === undefined) {
      const graphqlAPIUrlNotFoundError: Error = new Error('GraphQL API URL [GRAPHQL_API_URL] not found in env');
      graphqlAPIUrlNotFoundError.name = 'Undefined GraphQL API URL.';
      throw graphqlAPIUrlNotFoundError;
    }
    return graphqlAPIUrl;
  }

  /**
   * Gets the desired port of the GraphQL API.
   */
  static getApiPort(): number {
    const graphqlAPIPort: string | undefined = process.env.GRAPHQL_API_PORT;
    const port: number = parseInt(graphqlAPIPort ?? '', 10);
    if (graphqlAPIPort === undefined || Number.isNaN(port)) {
      const graphqlAPIPortNotFoundError: Error = new Error('GraphQL API port [GRAPHQL_API_PORT] not found in env');
      graphqlAPIPortNotFoundError.name = 'Undefined GraphQL API port.';
      throw graphqlAPIPortNotFoundError;
    }
    return port;
  }
}
