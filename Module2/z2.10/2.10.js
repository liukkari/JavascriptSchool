'use strict';

function candidates() {
    const array = [];
    const people = prompt('How many candidates there are?');
    const peopleInt = parseInt(people);

    let i = peopleInt;
    while (i > 0) {
        let name = prompt('What is the candidates name?');
        const competitor = {
            name: name,
            votes: 0
        }
        array.push(competitor)
        i--;
    }

    return array
}

function amountOfVoters() {
    const amount = prompt('How many voters there are?');
    const amountInt = parseInt(amount);

    return amountInt
}

const list = candidates();
const votes = amountOfVoters();

for (let i=0; i < votes; i++) {
    const candidateName = prompt('Who will you vote for? Empty vote is possible.');
    for (let j=0; j < list.length; j++) {
        let candidate = list[j]['name'];
        if (candidate === candidateName) {
            list[j]['votes'] += 1;
        }
    }
}

list.sort((a,b) => b.votes - a.votes);
console.log(`The winner is ${list[0]['name']} with ${list[0]['votes']} votes.`);
console.log('results:');
for (let object of list) {
    console.log(object.name + ': ' + object.votes + ' votes');
}
