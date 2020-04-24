import {APP_URL} from "../common/constants";

export const findAvailabilityByPropertyId = async (propertyId) => {
    const response = await fetch(APP_URL + `/api/property/${propertyId}/availability`);
    return await response.json();
}