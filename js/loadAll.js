const loadAll = async getUrl => {
    const cardsContainer = document.getElementById("cards-container");
    

    // get the data
    const response = await fetch(getUrl);
    const data = await response.json();
    data.data.forEach(cardInfo => {
        // create a card
        const card = document.createElement("div");
        card.classList = `card card-compact w-96 bg-base-100 shadow-xl`;
        card.innerHTML = `
            <figure><img src="${cardInfo.thumbnail}" /></figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;

        cardsContainer.appendChild(card);
    });
    
}