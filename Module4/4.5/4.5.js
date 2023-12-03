'use strict';


async function chuck() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await response.json();
        console.log(json.value);
    } catch(error) {
        console.error('Error! No joke!', error);
    }

}

chuck();
