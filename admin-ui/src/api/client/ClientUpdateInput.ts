import { EventUpdateManyWithoutClientsInput } from "./EventUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  abbreviation?: string;
  domain?: string;
  events?: EventUpdateManyWithoutClientsInput;
  name?: string;
};
