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