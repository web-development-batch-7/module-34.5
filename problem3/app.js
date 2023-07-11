const allCountry = () => {
    const API = 'https://restcountries.com/v3.1/all'
    fetch(API)
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = (data) => {

    const countryCard = document.getElementById('countryCard');
    countryCard.innerHTML = ''

    for (const allCountry of data) {
        const div = document.createElement('div')
        div.innerHTML =
            `
        <div class="card">
            <img src="${allCountry.flags.png}" class="card-img-top" style="height:200px" alt="...">
            <div class="card-body">
                <h5 class="card-title">${allCountry.name.common}</h5>
                <p class="card-text">Card Region : ${allCountry.region} </p>
            </div>
        </div>
        `
        countryCard.appendChild(div)
    }
}





const asiaRegion = (searchMeal) => {
    const asiaRegionApi = `https://restcountries.com/v3.1/region/${searchMeal}`
    fetch(asiaRegionApi)
        .then(res => res.json())
        .then(data => displayAsisRegionCountry(data))

}

const displayAsisRegionCountry = (data) => {
    const countryCard = document.getElementById('countryCard');
    countryCard.innerHTML = ''

    for (const allCountry of data) {
        const div = document.createElement('div')
        div.innerHTML =
            `
        <div class="card">
            <img src="${allCountry.flags.png}" class="card-img-top" style="height:200px" alt="...">
            <div class="card-body">
                <h5 class="card-title">${allCountry.name.common}</h5>
                <p class="card-text">Card Region : ${allCountry.region} </p>
            </div>
        </div>
        `
        countryCard.appendChild(div)
    }
}


const filterRegion = () => {

    const asiaRegionbtn = document.getElementById('asiaRegionbtn')
    asiaRegionbtn.addEventListener('click', () => {
        const inputValue = document.getElementById('asiaRegionbtn').innerText;
        asiaRegion(inputValue)
    })

    const europeRegionbtn = document.getElementById('europeRegionbtn')
    europeRegionbtn.addEventListener('click', () => {
        const inputValue = document.getElementById('europeRegionbtn').innerText;
        asiaRegion(inputValue)
    })

    const africaRegionbtn = document.getElementById('africaRegionbtn')
    africaRegionbtn.addEventListener('click', () => {
        const inputValue = document.getElementById('africaRegionbtn').innerText;
        asiaRegion(inputValue)
    })

    const antarcticRegionbtn = document.getElementById('antarcticRegionbtn')
    antarcticRegionbtn.addEventListener('click', () => {
        const inputValue = document.getElementById('antarcticRegionbtn').innerText;
        asiaRegion(inputValue)
    })

    const OceaniaRegionbtn = document.getElementById('OceaniaRegionbtn')
    OceaniaRegionbtn.addEventListener('click', () => {
        const inputValue = document.getElementById('OceaniaRegionbtn').innerText;
        asiaRegion(inputValue)
    })

    const americasRegionbtn = document.getElementById('americasRegionbtn')
    americasRegionbtn.addEventListener('click', () => {
        const inputValue = document.getElementById('americasRegionbtn').innerText;
        asiaRegion(inputValue)
    })
}

filterRegion()





const europeRegion = () => {
    const europeRegionApi = `https://restcountries.com/v3.1/region/europe`
    fetch(europeRegionApi)
        .then(res => res.json())
        .then(data => displayEuropRegionCountry(data))

}

const displayEuropRegionCountry = (data) => {

    const countryCard = document.getElementById('countryCard');
    countryCard.innerHTML = ''
    for (const allCountry of data) {
        const div = document.createElement('div')
        div.innerHTML =
            `
        <div class="card">
            <img src="${allCountry.flags.png}" class="card-img-top" style="height:200px" alt="...">
            <div class="card-body">
                <h5 class="card-title">${allCountry.name.common}</h5>
                <p class="card-text">Card Region : ${allCountry.region} </p>
            </div>
        </div>
        `
        countryCard.appendChild(div)
    }
}


