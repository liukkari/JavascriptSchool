 'use strict';


 document.getElementById('searchForm').addEventListener('submit', async function(evt) {
      evt.preventDefault();
      
      const query = document.getElementById('query').value;
      
      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        document.getElementById('results').innerHTML = '';

        data.forEach(tvShow => {
          const article = document.createElement('article');

          const nameHeader = document.createElement('h2');
          nameHeader.textContent = tvShow.show.name;
          article.appendChild(nameHeader);

          const urlLink = document.createElement('a');
          urlLink.textContent = 'Details';
          urlLink.href = tvShow.show.url;
          urlLink.target = '_blank';
          article.appendChild(urlLink);

          const img = document.createElement('img');
          img.src = tvShow.show.image?.medium || 'https://via.placeholder.com/210x295?text=Not%20Found';
          img.alt = tvShow.show.name;
          article.appendChild(img);

          const summaryDiv = document.createElement('div');
          summaryDiv.innerHTML = tvShow.show.summary;
          article.appendChild(summaryDiv);


          document.getElementById('results').appendChild(article);
        });

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
