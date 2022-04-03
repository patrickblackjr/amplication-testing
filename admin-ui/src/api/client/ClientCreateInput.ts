import { EventCreateNestedManyWithoutClientsInput } from "./EventCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  abbreviation: string;
  domain: string;
  events?: EventCreateNestedManyWithoutClientsInput;
  name: string;
};
