import sendRequest from './send-request';

const BASE_URL = '/api/rest-profiles'

export function create(profileData) {
    return sendRequest(BASE_URL, 'POST', profileData);
}