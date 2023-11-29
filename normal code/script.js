const apiKey = "872b8d4b14da4585ae40a258abb8542f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const Clouds =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="currentColor"><path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272a3.513 3.513 0 0 0-.65-.824a1.5 1.5 0 0 0-.789-2.896a.5.5 0 0 1-.627-.421a3 3 0 0 0-5.22-1.625a5.587 5.587 0 0 0-1.276.088a4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5"/><path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5m3.5 4.5a3.5 3.5 0 0 0-6.89-.873a.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953a.5.5 0 0 1-.624-.492z"/></g></svg>';
const Clear =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 5.423V2.038h1v3.385h-1Zm5.496 2.289l-.683-.683l2.358-2.452l.727.733l-2.402 2.402Zm1.58 4.788v-1h3.386v1h-3.385ZM11.5 21.962v-3.366h1v3.366h-1ZM7.042 7.68L4.577 5.329l.752-.708L7.73 7.004l-.689.677Zm11.623 11.742l-2.352-2.452l.677-.658l2.389 2.347l-.714.763ZM2.038 12.5v-1h3.385v1H2.038Zm3.272 6.923l-.689-.752l2.358-2.358l.36.349l.378.353l-2.407 2.408ZM12.005 17q-2.082 0-3.543-1.457Q7 14.086 7 12.005q0-2.082 1.457-3.543Q9.914 7 11.995 7q2.082 0 3.543 1.457Q17 9.914 17 11.995q0 2.082-1.457 3.543Q14.086 17 12.005 17Z"/></svg>';
const Rain =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 2a6 6 0 0 0-5.986 6.41a5 5 0 0 0-1.322 8.34a1 1 0 1 0 1.324-1.5a3.002 3.002 0 0 1 1.324-5.178a1 1 0 0 0 .757-1.193A4 4 0 1 1 14.92 7.2a1 1 0 0 0 .999.8H16a4 4 0 0 1 2.4 7.2a1 1 0 0 0 1.201 1.6a6 6 0 0 0-2.93-10.762A6.002 6.002 0 0 0 11 2zm1.949 13.316a1 1 0 0 0-1.898-.632l-2 6a1 1 0 0 0 1.898.632l2-6zm3.367-2.265a1 1 0 0 1 .633 1.265l-2 6a1 1 0 0 1-1.898-.632l2-6a1 1 0 0 1 1.265-.633zM9.45 14.316a1 1 0 0 0-1.898-.632l-2 6a1 1 0 0 0 1.898.632l2-6z"/></svg>';
const Drizzle =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M10.924 15.792a1 1 0 0 1 1.932.518l-.259.966a1 1 0 0 1-1.932-.518l.26-.966ZM11.5 2a6.502 6.502 0 0 1 6.086 4.212a6.002 6.002 0 0 1-.387 11.668a1 1 0 1 1-.398-1.96a4.002 4.002 0 0 0-.15-7.868a1 1 0 0 1-.806-.726a4.5 4.5 0 0 0-8.817 1.68a1 1 0 0 1-.753 1.082a3.002 3.002 0 0 0-.169 5.777l.169.047a1 1 0 0 1-.481 1.941A5.002 5.002 0 0 1 5 8.416A6.5 6.5 0 0 1 11.5 2Zm.32 18.174a1 1 0 1 0-1.931-.518l-.259.966a1 1 0 0 0 1.932.518l.259-.966Z"/></g></svg>';
const Mist =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h3m4 0h9M3 10h11m4 0h1M5 15h5m4 0h7M3 20h9m4 0h3"/></svg>';
const Thunderstorm =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M12.496 12.632a1 1 0 0 1 .372 1.364L11.723 16h1.105a1.1 1.1 0 0 1 .955 1.646l-1.915 3.35a1 1 0 1 1-1.736-.992L11.277 18h-1.105a1.1 1.1 0 0 1-.955-1.646l1.915-3.35a1 1 0 0 1 1.364-.372ZM15 18.5a1 1 0 0 1 1.931.517l-.258.966a1 1 0 1 1-1.932-.517L15 18.5Zm-9.78 0a1 1 0 0 1 1.932.517l-.26.966a1 1 0 1 1-1.931-.517l.259-.966Zm12.04-4.571a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.259-.966a1 1 0 0 1 1.225-.707Zm-9.78 0a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 1 1-1.932-.518l.259-.966a1 1 0 0 1 1.225-.707ZM11.5 2a6.502 6.502 0 0 1 6.086 4.212a6.002 6.002 0 0 1 3.214 9.389a1 1 0 0 1-1.6-1.202a4.001 4.001 0 0 0-2.545-6.346a1.01 1.01 0 0 1-.81-.732A4.5 4.5 0 0 0 7.027 9a1.01 1.01 0 0 1-.76 1.09a3.002 3.002 0 0 0-1.97 4.216l.103.193a1 1 0 1 1-1.731 1.002A5 5 0 0 1 5 8.416A6.5 6.5 0 0 1 11.5 2Z"/></g></svg>';
const Snow =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 2a6 6 0 0 0-5.986 6.41a5 5 0 0 0-1.322 8.34a1 1 0 1 0 1.324-1.5a3.002 3.002 0 0 1 1.324-5.178a1 1 0 0 0 .757-1.193A4 4 0 1 1 14.92 7.2a1 1 0 0 0 .999.8H16a4 4 0 0 1 2.4 7.2a1 1 0 0 0 1.201 1.6a6 6 0 0 0-2.93-10.762A6.002 6.002 0 0 0 11 2zm3.5 15a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zm-3.5-.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm4 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm-5 1a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"/></svg>';

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404 || response.status == 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.innerHTML = Clouds;
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.innerHTML = Clear;
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.innerHTML = Rain;
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.innerHTML = Drizzle;
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.innerHTML = Mist;
    } else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.innerHTML = Thunderstorm;
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.innerHTML = Snow;
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
