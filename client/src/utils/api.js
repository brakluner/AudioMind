import axios from "axios";

export default {
    getFiles: function() {
        console.log("message we here")
        return axios.get("/api/")
    }
}