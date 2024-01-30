import sendRequest from './send-request';

const BASE_URL = '/api/rest-post'

export function create(payload) {
    return sendRequest(BASE_URL, 'POST', payload);
}