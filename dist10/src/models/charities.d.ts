import { Entity } from '@loopback/repository';
export declare class Charities extends Entity {
    charity_id?: number;
    charity_name: string;
    charity_desc: string;
    getId(): number | undefined;
}
