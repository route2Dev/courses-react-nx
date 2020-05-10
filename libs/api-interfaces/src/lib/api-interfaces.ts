export interface Message {
  message: string;
}

export interface Course {
  id?: number;
  title: string;
  slug?: string;
  authorId?: number;
  category: string;
  authorName?: string;
}

export const newCourse: Course = {
  title: '',
  category: '',
  authorId: '' as any
};

export interface Author {
  id: number;
  name: string;
}
