import React from 'react';
import { render } from '@testing-library/react';

import CoursesPage from './courses-page';

describe(' CoursesPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoursesPage />);
    expect(baseElement).toBeTruthy();
  });
});
