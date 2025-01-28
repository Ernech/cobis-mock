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
                    creditNumber: "341555",
                    disbursementDate: "27/03/2024",
                    affiliationType: "1",
                    capitalBalance: 140000.00,
                    creditStatus: "0",
                    currency: "1"
                },
                {
                    creditNumber: "364342",
                    disbursementDate: "31/07/2017",
                    affiliationType: "1",
                    capitalBalance: 960400.00,
                    creditStatus: "0",
                    currency: "1"
                }
        ]},
            timestamp: Date.now()

        }

        return credits;
    }

}
