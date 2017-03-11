import _ from 'lodash';

const excercises = {
    'e001': {
        desc: 'butterfly legs',
        bodyParts: ['legs'],
        equipment: ['flippers', 'board']
    },
    'e002': {
        desc: 'freestyle legs',
        bodyParts: ['legs'],
        equipment: ['flippers', 'board']
    }
};

export default class Exercise {
    constructor () {}

    getRandom() {
        return _.sample(excercises).desc;
    }
}