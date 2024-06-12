import * as graphql from "@nestjs/graphql";
import { ObservationResolverBase } from "./base/observation.resolver.base";
import { Observation } from "./base/Observation";
import { ObservationService } from "./observation.service";

@graphql.Resolver(() => Observation)
export class ObservationResolver extends ObservationResolverBase {
  constructor(protected readonly service: ObservationService) {
    super(service);
  }
}
