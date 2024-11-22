import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5d3e6d3d56c64d66949a449f4ddfa569"
    }
})