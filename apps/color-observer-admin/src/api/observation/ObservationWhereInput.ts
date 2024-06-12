import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ObservationWhereInput = {
  colorAfter?: StringNullableFilter;
  colorBefore?: StringNullableFilter;
  id?: StringFilter;
  objectId?: StringNullableFilter;
  result?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
