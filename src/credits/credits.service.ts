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
                    creditNumber: "1477438",
                    disbursementDate: "16/08/2024",
                    affiliationType: "1",
                    capitalBalance: 101728.00,
                    creditStatus: "0",
                    currency: "1"
              },
              {
                creditNumber: "1477577",
                disbursementDate: "16/08/2024",
                affiliationType: "1",
                capitalBalance: 120000.00,
                creditStatus: "0",
                currency: "1"
          }
            ]},
              timestamp: Date.now()

        }

        return credits;
    }

}
