import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ClientTitle } from "../client/ClientTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Alert Suppression" source="alertSuppression" />
        <ReferenceInput source="user.id" reference="User" label="Assigned">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Change Number" source="changeNumber" />
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <BooleanInput label="Create Webex" source="createWebex" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="End" source="end" />
        <SelectInput
          source="eventType"
          label="Event Type"
          choices={[
            {
              label: "Standard monthly patching",
              value: "StandardMonthlyPatching",
            },
            { label: "MTSM", value: "Mtsm" },
            { label: "MeditechClientUpdate", value: "MeditechClientUpdate" },
            { label: "Other/one-off", value: "OtherOneOff" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="resourceType"
          label="Resource Type"
          choices={[
            { label: "L2 MEDITECH", value: "L2Meditech" },
            { label: "AMS", value: "Ams" },
            { label: "Infrastructure", value: "Infrastructure" },
            { label: "Citrix", value: "Citrix" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Start" source="start" />
        <TextInput label="Title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput
          label="Webex Meeting Info"
          multiline
          source="webexMeetingInfo"
        />
      </SimpleForm>
    </Create>
  );
};
