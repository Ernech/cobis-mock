

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

    result:DataCredit[];
    
    timestamp:number;

}