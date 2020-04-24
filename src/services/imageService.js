import {APP_URL} from "../common/constants";

export const findImagesByPropertyId = async (propertyId) => {
    const response = await fetch(APP_URL + `/api/property/${propertyId}/image`);
    return await response.json();
}