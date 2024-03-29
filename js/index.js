function loadHomepage(){
    loadNav(); //creates and load the nav bar
    loadCategories('https://openapi.programming-hero.com/api/videos/categories'); //creates and loads the category buttons and calls the toggleActiveInactive function
    createCardsContainer(); //creates a container for the cards
    loadCards(1000);
}

// loading the navbar
const loadNav = () => {
    const header = document.getElementById("header");
    header.innerHTML = `
        <div class="navbar bg-base-100 border-b-2 pb-8 justify-center items-center md:flex-nowrap lg:flex-nowrap flex-wrap">
            <div class="navbar-start order-1">
                <img src="images/Logo.png">
            </div>

            <div class="navbar-center md:order-2 lg:order-2 order-3">
                <button id="sort-by-view" class="btn bg-[#25252533] text-[#252525] font-medium text-lg capitalize">Sort by view</button>
            </div>

            <div class="navbar-end md:order-3 lg:order-3 order-2">
                <button id="blog" class="btn bg-[#FF1F3D] text-[#FFF] font-medium text-lg capitalize active">Blog</button>
            </div>
        </div>
    `;

    // adding event listener to the nav bar buttons
    const sortByView = header.querySelector("#sort-by-view");
    const viewBlog = header.querySelector("#blog");
    
    sortByView.addEventListener("click", (event) => sortCards(event.target.value));
    viewBlog.addEventListener("click", () => location.href = "blog.html");
}


// loading the categories buttons
const loadCategories = async (getUrl) => {
    // get the main section of the document
    const main = document.getElementById("main");
    main.innerHTML = `
        <div id="categories-container" class="w-2/5 mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        </div>
    `;
    
    // add categories to the categories container
    const response = await fetch(getUrl); //get the response from the get url
    const data = await response.json(); //convert the data to json

    const categoriesContainer = main.querySelector("#categories-container"); // get the categories-container to dynamically append the categories in it
    data.data.forEach(category => addCategory(category, categoriesContainer));

    // make the all category button active
    const allCategory = main.querySelector("#category-All");
    allCategory.classList.remove("inactive");
    allCategory.classList.add("active");
    
    // add the event handler to all the category buttons
    const categoryButtons = main.querySelectorAll("#categories-container button");
    toggleActiveInactive(categoryButtons);
}


// helper function to make a button active and the remaining others inactive
const toggleActiveInactive = elements => {
    elements.forEach(element => {
        element.addEventListener("click", (event) => {
            // toggling all elements inactive from active
            elements.forEach(element => {
                element.classList.remove("active");
                element.classList.add("inactive");
            }),

            // toggling the element to active from inactive
            element.classList.remove("inactive");
            element.classList.add("active");

            // load the event's target category cards
            const getId = event.target.value;
            loadCards(parseInt(getId));
        })
    });
}


// create cards container
const createCardsContainer = () => {
    const main = document.getElementById("main");
    
    // create an empty div as the container
    const div = document.createElement("div");
    div.id = "cards-container";

    main.appendChild(div);
}


// function to add a category to the categories-container
const addCategory = (category, categoriesContainer) => {
    const button = document.createElement("button");
    button.id = `category-${category.category}`;
    button.classList = "btn py-2 px-5 active:bg-[#FF1F3D]  active:text-[#FFF] font-medium text-lg capitalize inactive";
    button.innerText = category.category;
    button.value = category.category_id;

    categoriesContainer.appendChild(button);
}

loadHomepage();