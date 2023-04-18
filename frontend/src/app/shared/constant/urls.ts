const BASE_URL = "http://localhost:5000/bureau/";

export const LOGIN_URL = BASE_URL + 'login-page';
export const POST_USER_DETAILS = BASE_URL + 'user/post';
export const HIST_MAINTAINANCE_FLEET_TECH = BASE_URL + 'maintainanceHistory/fetchallFleet';


export const ADD_VIDEO_FOOTAGE = BASE_URL + 'video-footage/post';
export const FETCH_ALL_VIDEO_FOOTAGE = BASE_URL + 'video-footage/fetchall';
export const GENERATE_VIDEOFOOTAGE_TICKET = BASE_URL + 'videofootage/ticket';
export const POST_VIDEOFOOTAGE_TICKET = BASE_URL + 'videoTicket/post';
export const DELETE_VIDEOFOOTAGE_TICKET = BASE_URL + 'video-footage/delete/';   // /video-footage/delete/:ticket => /video-footage/fetchone/param
export const FETCH_ONE_VIDEO_FOOTAGE = BASE_URL + 'video-footage/fetchone/'

export const ADD_TECH_ON_VIDEOFOOTAGE = BASE_URL + 'technician-Video-data/post';
export const ADD_VIDEOFOOTAGE_TO_HISTORY = BASE_URL + 'VideofootageHistory/post';
