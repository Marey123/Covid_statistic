
import axios from "axios";

function fetchCountry() {
    return axios
       .get(
        `https://api.covid19api.com/summary`
          
        ).then((response) => response);
}

export default {
    fetchCountry,
};