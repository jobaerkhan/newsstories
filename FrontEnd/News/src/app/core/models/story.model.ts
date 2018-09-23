import { User } from './user.model';

export interface Story {
    id: number;
  title: string;
  body: string;
  publishedDate: Date;
  userName: string;
  userId: number;
}
