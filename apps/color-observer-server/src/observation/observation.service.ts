import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ObservationServiceBase } from "./base/observation.service.base";

@Injectable()
export class ObservationService extends ObservationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
