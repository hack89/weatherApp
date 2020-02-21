const key = 'gTHuLihImfyXmJ8Gb56Z0aOYRJBe1G4p'



const getWeather = async(id) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
    const query = `${id}?apikey=${key}`

    const res = await fetch(base + query)
    const data = await res.json()
    return data[0]
}


const getCity = async(city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`

    const res = await fetch(base + query)
    const data = await res.json()
    return data[0]

}