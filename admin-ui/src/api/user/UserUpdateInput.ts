import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  assignedEvents?: EventUpdateManyWithoutUsersInput;
  createdEvents?: EventUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
