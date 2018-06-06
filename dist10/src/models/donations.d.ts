import { Entity } from '@loopback/repository';
export declare class Donations extends Entity {
    id?: number;
    donation_amount: string;
    getId(): number | undefined;
}
