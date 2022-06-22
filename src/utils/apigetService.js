import { BaseUrl, endPoints } from "./ApiEndPoints";
import { api_token } from '../utils/Globals'

const getApiService = async (url) => {
    console.log("url=====>", url);

    let headers = {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${api_token}`
    };

    const response = await fetch(url, {
        method: 'get',
        headers,
    });
    return await response.json();
};


export function profileApi({ }) {
    return getApiService(BaseUrl + endPoints.profile);
}

export function catApi({ method }) {
    return getApiService(BaseUrl + endPoints.category, method);
}

export function subCatApi({ id }) {
    return getApiService(BaseUrl + endPoints.subCategory + "/" + id);
}

export function myProductApi({ }) {
    return getApiService(BaseUrl + endPoints.myProduct);
}

export function productDetailsApi({ id }) {
    return getApiService(BaseUrl + endPoints.myProductDetails + "/" + id);
}

export function orderListApi({ method }) {
    return getApiService(BaseUrl + endPoints.orderList, method);
}

export function orderDetailsApi({ method }) {
    return getApiService(BaseUrl + endPoints.orderDetails, method);
}

export function uploadStatusApi({ method }) {
    return getApiService(BaseUrl + endPoints.uploadStatus, method);
}

export function upcomingOrderApi({ method }) {
    return getApiService(BaseUrl + endPoints.upcomingOrder, method);
}