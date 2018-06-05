import { Entity, property, model} from '@loopback/repository';

@model()
export class Charities extends Entity {
    @property({
        type: 'number',
        id: true
    })
    charity_id?: number;

    @property({
        type: 'string',
        required: true
    })
    charity_name: string;

    @property({
        type: 'string',
        required: true
    })
    charity_desc: string;

    getId() {
        return this.charity_id;
    }
}