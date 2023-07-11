const loadAdvice = () => {
    const API = 'https://api.adviceslip.com/advice'
    fetch(API)
        .then(res => res.json())
        .then(data => displayAdvice(data.slip))
}

const displayAdvice = (slip) => {
    const adviceId = document.getElementById('adviceId').innerText = 'Advice ID : ' + slip.id
    const adviceContent = document.getElementById('adviceContent').innerText = slip.advice
}

const adviceCount = () => {
    const API = 'https://api.adviceslip.com/advice/search/hi'
    fetch(API)
        .then(res => res.json())
        .then(data => console.log(data))
}


adviceCount()
loadAdvice()