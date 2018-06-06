import { Entity, property, model} from '@loopback/repository';

@model()
export class Donations extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    donation_amount: string;

    getId() {
        return this.id;
    }
}

// question: what does the question mark mean next to the id variable?