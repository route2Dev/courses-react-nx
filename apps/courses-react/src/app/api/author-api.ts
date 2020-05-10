import { handleError, handleResponse } from './api-utils';
const baseUrl = '/api/authors/';

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
