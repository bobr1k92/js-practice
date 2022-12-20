import axios from "axios";
/**
 * Одна стаття має
 * 1. Заголовок
 * 2. Опис
 * 3. Картинку
 * 4. Посилання на статтю
 */

/**
 * 1. Додати сlick listener до кнопки пошуку
 * 2. Написати функцію відправки запиту і обробки відповіді 
 * 3. Написати функію рендеру
 */

const API_KEY = 'b5f9a10038a94cda93723e0a1eeb5c6e';

const searchBtnRef = document.getElementById('searchCtr');
const searchField = document.getElementById('searchNewsField');
const articlesContainer = document.getElementById('articles');

searchBtnRef.addEventListener('click', e => {
  getNewsAxios ({
        query: searchField.value
    })
    console.log(query);
});

function getNewsAxios({query}){
  const urlAPI = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-12&apiKey=${API_KEY}`
  axios.get(urlAPI)
  .then(res => res.data)
  .then(({articles}) => {
    render(articles); 
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
}

function getNews({query}) {
    const urlAPI = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-12&apiKey=${API_KEY}`

    fetch(urlAPI).then(res => {
    if (!res.ok) {
        throw new Error(res.message)
    }
    return res.json()
  })
  .then(({articles}) => {
    render(articles);  
  })
};


function render(articles) {
    articlesContainer.innerHTML = '';

    const articlesElement = articles.map(({title, description, url, urlToImage}) => {
        return `<article class="news">
        <h2>${title}</h2>
        <div>${description}</div>
        <img src="${urlToImage}" alt="${title}" />
        <a href="${url}">more</a>
      </article>`;    
    });

    articlesContainer.insertAdjacentHTML('beforeend', articlesElement.join(''));
}
 
