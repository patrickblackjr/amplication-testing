import { Event } from "../event/Event";

export type Client = {
  abbreviation: string;
  createdAt: Date;
  domain: string;
  events?: Array<Event>;
  id: string;
  name: string;
  updatedAt: Date;
};
