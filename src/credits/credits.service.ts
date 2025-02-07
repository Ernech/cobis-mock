import { Injectable } from '@nestjs/common';
import { GetDataCreditPerOwnerDTO } from './dto/get-data-credits-per-owner-dto';
import { CreditsPerClient, DataCredit, GetDataCreditsPerOwner } from 'src/interfaces/cobis.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreditsService {

    getDataCreditsPerOwner(getCreditsDTO: GetDataCreditPerOwnerDTO): GetDataCreditsPerOwner {
        const credits: GetDataCreditsPerOwner = {
            transactionId: uuidv4(),
            result: {
                dataCredits: this.getCredits(getCreditsDTO.clientId)
            },
            timestamp: Date.now()

        }

        return credits;
    }

    private getCredits(clienteId: string): DataCredit[] {

        const credistsPerClientArray: CreditsPerClient[] = [
            {
                clientId: "9968551",
                dataCredits: [
                    {
                        creditNumber: "1409543",
                        disbursementDate: "21/03/2024",
                        affiliationType: "1",
                        capitalBalance: 125000.00,
                        creditStatus: "5",
                        currency: "1"
                    },
                    {
                        creditNumber: "1442716",
                        disbursementDate: "29/05/2024",
                        affiliationType: "1",
                        capitalBalance: 140000.00,
                        creditStatus: "5",
                        currency: "1"
                    }
                ]
            },
            {
                clientId: "9968552",
                dataCredits: [
                    {
                        creditNumber: "1442716",
                        disbursementDate: "29/05/2024",
                        affiliationType: "1",
                        capitalBalance: 140000.00,
                        creditStatus: "5",
                        currency: "1"
                    }
                ]
            }
        ]
        const credistsPerClient:CreditsPerClient=credistsPerClientArray.find(creditPerClient=>creditPerClient.clientId===clienteId)
        return !credistsPerClient ? []:credistsPerClient.dataCredits;
    }

}
