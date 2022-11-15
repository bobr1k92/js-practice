const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }

    const currentActiveBtn = document.querySelector('.tags__btn--active');

    console.log(currentActiveBtn);

    // if (currentActiveBtn) {
    //     currentActiveBtn.classList.remove('tags__btn--active');
    // }

    currentActiveBtn?.classList.remove('tags__btn--active');

    const nextActiveBtn = evt.target

    // console.log(evt.target);
    // evt.target.classList.add('tags__btn--active');
    nextActiveBtn.classList.add('tags__btn--active');
    selectedTag = nextActiveBtn.dataset.value;
    console.log(selectedTag);
}