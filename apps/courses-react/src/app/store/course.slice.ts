import {
  createSlice,
  createSelector,
  Action,
  PayloadAction,
  createAction
} from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';

import { Course } from '@courses-react-nx/api-interfaces';
import * as courseApi from '../api/course-api';
import { AppState } from './app-state';

export const COURSE_FEATURE_KEY = 'courses';

/*
 * Change this from `any` if there is a more specific error type.
 */
export type CourseError = unknown;

/*
 * Update these interfaces according to your requirements.
 */

export interface CourseState {
  entities: Course[];
  loaded: boolean;
  error: CourseError;
}

export const initialCourseState: CourseState = {
  entities: [],
  loaded: false,
  error: null
};

export const saveCourseStart = createAction('saveCourseStart');
export const saveCourseFailure = createAction('saveCourseFailure');

export const courseSlice = createSlice({
  name: COURSE_FEATURE_KEY,
  initialState: initialCourseState as CourseState,
  reducers: {
    getCoursesStart: (state, action: PayloadAction<undefined>) => {
      state.loaded = false;
      console.log('getcourses start: ', action);
    },
    getCoursesSuccess: (state, action: PayloadAction<Course[]>) => {
      state.loaded = true;
      state.entities = action.payload;
      console.log('getcourses success: ', action);
    },
    getCoursesFailure: (state, action: PayloadAction<CourseError>) => {
      state.error = action.payload;
    },
    updateCourseSucess: (state, action: PayloadAction<Course>) => {
      state.entities = state.entities.map(course =>
        course.id === action.payload.id ? action.payload : course
      );
    },
    saveCourseSuccess: (state, action: PayloadAction<Course>) => {
      state.entities = [...state.entities, { ...action.payload }];
    },
    deleteCourseOptimistic: (state, action: PayloadAction<Course>) => {
      state.entities = state.entities.filter(
        course => course.id !== action.payload.id
      );
    }
  }
});

/*
 * Export reducer for store configuration.
 */
export const courseReducer = courseSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(getCourseSuccess([{ id: 1 }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const {
  deleteCourseOptimistic,
  getCoursesStart,
  getCoursesSuccess,
  getCoursesFailure,
  saveCourseSuccess,
  updateCourseSucess
} = courseSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * const entities = useSelector(selectCourseEntities);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
export const getCourseState = (rootState: AppState): CourseState =>
  rootState[COURSE_FEATURE_KEY];

export const selectCourseEntities = createSelector(
  getCourseState,
  s => s.entities
);

export const selectCourseLoaded = createSelector(getCourseState, s => s.loaded);

export const selectCourseError = createSelector(getCourseState, s => s.error);

/*
 * Export default effect, handled by redux-thunk.
 * You can replace this with your own effects solution.
 */
export const fetchCourses = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async dispatch => {
  try {
    dispatch(getCoursesStart());
    const data = await courseApi.getCourses();

    dispatch(getCoursesSuccess(data));
  } catch (err) {
    dispatch(getCoursesFailure(err));
  }
};

export const saveCourse = (
  course: Course
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  try {
    dispatch(saveCourseStart());
    const savedCourse = await courseApi.saveCourse(course);
    dispatch(
      course.id
        ? updateCourseSucess(savedCourse)
        : saveCourseSuccess(savedCourse)
    );
    toast.success('Course saved.');
  } catch (error) {
    toast.error(`Error saving course: ${error}`, { autoClose: false });
    dispatch(saveCourseFailure());
    throw error;
  }
};

export const deleteCourse = (
  course: Course
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch(deleteCourseOptimistic(course));
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await courseApi.deleteCourse(course.id!);
  } catch (error) {
    toast.error(`Delete failded. ${error.message}`, { autoClose: false });
    dispatch(fetchCourses());
  }
};
