// your code here
const form = document.querySelector('#ourForm')
const url = document.querySelector("#url")
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let name = form['name'].value
    let year = form['year'].value
    let submitUrl;
    if(!name && !year) submitUrl = `https://localhost:8080/`
    else if(name && year) submitUrl = `https://localhost:8080/?name=${name}&year=${year}`
    else if(!name && year) submitUrl = `https://localhost:8080/?year=${year}`
    else if(name && !year) submitUrl = `https://localhost:8080/?name=${name}`
    url.innerHTML = submitUrl
})