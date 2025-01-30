import { IsNotEmpty, IsString } from "class-validator";


export class ObservationDJSDTO{

    @IsString()
    @IsNotEmpty()
    userCode: string;

    @IsString()
    @IsNotEmpty()
    idTramit: string;
    
    @IsString()
    @IsNotEmpty()
    state: string;
    
    @IsString()
    @IsNotEmpty()
    observation: string;
}