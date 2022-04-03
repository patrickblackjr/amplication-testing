import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  assignedEvents?: EventUpdateManyWithoutUsersInput;
  email?: string;
  events?: EventUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
