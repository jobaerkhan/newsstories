import { User } from './user.model';

export interface Story {
    id: number;
  title: string;
  body: string;
  publishedDate: Date;
  user: User;
}
