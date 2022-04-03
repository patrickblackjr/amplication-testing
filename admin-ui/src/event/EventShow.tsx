import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Alert Suppression" source="alertSuppression" />
        <ReferenceField label="Assigned" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Change Number" source="changeNumber" />
        <ReferenceField label="Client" source="client.id" reference="Client">
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
      </SimpleShowLayout>
    </Show>
  );
};
