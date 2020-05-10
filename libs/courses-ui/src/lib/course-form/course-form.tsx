import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import './course-form.scss';
import { Course, Author } from '@courses-react-nx/api-interfaces';
import TextInput from '../inputs/TextInput';
import SelectInput from '../inputs/SelectInput';

/* eslint-disable-next-line */
export interface CourseFormProps {
  course: Course;
  authors: Author[];
  onSave: (course: Course) => Promise<void>;
}

export const CourseForm: React.FC<CourseFormProps> = ({
  course,
  authors,
  onSave
}) => {
  return (
    <>
      <h2>{course.id ? 'Edit' : 'Add'} Course</h2>
      <Formik
        initialValues={course}
        initialStatus={false}
        onSubmit={async (values, { setSubmitting }) => {
          await onSave(values);
          setSubmitting(false);
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(6)
            .required(),
          authorId: Yup.number().required('Author is a required field.'),
          category: Yup.string()
            .min(3)
            .required()
        })}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <TextInput name="title" label="Title" />

            <SelectInput
              name="authorId"
              label="Author"
              required={true}
              defaultOption="Select Author"
              options={authors.map(author => ({
                value: author.id,
                text: author.name
              }))}
            />

            <TextInput name="category" label="Category" required />

            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="btn btn-primary"
            >
              {formik.isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CourseForm;
