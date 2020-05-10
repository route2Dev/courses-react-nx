import React from 'react';
import { render } from '@testing-library/react';

import ManageCoursePage from './manage-course-page';

describe(' ManageCoursePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManageCoursePage />);
    expect(baseElement).toBeTruthy();
  });
});
