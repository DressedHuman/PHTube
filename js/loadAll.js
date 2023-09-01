const loadAll = async getUrl => {
    const cardsContainer = document.getElementById("cards-container");
    

    // get the data
    const response = await fetch(getUrl);
    const data = await response.json();
    data.data.forEach(cardInfo => loadCard(cardInfo, cardsContainer));
    
}



// create loadCard function to load a single card
const loadCard = (cardInfo, cardsContainer) => {
        // create a card
        const card = document.createElement("div");
        card.innerHTML = `
            <figure>
                <img class="rounded-lg" src="${cardInfo.thumbnail}" />
            </figure>
            <div>
                <img src="${cardInfo.authors[0].profile_picture}" style="width: 40px; height: 40px;" class="rounded-full">
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        `;

        cardsContainer.appendChild(card);
    }