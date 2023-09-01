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
        card.classList = "w-[312px] mb-7 mx-auto";
        card.innerHTML = `
            <figure>
                <img class="rounded-lg h-[200px] w-full" src="${cardInfo.thumbnail}" />
            </figure>
            <div class="flex items-start gap-3 mt-5">
                <img src="${cardInfo.authors[0].profile_picture}" style="width: 40px; height: 40px;" class="rounded-full object-cover">
                <div class="text-left">
                    <p class="font-bold text-[#171717] mb-3">${cardInfo.title}</p>
                    <div class="flex items-center gap-3">
                        <p class="text-[#171717b3] text-sm">${cardInfo.authors[0].profile_name}</p>
                        <span id="verified"></span>
                    </div>
                    <p class="text-[#171717b3] text-sm mt-2">${cardInfo.others.views}</p>
                </div>
            </div>
        `;

        const verifiedBadge = card.querySelector("#verified");
        cardInfo.authors[0].verified ? verifiedBadge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2568EF" class="w-5 h-5">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>      
      ` : verifiedBadge.classList = "hidden";

        cardsContainer.appendChild(card);
    }