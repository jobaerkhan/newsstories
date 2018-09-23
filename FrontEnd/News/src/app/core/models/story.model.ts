import { User } from './user.model';

export interface Story {
    Id?: number;
  Title: string;
  Body: string;
  PublishedDate?: Date;
  UserFullName?: string;
  UserId?: string;
}
