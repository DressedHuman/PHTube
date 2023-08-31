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
    console.log("loading categories...");
}


loadHomepage();