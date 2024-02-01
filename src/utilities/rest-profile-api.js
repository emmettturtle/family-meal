import sendRequest from './send-request';

const BASE_URL = '/api/rest-profiles'

export function create(profileData) {
    return sendRequest(BASE_URL, 'POST', profileData);
}

export function getFeed() {
    //should a user id be added to URL before feed
    return sendRequest(BASE_URL + '/feed');
}