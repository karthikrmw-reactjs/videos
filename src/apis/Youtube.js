import axios from 'axios';

const YoutubeAPIKey = 'AIzaSyBx_mQbmN7SGBYgDTdhAViIXB08f5GgsCI';

const Youtube = axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResult: 5,
        key : YoutubeAPIKey
    }
});

export default Youtube;
