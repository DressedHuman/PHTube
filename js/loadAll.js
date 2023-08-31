const loadAll = async getUrl => {
    const cardsContainer = document.getElementById("cards-container");
    

    // get the data
    const response = await fetch(getUrl);
    const data = await response.json();
    data.data.forEach(card => console.log(card));
    
}