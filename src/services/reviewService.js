import {APP_URL} from "../common/constants";

export const findGuestReviewsByGuestId = async (guestId) => {
    const response = await fetch(APP_URL + `/api/guest/${guestId}/review`);
    return await response.json();
}

export const findHostReviewsByHostId = async (hostId) => {
    const response = await fetch(APP_URL + `/api/host/${hostId}/review`);
    return await response.json();
}

export const findTripReviewsByTripId = async (tripId) => {
    const response = await fetch(APP_URL + `/api/trip/${tripId}/review`);
    return await response.json();
}

export const createHostReview = async(tripData, tripId) =>{
    const response = await fetch(APP_URL + `/api/host/trip/${tripId}/review`,{
        method:'POST',
        body: JSON.stringify(tripData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}

export const createGuestReview = async(guestData, tripId) =>{
    const response = await fetch(APP_URL + `/api/guest/trip/${tripId}/review`,{
        method:'POST',
        body: JSON.stringify(guestData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}