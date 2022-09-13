window.addEventListener('load', ()=> {
    let lon;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lon = position.coords.longitude.toFixed(4);
            lat = position.coords.latitude.toFixed(4);
            console.log(lon, lat)
            
            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxy}https://api.met.no/weatherapi/locationforecast/2.0/classic?lat=${lat}&lon=${lon}`

            fetch(api)
            .then(data =>{
                return data;
            })
            .then( data =>{
                console.log(data);
            })
        });
    }
});
