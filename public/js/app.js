const weatherForm = document.querySelector('form') 
const search = document.querySelector('input')
const forecastMessage = document.querySelector('#forecast')
const locationMessage = document.querySelector('#location')

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const locationSearch = search.value
    forecastMessage.textContent = 'Loading forecast...'
    locationMessage.textContent = ''

    fetch(`http://localhost:3000/weather?address=${locationSearch}`).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                forecastMessage.textContent = data.error
            } else {
                forecastMessage.textContent = data.forecast
                locationMessage.textContent = data.location
            }
        })
    })


})