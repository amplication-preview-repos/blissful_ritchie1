import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ObservationService } from "./observation.service";
import { ObservationControllerBase } from "./base/observation.controller.base";

@swagger.ApiTags("observations")
@common.Controller("observations")
export class ObservationController extends ObservationControllerBase {
  constructor(protected readonly service: ObservationService) {
    super(service);
  }
}
