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
                        creditNumber: "666147",
                        disbursementDate: "31/08/2019",
                        affiliationType: "1",
                        capitalBalance: 140000.00,
                        creditStatus: "5",
                        currency: "1"
                    },
                    {
                        creditNumber: "612677",
                        disbursementDate: "22/05/2019",
                        affiliationType: "1",
                        capitalBalance: 921751.73,
                        creditStatus: "5",
                        currency: "1"
                    }
                
        ]},
            timestamp: Date.now()

        }

        return credits;
    }

}
