getHotelData = async() => 
{
    try {
        const response = await fetch('hotel.json')
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

hotelOut = (choice) =>
{
    let hSelect = ""
    switch(choice)
    {
        case '1':
            hSelect = 'Marriott'
            break;
        case '2':
            hSelect = 'Sheraton'
            break;
        case '3':
            hSelect = 'Hilton'
            break;
    }

    console.log(choice)
    console.log(hSelect)
    console.log(hotelData)

    let objFind = hotelData.hotels.find(x => {return hSelect === x.name})

    console.log(objFind)

    document.querySelector('#hName').textContent = `The ${objFind.name}`
    document.querySelector('#address').textContent = objFind.address
    document.querySelector('#hRooms').innerHTML = `<p>Number of Rooms: ${objFind.rooms}</p>`
    document.querySelector('#hGym').innerHTML = `<p>Gym Available: ${objFind.gym}</p>`
    document.querySelector('#hRoomT').innerHTML = `<p>Room Types: ${objFind.roomTypes}</p>`
    document.querySelector('#hImg').innerHTML = `<img href='${objFind.picture}'>`
}

document.querySelectorAll('.hButton').forEach(item => item.addEventListener('click', () => hotelOut(item.value)))