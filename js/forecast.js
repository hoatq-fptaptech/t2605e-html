
function callApi(city){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    fetch(url).then(rs=>rs.json()).then(data=>{
        var list = data.list;
        list.map(e=>{
            var dt_txt = e.dt_txt;
            var temp = e.main.temp;
            var p = e.weather[0].description;
            var icon = e.weather[0].icon;
            var item = `<div class="col-3">
                    <div class="item w-100">
                        <h5>${dt_txt}</h5>
                        <h3>${temp} <sup>o</sup>C</h3>
                        <p>${p}</p>
                        <img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>
                    </div>
                 </div>`;
            document.getElementById("forecast").innerHTML += item;     
        });
    });
}
callApi("hanoi");

function searchCity(x){
    if(event.keyCode == 13){
        var city = x.value;
        document.getElementById("forecast").innerHTML = "";
        callApi(city);
    }
}