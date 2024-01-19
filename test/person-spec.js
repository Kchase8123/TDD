// Your code here
const { expect } = require('chai');
const Person = require('../problems/person');

//constructor - will intake a name and age and set them as properties on the instance.
//Make sure you test that these properties exist on an instance, as well as ensuring they are set properly.

describe ('Person', () => {
    it('constructor should intake a name and age and set them as instances', () => {
        const res = new Person(Peter, 86);
        expect(res).to.equal({name: Peter, age: 86})
    })
})
