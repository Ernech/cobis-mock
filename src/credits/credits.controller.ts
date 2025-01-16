import { Body, Controller, Post } from '@nestjs/common';
import { CreditsService } from './credits.service';
import { GetDataCreditPerOwnerDTO } from './dto/get-data-credits-per-owner-dto';
import { GetDataCreditsPerOwner } from 'src/interfaces/cobis.interface';

@Controller('fie/msm/gateway/insurance/v1.0')
export class CreditsController {

    constructor(private readonly creditsService:CreditsService){}

    @Post('getDataCreditPerOwnerCobis')
    getDataCredtisPerOwner(@Body() getDataCreditsPerOwnerDTO:GetDataCreditPerOwnerDTO):GetDataCreditsPerOwner{
        return this.creditsService.getDataCreditsPerOwner(getDataCreditsPerOwnerDTO);
    }

}
