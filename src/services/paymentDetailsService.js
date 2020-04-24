import {APP_URL} from "../common/constants";

export const findAllPaymentDetails = async () => {
    const response = await fetch(APP_URL + `/api/payment-details`);
    return await response.json();
}

export const findAllPaymentDetailsByTripId = async (tripId) => {
    const response = await fetch(APP_URL + `/api/trip/${tripId}/payment-details`);
    return await response.json();
}


export const createPayment = async(paymentData, tripId) =>{
    const response = await fetch(APP_URL + `/api/trip/${tripId}/payment-detail`,{
        method:'POST',
        body: JSON.stringify(paymentData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}