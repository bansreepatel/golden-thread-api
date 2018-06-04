import { Entity, property, model} from '@loopback/repository';

@model()
export class Pizza extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    // below should be filled with data since there is no question mark near the label
    @property({ 
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'string',
    })
    desc: string;

    @property({
        type: 'string',
    })
    toppings: string;

    getId() {
        return this.id;
    }
}