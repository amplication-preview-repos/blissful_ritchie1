import { Observation as TObservation } from "../api/observation/Observation";

export const OBSERVATION_TITLE_FIELD = "colorAfter";

export const ObservationTitle = (record: TObservation): string => {
  return record.colorAfter?.toString() || String(record.id);
};
