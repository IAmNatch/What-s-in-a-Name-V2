import request from 'axios';

export const youtubeHelper = async (bandname, responseHandler) => {
    let response = await request.get(`/youtube/name/${bandname}`)
    let responseObject = {youtube: response.data};
    console.log('Youtube set!');
    return responseObject;
}
export const facebookHelper = async (bandname, responseHandler) => {
    let response = await request.get(`/facebook/name/${bandname}`)
    let responseObject = {facebook: response.data};
    console.log('Facebook set!');
    return responseObject;
}
export const soundcloudHelper = async (bandname, responseHandler) => {
    let response = await request.get(`/soundcloud/name/${bandname}`)
    let responseObject = {soundcloud: response.data};
    console.log('Soundcloud Set!');
    return responseObject;
}
export const bandcampHelper = async (bandname, responseHandler) => {
    let response = await request.get(`/bandcamp/name/${bandname}`)
    let responseObject = {bandcamp: response.data};
    console.log('Bandcamp set!');
    return responseObject;
}
