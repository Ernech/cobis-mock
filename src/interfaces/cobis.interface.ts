

export interface DataCredit{

    creditNumber:string 
    disbursementDate:string 
    affiliationType:string 
    capitalBalance:number
    creditStatus:string 
    currency:string 
}

export interface GetDataCreditsPerOwner{
    
    transactionId:string;

    result:Result;
    
    timestamp:number;

}

export interface Result{

    dataCredits:DataCredit[]

}

export interface CreditsPerClient{
    clientId:string;

    dataCredits:DataCredit[];
}