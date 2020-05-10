import { Express } from 'express';
import * as db from './data/db.json';
import { Course, Author } from '@courses-react-nx/api-interfaces';

const courses: Course[] = db.courses;
const authors: Author[] = db.authors;

const validateCourse = (course: Course) => {
  if (courses.find(c => c.title === course.title)) {
    return 'Title already exists';
  }
  return '';
};

// Returns a URL friendly slug
const createSlug = value => {
  return value
    .replace(/[^a-z0-9_]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
};

export function addCourseRoutes(app: Express) {
  app.get('/api/courses', (req, resp) => resp.json(courses));
  app.post('/api/courses', (req, resp) => {
    const error = validateCourse(req.body);

    if (error) {
      resp.status(400).send(error);
    } else {
      createSlug(req.body.title);
      resp.status(201).json(req.body);
    }
  });

  app.put('/api/courses/:id', (req, resp) => {
    resp.status(200).json(req.body);
  });

  app.delete('/api/courses/:id', (req, resp) => {
    resp.status(200).json({});
  });
}

export function addAuthorRoutes(app: Express) {
  app.get('/api/authors', (req, resp) => resp.send(authors));
}
