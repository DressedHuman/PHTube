function loadHomepage(){
    // console.log("loading videos...");
    loadNav();
}


const loadNav = () => {
    // console.log("loading nav bar...");
    const header = document.getElementById("header");
    // console.log(header);
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


loadHomepage();