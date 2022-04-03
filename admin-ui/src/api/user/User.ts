import { Event } from "../event/Event";

export type User = {
  assignedEvents?: Array<Event>;
  createdAt: Date;
  email: string;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
