import {APP_URL} from "../common/constants";

export const findAllProperty = async () => {
    const response = await fetch(APP_URL + `/property`);
    return await response.json();
}

export const findPropertyById = async (propertyId) => {
    const response = await fetch(APP_URL + `/property/${propertyId}`);
    return await response.json();
}

export const findPropertyByUsername = async (hostUsername) => {
    const response = await fetch(APP_URL + `/person/name/${hostUsername}/property`);
    return await response.json();
}

export const findPropertyByLocation = async (location) => {
    const response = await fetch(APP_URL + `/api/property/${location}/propertyAddress`);
    return await response.json();
}

export const updateProperty = async(updatedPropertyData, propertyId) =>{
    const response = await fetch(APP_URL + `/property/${propertyId}`,{
        method:'PUT',
        body: JSON.stringify(updatedPropertyData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}

export const deletePropertyById = async(propertyId) =>{
    const response = await fetch(APP_URL + `/property/${propertyId}`,{
        method:'DELETE',
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}

export const createProperty = async(propertyData, personId) =>{
    const response = await fetch(APP_URL + `/person/${personId}/property`,{
        method:'POST',
        body: JSON.stringify(propertyData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}

export const assignSubProperty = async(propertyId, subPropertyId) =>{
    const response = await fetch(APP_URL + `/api/property/${propertyId}/subproperty/${subPropertyId}`,{
        method:'PUT',
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}
