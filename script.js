// category list overflow fade behaviour
const categoriesList = document.querySelector(".categories-list")
const categoryListWrapper = document.querySelector(".category-list-wrapper")

categoriesList.addEventListener("scroll", event => {
    if (categoriesList.scrollLeft + categoriesList.offsetWidth === categoriesList.scrollWidth) {
        categoryListWrapper.classList.remove("show-fade")
        categoryListWrapper.classList.add("hide-fade")
        setTimeout(() => {
            categoryListWrapper.classList.add("disable-after")
        }, 200);
    } else{
        if (categoryListWrapper.classList.contains("disable-after")){
            categoryListWrapper.classList.remove("disable-after")
            categoryListWrapper.classList.add("show-fade")
            categoryListWrapper.classList.remove("hide-fade")
        }
    }
    
})


// layout selection
const gridLayoutButton = document.querySelector(".card-layout.grid-layout");
const listLayoutButton = document.querySelector(".card-layout.list-layout");

const articlesGrid = document.querySelector(".articles.grid-layout");
const articlesList = document.querySelector(".articles.list-layout");

articlesList.style.display = "none"

gridLayoutButton.addEventListener("click", event => {
    articlesGrid.style.display = "grid"
    articlesList.style.display = "none"
})

listLayoutButton.addEventListener("click", event => {
    articlesGrid.style.display = "none"
    articlesList.style.display = "flex"
})