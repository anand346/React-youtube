import axios from 'axios';
const KEY = 'AIzaSyCj4U2HFZIER3Vz8PhIWFx5m7uoqQwzlg0';
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        type: 'video',
        key : KEY
    }
})