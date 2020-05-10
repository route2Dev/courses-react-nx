import { handleError, handleResponse } from './api-utils';
import { Course } from '@courses-react-nx/api-interfaces';
const baseUrl = '/api/courses/';

export const getCourses = () => {
  console.log('Courses - baseUrl:', baseUrl);
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
};

export const saveCourse = (course: Course): Promise<Course> => {
  return fetch(baseUrl + (course.id || ''), {
    method: course.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
};

export function deleteCourse(courseId: number) {
  return fetch(baseUrl + courseId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
