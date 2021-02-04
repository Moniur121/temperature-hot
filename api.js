var inputValue=document.getElementById('inputValue');
var submitBtn=document.getElementById('submitBtn');
var weatherIcon=document.getElementById('weatherIcon');
var cityName=document.getElementById('cityName');
var temp=document.getElementById('temp');
var lead=document.getElementById('lead');
submitBtn.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=42192424ff0d8df927979f1b5b69bbd5')
.then(res=> res.json())
.then(data=>  {
    var kelvin=273;
    var weatherIconValue=data['weather'][0]['icon'];
    var nameValue=data['name'];
    // var tempValue=data['main']['temp'];
    var tempValue=Math.floor(data.main.temp-kelvin);
    var leadValue=data['weather'][0]['description'];
    weatherIcon.innerHTML=weatherIconValue
    cityName.innerHTML=nameValue;
    temp.innerHTML=tempValue;
    lead.innerHTML=leadValue;
    // console.log(data);
})
.catch(err=> alert('wrong city name'))
})
/** 
  {
    var nameValue=data['name'];
    var tempValue=data['main']['temp'];
    var leadValue=data['weather'][0]['description'];
    cityName.innerHTML=nameValue;
    temp.innerHTML=tempValue;
    lead.innerHTML=leadValue;
}
 */