import { AuthorState } from './author.slice';
import { CourseState } from './course.slice';

export interface AppState {
  authors: AuthorState;
  courses: CourseState;
  apiCallsInProgress: number;
}
