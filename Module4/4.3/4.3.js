'use strict';

async function searchForm(evt) {
    evt.preventDefault();

    const query = document.querySelector('input[name=q]').value;
    const results = document.getElementById('results');
    results.innerHTML = '';

    const article = document.createElement('article');
    try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const json = await response.json();

    const name = document.createElement('h2');
    name.textContent = json[0].show.name;
    article.appendChild(name);

    const link = document.createElement('a');
    link.textContent = json[0].show.url;
    link.href = json[0].show.url;
    link.target = '_blank';
    article.appendChild(link);

    const img = document.createElement('img');
    img.src = json[0].show.image?.medium;
    img.alt = json[0].show.name;
    article.appendChild(img);

    const div = document.createElement('div');
    div.innerHTML = json[0].show.summary;
    article.appendChild(div);

    results.appendChild(article);

    } catch (error) {
        console.log(error.message);
    }
}


const search = document.getElementById('search');
search.addEventListener('submit', searchForm);
