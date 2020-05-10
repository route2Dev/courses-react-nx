import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
// import { History } from 'history';
import { Course, newCourse } from '@courses-react-nx/api-interfaces';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectCourseEntities,
  fetchCourses,
  saveCourse
} from '../../store/course.slice';
import { selectAuthorEntities, fetchAuthors } from '../../store/author.slice';
import { CourseForm } from '@courses-react-nx/courses-ui';

import './manage-course-page.scss';

const getCoursesBySlug = (courses: Course[], slug: string) => {
  return (
    (slug && courses.length > 0
      ? courses.find(course => course.slug === slug)
      : null) || newCourse
  );
};

type RouteParams = { slug: string };

/* eslint-disable-next-line */
export interface ManageCoursePageProps
  extends RouteComponentProps<RouteParams> {}

export const ManageCoursePage: React.FC<ManageCoursePageProps> = ({
  match,
  history
}) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const dispatch = useDispatch();
  const courses = useSelector(selectCourseEntities);
  const authors = useSelector(selectAuthorEntities);

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
    const slug = match.params.slug;
    setSelectedCourse({ ...getCoursesBySlug(courses, slug) });
  }, [courses, dispatch, match.params.slug]);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(fetchAuthors());
    }
  }, [authors.length, dispatch]);

  const handleSave = async (course: Course) => {
    try {
      await dispatch(saveCourse(course));
    } catch (error) {
      // TODO: pass server error to form to map to error state.
    }
  };

  return authors.length === 0 || selectedCourse === null ? null : (
    <CourseForm course={selectedCourse} authors={authors} onSave={handleSave} />
  );
};

export default ManageCoursePage;
