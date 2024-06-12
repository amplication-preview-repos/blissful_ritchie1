import { SortOrder } from "../../util/SortOrder";

export type ObservationOrderByInput = {
  colorAfter?: SortOrder;
  colorBefore?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  objectId?: SortOrder;
  result?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
