import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "12bff1c4320b48639aee31b855165136",
    },
});
