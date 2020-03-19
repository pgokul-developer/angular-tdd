export interface RegisteredAccount {
    displayName: string;
    accountNumber: string;
    bankName: string;
}

export interface RawRegisteredAccount {
    number: string;
    account_name: string;
    bank: string;
    active: boolean;
}