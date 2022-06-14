// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract MyContract {
    string public namePerson = 'Graham';
    uint8 public agePerson = 24;
    struct Person {
        string name;
        uint8 age; 
    }

    Person[] public people;

    constructor() {
        people.push(Person({name: namePerson, age: agePerson}));
    }

    function addPerson(string memory _name, uint8 _age) public {
        people.push(Person({name: _name, age: _age}));
    }
}