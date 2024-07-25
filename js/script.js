let userInput = document.querySelector('.formControl input');
let apiKey = `da3f9a369963ed578577e29af0ccb3c0`;
let api;
let errorMsg = document.querySelector('.errorMsg');
let mainData = document.querySelector('.mainData');
let mainDataImg = document.querySelector('.mainData img')
let backBtn = document.querySelector('.back')
let citydata = document.querySelector('.citydata');
let temp =document.querySelector('.temp');
let winds = document.querySelector('.winds');
let errorMsgerror = document.querySelector('.errorMsg span');
userInput.addEventListener('keyup', function (userkeyboard) {
    // console.log(userkeyboard);
    if (userkeyboard.key === "Enter" && userInput.value != '') {
        console.log(userInput.value.trim());
        getAPi(userInput.value)
    } 
})
const getAPi = (city) => {
    api = `https:api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${apiKey}`;

    fechtData();
}
const fechtData = () => {
    citydata.innerHTML =`${userInput.value}`
    
    errorMsg.style.display = "flex";
    userInput.value = ''
    fetch(api).then(res => res.json()).then((result) => datafromApi(result))
}

const datafromApi = (data) => {
    console.log(data);
    console.log(data.main.temp);
    console.log(data.wind.speed);
    
    if (data.cod === '404') {
        errorMsg.style.display = "flex";
        errorMsgerror.innerHTML = `'${userInput.value}' city not found`
    }else {
        errorMsg.style.display = "none";
        mainData.style.display = "flex";
        // winds.innerHTML =`${data.wind.speed}`
        winds.innerHTML = Math.floor(data.wind.speed)

        // temp.innerHTML = `${data.main.temp}`
        temp.innerHTML = Math.floor(data.main.temp)
    }
}

setInterval(() => {
    let clock = new Date().toLocaleTimeString();
    document.getElementById('time').innerHTML = clock
}, 1000)

backBtn.addEventListener('click', function () {mainData.style.display = "none"})