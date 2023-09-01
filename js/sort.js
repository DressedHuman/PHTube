const sortCards = async getUrlId => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${getUrlId}`);
    const responseInJSON = await response.json();
    const data = responseInJSON.data;
    data.sort((a, b) => {
        const aViews = parseFloat(a.others.views.slice(0, -1));
        const bViews = parseFloat(b.others.views.slice(0, -1));
        console.log(aViews, bViews);
        
        // check and return -1 if aViews>bViews or 1 if aViews<bViews else return 0
        aViews > bViews ? 1 : (aViews < bViews ? -1 : 0);
    });

    console.log(data);
}