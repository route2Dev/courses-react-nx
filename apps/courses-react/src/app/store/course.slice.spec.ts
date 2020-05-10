import {
  courseReducer,
  getCoursesStart,
  getCoursesFailure,
  getCoursesSuccess
} from './course.slice';

describe('course reducer', () => {
  it('should handle initial state', () => {
    expect(courseReducer(undefined, { type: '' })).toMatchObject({
      entities: []
    });
  });

  it('should handle get course actions', () => {
    let state = courseReducer(undefined, getCoursesStart());

    expect(state).toEqual({
      loaded: false,
      error: null,
      entities: []
    });

    state = courseReducer(
      state,
      getCoursesSuccess([
        { id: 1, title: 'foo', authorId: null, category: 'bar' }
      ])
    );

    expect(state).toEqual({
      loaded: true,
      error: null,
      entities: [{ id: 1 }]
    });

    state = courseReducer(state, getCoursesFailure('Uh oh'));

    expect(state).toEqual({
      loaded: true,
      error: 'Uh oh',
      entities: [{ id: 1 }]
    });
  });
});
