import { PickType } from "@nestjs/mapped-types";
import { AllTaskDto } from "./all.dto";

export class DataTaskDto  extends PickType(AllTaskDto, ['id', 'idinstitucion']){}