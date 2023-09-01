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
        card.classList = "w-[312px] mb-7";
        card.innerHTML = `
            <figure>
                <img class="rounded-lg h-[200px] w-full" src="${cardInfo.thumbnail}" />
            </figure>
            <div class="flex items-start gap-3 mt-5">
                <img src="${cardInfo.authors[0].profile_picture}" style="width: 40px; height: 40px;" class="rounded-full object-cover">
                <div class="text-left">
                    <p class="font-bold text-[#171717]">${cardInfo.title}</p>
                    <div>
                        <p class="text-[#171717b3] text-sm">${cardInfo.authors[0].profile_name}</p>
                        <span id="verified"></span>
                    </div>
                </div>
            </div>
        `;

        cardsContainer.appendChild(card);
    }