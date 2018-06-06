import { Entity } from '@loopback/repository';
export declare class Payment extends Entity {
    id?: number;
    nameoncard: string;
    cardnumber: string;
    expirationdate: string;
    securitycode: string;
    getId(): number | undefined;
}
