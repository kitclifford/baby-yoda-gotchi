import axios from "axios";

export default axios.create({
    baseURL: "http://homestead.test/api/baby_yoda",
    
    headers: {"Accept": "application/json"}
});