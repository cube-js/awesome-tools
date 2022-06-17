import {getDate} from './date';

function setUTM(link, source, campaign = getDate()) {
    let url = new URL(link);

    url.searchParams.set('utm_medium', 'purple');
    url.searchParams.set('utm_source', source);
    url.searchParams.set('utm_campaign', campaign);

    return url;
}

export { setUTM }
