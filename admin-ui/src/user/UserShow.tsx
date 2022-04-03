import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Event" target="UserId" label="Events">
          <Datagrid rowClick="show">
            <BooleanField label="Alert Suppression" source="alertSuppression" />
            <ReferenceField label="Assigned" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Change Number" source="changeNumber" />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="Create Webex" source="createWebex" />
            <TextField label="Description" source="description" />
            <TextField label="End" source="end" />
            <TextField label="Event Type" source="eventType" />
            <TextField label="ID" source="id" />
            <TextField label="Resource Type" source="resourceType" />
            <TextField label="Start" source="start" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Webex Meeting Info" source="webexMeetingInfo" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Event" target="UserId" label="Events">
          <Datagrid rowClick="show">
            <BooleanField label="Alert Suppression" source="alertSuppression" />
            <ReferenceField label="Assigned" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Change Number" source="changeNumber" />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="Create Webex" source="createWebex" />
            <TextField label="Description" source="description" />
            <TextField label="End" source="end" />
            <TextField label="Event Type" source="eventType" />
            <TextField label="ID" source="id" />
            <TextField label="Resource Type" source="resourceType" />
            <TextField label="Start" source="start" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Webex Meeting Info" source="webexMeetingInfo" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
