const loadCards = async getUrlId => {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.textContent = '';
    

    // get the data
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${getUrlId}`);
    const data = await response.json();
    // load the cards if data.data has at-least one cardInfo
    if(data.data.length){
        cardsContainer.classList = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10";
        data.data.forEach(cardInfo => loadCard(cardInfo, cardsContainer)); //accessing loadCard function from loadCard.js
    }else{
        cardsContainer.classList = "flex justify-center items-center mt-20";
        loadNothing(cardsContainer);
    }
}


const loadNothing = (cardsContainer) => {
    cardsContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center gap-8 mb-4">
            <img src="images/Icon.png">
            <p class="font-bold text-[#171717] text-3xl text-center">Oops!! Sorry, There is no <br> content here</p>
        </div>
    `;
}
