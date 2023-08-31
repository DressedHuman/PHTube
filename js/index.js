function loadHomepage(){
    loadNav();
    loadCategories();
}

// loading the navbar
const loadNav = () => {
    const header = document.getElementById("header");
    header.innerHTML = `
        <div class="navbar bg-base-100 border-b-2 pb-8 justify-center items-center">
            <div class="navbar-start">
                <img src="images/Logo.png">
            </div>

            <div class="navbar-center">
                <button id="sort-by-view" class="btn bg-[#25252533] text-[#252525] font-medium text-lg">Sort by view</button>
            </div>

            <div class="navbar-end">
                <button id="blog" class="btn bg-[#FF1F3D] text-[#FFF] font-medium text-lg">Blog</button>
            </div>
        </div>
    `
}


// loading the categories buttons
const loadCategories = () => {
    const main = document.getElementById("main");
    main.innerHTML = `
        <div id="categories" class="w-2/5 mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <button id="categories-all" class="btn py-2 px-5 active:bg-[#FF1F3D]  active:text-[#FFF] font-medium text-lg active">All</button>
            <button id="categories-music" class="btn py-2 px-5 active:bg-[#FF1F3D]  active:text-[#FFF] font-medium text-lg inactive">Music</button>
            <button id="categories-comedy" class="btn py-2 px-5 active:bg-[#FF1F3D]  active:text-[#FFF] font-medium text-lg inactive">Comedy</button>
            <button id="categories-drawing" class="btn py-2 px-5 active:bg-[#FF1F3D]  active:text-[#FFF] font-medium text-lg inactive">Drawing</button>
        </div>
    `;
    const categoryButtons = main.querySelectorAll("#categories button");
    toggleActiveInactive(categoryButtons);
}


// helper function to make a button active and the remaining others inactive
const toggleActiveInactive = elements => {
    elements.forEach(element => {
        element.addEventListener("click", () => {
            // toggling all elements inactive from active
            elements.forEach(element => {
                element.classList.remove("active");
                element.classList.add("inactive");
            }),

            // toggling the element to active from inactive
            element.classList.remove("inactive");
            element.classList.add("active");
        })
    });
}


loadHomepage();