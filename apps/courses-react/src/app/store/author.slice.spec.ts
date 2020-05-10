import {
  authorReducer,
  getAuthorStart,
  getAuthorFailure,
  getAuthorSuccess
} from './author.slice';

describe('author reducer', () => {
  it('should handle initial state', () => {
    expect(authorReducer(undefined, { type: '' })).toMatchObject({
      entities: []
    });
  });

  it('should handle get author actions', () => {
    let state = authorReducer(undefined, getAuthorStart());

    expect(state).toEqual({
      loaded: false,
      error: null,
      entities: []
    });

    state = authorReducer(state, getAuthorSuccess([{ id: 1 }]));

    expect(state).toEqual({
      loaded: true,
      error: null,
      entities: [{ id: 1 }]
    });

    state = authorReducer(state, getAuthorFailure('Uh oh'));

    expect(state).toEqual({
      loaded: true,
      error: 'Uh oh',
      entities: [{ id: 1 }]
    });
  });
});
