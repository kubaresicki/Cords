import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID lm8XCSIpStPCaTFF3-lDduW1d-gd63wtsgq4onOX4OA"
    }
})
