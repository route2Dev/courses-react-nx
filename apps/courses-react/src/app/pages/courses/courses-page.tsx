import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/app-state';
import { fetchCourses, deleteCourse } from '../../store/course.slice';
import { fetchAuthors, selectAuthorEntities } from '../../store/author.slice';
import { CourseList } from '@courses-react-nx/courses-ui';
import { Course } from '@courses-react-nx/api-interfaces';
import { Redirect } from 'react-router';

import './courses-page.scss';

const getAuthorName = (authorId: number, state: AppState): string => {
  const author = state.authors.entities.find(a => a.id === authorId);
  return author ? author.name : '';
};

const mapCourses = (state: AppState) => {
  return state.authors.entities.length === 0
    ? { ...state.courses, entities: [] }
    : {
        ...state.courses,
        entities: state.courses.entities.map((course: Course) => {
          return {
            ...course,
            authorName: getAuthorName(course.authorId, state)
          };
        })
      };
};

/* eslint-disable-next-line */
export interface CoursesPageProps {}

export const CoursesPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state: AppState) => mapCourses(state));
  const authors = useSelector(selectAuthorEntities);

  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);

  useEffect(() => {
    if (courses.entities.length === 0) {
      dispatch(fetchCourses());
    }
  }, [courses.entities.length, dispatch]);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(fetchAuthors());
    }
  }, [authors.length, dispatch]);

  const handleAddCourse = () => {
    setRedirectToAddCoursePage(true);
  };

  const handleCourseDelete = (course: Course) => {
    dispatch(deleteCourse(course));
  };

  return (
    <div>
      {redirectToAddCoursePage && <Redirect to="/course" />}
      <h2>Courses</h2>
      <button
        style={{ marginBottom: 20 }}
        className="btn btn-primary add-course"
        onClick={handleAddCourse}
      >
        Add Course
      </button>
      <CourseList courses={courses.entities} onDelete={handleCourseDelete} />
    </div>
  );
};

export default CoursesPage;
