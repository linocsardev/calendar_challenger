import { OmitType } from "@nestjs/mapped-types";
import { AllTaskDto } from "./all.dto";

export class CreateTaskDto extends OmitType(AllTaskDto, ['id']){

}
