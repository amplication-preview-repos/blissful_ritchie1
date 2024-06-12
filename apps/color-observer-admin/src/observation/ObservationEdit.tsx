import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ObservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ColorAfter" source="colorAfter" />
        <TextInput label="ColorBefore" source="colorBefore" />
        <TextInput label="ObjectId" source="objectId" />
        <TextInput label="Result" multiline source="result" />
        <DateTimeInput label="Timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
