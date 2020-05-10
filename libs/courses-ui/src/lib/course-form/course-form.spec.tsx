import React from 'react';
import { render } from '@testing-library/react';

import CourseForm from './course-form';

describe(' CourseForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseForm />);
    expect(baseElement).toBeTruthy();
  });
});
