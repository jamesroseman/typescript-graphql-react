import createHandler from './api/server/createHandler';

// All exports below are usable as Google Cloud Functions, referenced by name.

export const graphql = createHandler();
