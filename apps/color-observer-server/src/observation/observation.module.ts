import { Module } from "@nestjs/common";
import { ObservationModuleBase } from "./base/observation.module.base";
import { ObservationService } from "./observation.service";
import { ObservationController } from "./observation.controller";
import { ObservationResolver } from "./observation.resolver";

@Module({
  imports: [ObservationModuleBase],
  controllers: [ObservationController],
  providers: [ObservationService, ObservationResolver],
  exports: [ObservationService],
})
export class ObservationModule {}
