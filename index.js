function bodyBackground() {
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japan")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            document.body.style.backgroundImage = `url(${data.urls.regular})`
            // console.log(data.urls.regular)
            document.getElementById("author").innerText = `By: ${data.user.name}`
        })
        .catch(err => {
            document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1578637387939-43c525550085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgwOTYwMzN8&ixlib=rb-4.1.0&q=80&w=1080)`
        })
}

bodyBackground()
// setInterval(bodyBackground, 120000)




function dogieCoinInfo() {
    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            document.getElementById("crypto-top").innerHTML =`
            <img src="${data.image.small}"> 
            <p>${data.name}</p>
            `

            document.getElementById("crypto-bottom").innerHTML =`
            <span>🤌 pln ${data.market_data.current_price.pln}</span>
            <span>👆 pln ${data.market_data.high_24h.pln}</span>
            <span>👇 pln ${data.market_data.low_24h.pln}</span>
            `
        })

        .catch(error => {
            console.error(error)
        })
}

dogieCoinInfo()


function time() {
    let now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString("en-us", {timeStyle:'short'})
}

setInterval(time, 1000)

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else { 
    console.log("Geolocation is not supported by this browser.")
  }
}

function success(position) {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            let temp = Math.round(data.main.temp)
            document.getElementById("weather").innerHTML =`
            <div class="weatherTop">
                <img src="${iconUrl}">
                <p>${temp} ℃</p>
            </div>
            <p class="weatherName" >${data.name}</p>
            `
        })
//   console.log( "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude)
}

function error() {
  alert("Sorry, no position available.");
}

getLocation()

