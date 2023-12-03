'use strict';

const searchForm = document.getElementById('search');
searchForm.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const value_from_input = document.querySelector('input[name=joke]').value;

    const article = document.createElement('article');
    const print = document.querySelector('#print');

    try {
        print.innerHTML = '';

        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
        const json = await response.json();
        console.log(json);

        json.result.forEach(jokes => {
            const p = document.createElement('p');
            p.textContent = jokes.value;
            article.appendChild(p);
        })

        print.appendChild(article);
    } catch(error) {

        console.error('Error!', error.message);
    }
});
