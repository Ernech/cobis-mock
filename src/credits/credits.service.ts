import { Injectable } from '@nestjs/common';
import { GetDataCreditPerOwnerDTO } from './dto/get-data-credits-per-owner-dto';
import { GetDataCreditsPerOwner } from 'src/interfaces/cobis.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreditsService {

    getDataCreditsPerOwner(getCreditsDTO:GetDataCreditPerOwnerDTO):GetDataCreditsPerOwner{

        const credits:GetDataCreditsPerOwner = {
            transactionId: uuidv4(),
            result:{
                dataCredits:[
                    {
                        creditNumber: "1425748",
                        disbursementDate: "31/05/2024",
                        affiliationType: "1",
                        capitalBalance: 256850.00,
                        creditStatus: "0",
                        currency: "1"
                    }
                
        ]},
            timestamp: Date.now()

        }

        return credits;
    }

}
