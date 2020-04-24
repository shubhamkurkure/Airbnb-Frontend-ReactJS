import {APP_URL} from "../common/constants";

export const findAllTrips = async () => {
    const response = await fetch(APP_URL + `/api/trips`);
    return await response.json();
}

export const findTripByGuestId = async (guestId) => {
    const response = await fetch(APP_URL + `/api/guest/id/${guestId}/trip`);
    return await response.json();
}

export const findTripByPropertyId = async (propertyId) => {
    const response = await fetch(APP_URL + `/api/property/${propertyId}/trip`);
    return await response.json();
}

export const findTripByHostId = async (hostId) => {
    const response = await fetch(APP_URL + `/api/host/id/${hostId}/trip`);
    return await response.json();
}

export const findTripByHostUsername = async (hostUsername) => {
    const response = await fetch(APP_URL + `/api/host/name/${hostUsername}/trip`);
    return await response.json();
}

export const findTripByGuestUsername = async (guestUsername) => {
    const response = await fetch(APP_URL + `/api/guest/name/${guestUsername}/trip`);
    return await response.json();
}

export const findPropertyByTripId = async (tripId) => {
    const response = await fetch(APP_URL + `/api/trip/${tripId}/property`);
    return await response.json();
}

export const findTripByTripId = async (tripId) => {
    const response = await fetch(APP_URL + `/api/trip/${tripId}`);
    return await response.json();
}

export const updateTrip = async(updatedTripData, tripId) =>{
    const response = await fetch(APP_URL + `/api/trip/${tripId}`,{
        method:'PUT',
        body: JSON.stringify(updatedTripData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}

export const deleteTripById = async(tripId) =>{
    const response = await fetch(APP_URL + `/api/trip/${tripId}`,{
        method:'DELETE',
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}



export const createTrip = async(tripData, propertyId, guestId) =>{
    const response = await fetch(APP_URL + `/api/guest/${guestId}/property/${propertyId}/trips`,{
        method:'POST',
        body: JSON.stringify(tripData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}

export const addGuestToTrip = async(tripId, otherGuestId) =>{
    const response = await fetch(APP_URL + `/api/trip/${tripId}/coGuestId/${otherGuestId}`,{
        method:'POST',
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}
