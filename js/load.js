const loadCards = async getUrlId => {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.textContent = '';
    

    // get the data
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${getUrlId}`);
    const data = await response.json();
    // load the cards if data.data has at-least one cardInfo
    if(data.data.length){
        data.data.forEach(cardInfo => loadCard(cardInfo, cardsContainer));
    }else{
        console.log("there is no contents in this category");
    }
    
    
}
