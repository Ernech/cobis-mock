import { Injectable } from '@nestjs/common';
import { GetDataCreditPerOwnerDTO } from './dto/get-data-credits-per-owner-dto';
import { GetDataCreditsPerOwner } from 'src/interfaces/cobis.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreditsService {

    getDataCreditsPerOwner(getCreditsDTO:GetDataCreditPerOwnerDTO):GetDataCreditsPerOwner{

        const credits:GetDataCreditsPerOwner = {
            transactionId: uuidv4(),
            result:[{
                creditNumber: "1440583",
                disbursementDate: "31/05/2024",
                affiliationType: "1",
                capitalBalance: 111663.4,
                creditStatus: "8",
                currency: "1"
              },
              {
                creditNumber: "487009",
                disbursementDate: "25/05/2018",
                affiliationType: "1",
                capitalBalance: 24148.06,
                creditStatus: "6",
                currency: "1"
              }],
              timestamp: Date.now()

        }

        return credits;
    }

}
