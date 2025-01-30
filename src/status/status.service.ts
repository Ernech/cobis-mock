import { Injectable } from '@nestjs/common';
import { ObservationDJSDTO } from './dto/observation-djs.dto';
import { StatusUpdateErrorResponse, StatusUpdateResponse } from 'src/interfaces/status-update.interface';
import {v4 as uuid} from 'uuid';

@Injectable()
export class StatusService {



    public observatioDJS(observationDJSDTO:ObservationDJSDTO):StatusUpdateResponse|StatusUpdateErrorResponse{

        const statusUpdatedResponse:StatusUpdateResponse = {
            transactionId: uuid(),
            result:{
                userCode:observationDJSDTO.userCode,
                idTramit:observationDJSDTO.idTramit,
                state:'15'
            },
            timestamp: new Date()
        }

        return statusUpdatedResponse;

        // const statusUpdateErrorResponse:StatusUpdateErrorResponse={
        //     code: null,
        //     message: "An unexpected error occurred",
        //     cause:  null,
        //     reference:     null,
        //     transactionId: null
        // }
        // return statusUpdateErrorResponse;
    }


}
