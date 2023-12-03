'use strict';

const form = document.querySelector('form');
form.addEventListener('submit', async function(evt)
    {
        evt.preventDefault();
        const value_from_input= document.getElementById('query').value;

        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error.message);
        }
    }
);
