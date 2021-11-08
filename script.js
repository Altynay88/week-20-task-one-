const header = document.querySelector('header');
const section = document.querySelector('section');


eventListeners();

function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
        let rate = localStorage.getItem('rate');
        if (rate!=null) {
            document.getElementById("rateId").value = rate
        } else
        localStorage.setItem('rating', JSON.stringify ('rate'));
    });


function loadJSON() {
    fetch('heroes.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(hero => {
                html += `
            <div style = "text-align:center">
                 <img src = "${hero.imgSrc}" alt = "hero image">
                        <h3 class = "hero-name">${hero.name}</h3>
                        <p class = "hero-universe">${hero.universe}</p>
                        <p class = "hero-alterego">${hero.alterego}</p>
                        <p class = "hero-occupation">${hero.occupation}</p>
                        <p class = "hero-friends">${hero.friends}</p>
                        <input type="number" id="rateId" placeholder="оцени" value = ${hero.rating}>
            </div>
            `;
           
            });
            document.write(html)
        })
        .catch(error => {
            console.log(`error`);
        })
}
}
