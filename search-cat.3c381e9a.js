const e={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},t=new class{fetchArticles(){console.log(this);const e=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&${this.page}`;return fetch(e,{headers:{Authorization:"b5f9a10038a94cda93723e0a1eeb5c6e"}}).then((e=>e.json())).then((e=>(this.incrementPage(),e.articles)))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};e.searchForm.addEventListener("submit",(function(e){e.preventDefault(),t.query=e.currentTarget.elements.query.value,t.resetPage(),t.fetchArticles().then((e=>console.log(e)))})),e.loadMoreBtn.addEventListener("click",(function(){t.fetchArticles().then((e=>console.log(e)))}));
//# sourceMappingURL=search-cat.3c381e9a.js.map
