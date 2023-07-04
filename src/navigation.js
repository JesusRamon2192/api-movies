searchFormBtn.addEventListener('click', ()=> location.hash='#search=');


trendingBtn.addEventListener('click', ()=>   location.hash='#trends=');


arrowBtn.addEventListener('click', ()=> location.hash='#home');


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function smoothscroll(){
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
};

function navigator() {
    console.log({ location });


    location.hash.startsWith('#trends')
    ? trendPage()       :
    location.hash.startsWith('#search=')
    ? searchPage()      :
    location.hash.startsWith('#movieDetail=')
    ? movieDetailPage() :
    location.hash.startsWith('#category=') 
    ? categoriesPage()  :
    homePage();

    smoothscroll();
}


const homePage = () => {
    console.log('Home');


    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');


    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');


    getMovies('trending/movie/day', trendingMoviesPreviewList);
    getCategoriesPreview();
}


const categoriesPage = () => {
    console.log('Categories');


    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');


    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');


    const [categoryUrl, categoryInfo] = location.hash.split('='); // ['#category', 'id-name']
    const [idCat, nameCat] = categoryInfo.split('-');


    var encodedString = nameCat;
    var decodedString = decodeURIComponent(encodedString);


    headerCategoryTitle.innerHTML = decodedString;

    getMovies('discover/movie?with_genres=', genericSection, idCat);
}


const movieDetailPage = () => {
    console.log('MovieDetail');


    headerSection.classList.add('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');


    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
}


const searchPage = () => {
    console.log('Search');


    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');


    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}


const trendPage = () => {
    console.log('Trends');


    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');


    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}
