import {APP_URL} from "../common/constants";

export const findPropertyAddressById = async (Id) => {
    const response = await fetch(APP_URL + `/api/property/${Id}/address`);
    return await response.json();
}

export const createPropertyAddress = async(addressData, propertyId) =>{
    const response = await fetch(APP_URL + `/api/property/${propertyId}/address`,{
        method:'POST',
        body: JSON.stringify(addressData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}