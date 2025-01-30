export interface StatusUpdateResponse {
    transactionId: string;
    result:        Result;
    timestamp:     Date;
}

export interface Result {
    userCode: string;
    idTramit: string;
    state:    string;
}

export interface StatusUpdateErrorResponse {
    code:          string;
    message:       string;
    cause:         string;
    reference:     string;
    transactionId: string;
}
