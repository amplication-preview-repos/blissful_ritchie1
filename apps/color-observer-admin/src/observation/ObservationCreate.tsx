import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ObservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ColorAfter" source="colorAfter" />
        <TextInput label="ColorBefore" source="colorBefore" />
        <TextInput label="ObjectId" source="objectId" />
        <TextInput label="Result" multiline source="result" />
        <DateTimeInput label="Timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
