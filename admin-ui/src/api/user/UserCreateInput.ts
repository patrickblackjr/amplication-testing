import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  assignedEvents?: EventCreateNestedManyWithoutUsersInput;
  createdEvents?: EventCreateNestedManyWithoutUsersInput;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
