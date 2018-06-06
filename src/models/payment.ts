import { Entity, property, model} from '@loopback/repository';

@model()
export class Payment extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    nameoncard: string;

    @property({
        type: 'string',
        required: true
    })
    cardnumber: string;

    @property({
        type: 'string',
        required: true
    })
    expirationdate: string;
    
    @property({
        type: 'string',
        required: true
    })
    securitycode: string;

    getId() {
        return this.id;
    }
}

// question: what does the question mark mean next to the id variable?