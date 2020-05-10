import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '@courses-react-nx/api-interfaces';

import './course-list.scss';

/* eslint-disable-next-line */
export interface CourseListProps {
  courses: Course[];
  onDelete: (course: Course) => void;
}

export const CourseList: React.FC<CourseListProps> = ({
  courses,
  onDelete
}) => {
  return (
    <>
      {courses?.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {courses.map(course => {
              return (
                <tr key={course.id}>
                  <td>
                    <a
                      className="btn btn-light"
                      href={'http://pluralsight.com/courses/' + course.slug}
                      // eslint-disable-next-line react/jsx-no-target-blank
                      target="_blank"
                    >
                      Watch
                    </a>
                  </td>
                  <td>
                    <Link to={'/course/' + course.slug}>{course.title}</Link>
                  </td>
                  <td>{course.authorName}</td>
                  <td>{course.category}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => onDelete(course)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CourseList;
