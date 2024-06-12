import { ObservationWhereInput } from "./ObservationWhereInput";
import { ObservationOrderByInput } from "./ObservationOrderByInput";

export type ObservationFindManyArgs = {
  where?: ObservationWhereInput;
  orderBy?: Array<ObservationOrderByInput>;
  skip?: number;
  take?: number;
};
