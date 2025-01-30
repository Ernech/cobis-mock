import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { StatusService } from './status.service';
import { ObservationDJSDTO } from './dto/observation-djs.dto';

@Controller('fie/msm/gateway/insurance/v1.0')
export class StatusController {

    constructor(private readonly statusService:StatusService){

    }

    @Post('/insuranceStateUpdate')
    @HttpCode(200)
    public DJSObservation(@Body() observationDJSDTO:ObservationDJSDTO){
        return this.statusService.observatioDJS(observationDJSDTO);
    }


}
