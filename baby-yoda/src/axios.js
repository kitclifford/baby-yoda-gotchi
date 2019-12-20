import axios from "axios";

export default axios.create({
    baseURL: "https://yoda.developme.space/api/baby_yoda",
    
    headers: {"Accept": "application/json"}
});