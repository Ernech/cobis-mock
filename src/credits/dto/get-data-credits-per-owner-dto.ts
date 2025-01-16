import { IsNotEmpty, IsString } from "class-validator";

export class GetDataCreditPerOwnerDTO{

    @IsString()
    @IsNotEmpty()
    clientId:string

}

