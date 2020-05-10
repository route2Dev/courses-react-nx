import {
  createSlice,
  createSelector,
  Action,
  PayloadAction
} from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import { Author } from '@courses-react-nx/api-interfaces';
import { getAuthors } from '../api/author-api';
import { AppState } from './app-state';

export const AUTHOR_FEATURE_KEY = 'authors';

/*
 * Change this from `any` if there is a more specific error type.
 */
export type AuthorError = any;

/*
 * Update these interfaces according to your requirements.
 */
export interface AuthorState {
  entities: Author[];
  loaded: boolean;
  error: AuthorError;
}

export const initialAuthorState: AuthorState = {
  entities: [],
  loaded: false,
  error: null
};

export const authorSlice = createSlice({
  name: AUTHOR_FEATURE_KEY,
  initialState: initialAuthorState as AuthorState,
  reducers: {
    getAuthorStart: (state, action: PayloadAction<undefined>) => {
      state.loaded = false;
    },
    getAuthorSuccess: (state, action: PayloadAction<Author[]>) => {
      state.loaded = true;
      state.entities = action.payload;
    },
    getAuthorFailure: (state, action: PayloadAction<AuthorError>) => {
      state.error = action.payload;
    }
  }
});

/*
 * Export reducer for store configuration.
 */
export const authorReducer = authorSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(getAuthorSuccess([{ id: 1 }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const {
  getAuthorStart,
  getAuthorSuccess,
  getAuthorFailure
} = authorSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * const entities = useSelector(selectAuthorEntities);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
export const getAuthorState = (rootState: AppState): AuthorState =>
  rootState[AUTHOR_FEATURE_KEY];

export const selectAuthorEntities = createSelector(
  getAuthorState,
  s => s.entities
);

export const selectAuthorLoaded = createSelector(getAuthorState, s => s.loaded);

export const selectAuthorError = createSelector(getAuthorState, s => s.error);

/*
 * Export default effect, handled by redux-thunk.
 * You can replace this with your own effects solution.
 */
export const fetchAuthors = (): ThunkAction<
  void,
  any,
  null,
  Action<string>
> => async dispatch => {
  try {
    dispatch(getAuthorStart());
    const data = await getAuthors();
    dispatch(getAuthorSuccess(data));
  } catch (err) {
    dispatch(getAuthorFailure(err));
  }
};
