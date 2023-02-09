function displayresult(){
    var city=document.getElementById("city").value;
    var apikey="48800eeac216780dba8e12ad72c4d161";
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then(data=>{
        var t=data['main']['temp']
        var x=data['main']['temp_max']
        var y=data['main']['temp_min']
    
        document.getElementById("output").innerHTML=t;
        document.getElementById("output2").innerHTML=x;
        document.getElementById("output3").innerHTML=y;
    })
}