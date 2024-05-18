import { PickType } from "@nestjs/mapped-types";
import { AllTaskDto } from "./all.dto";

export class WhereTaskDto extends PickType(AllTaskDto, ['id', 'idinstitucion']) {

}