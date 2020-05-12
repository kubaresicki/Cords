import axios from 'axios';

export default axios.create({
    url: "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
    headers: {
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
    "x-rapidapi-key":"998580fcf9msh2d32eb4ff28f9f1p1fd30ejsn591676dcfb94",
    "useQueryString":true
    }
    
})