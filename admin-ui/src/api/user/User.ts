import { Event } from "../event/Event";

export type User = {
  assignedEvents?: Array<Event>;
  createdAt: Date;
  createdEvents?: Array<Event>;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
