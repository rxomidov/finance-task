import axios from "axios";
import  URL from "./config";
import {ShowNotification} from "../../containers/ShowNotification";

const request = axios.create({
    baseURL: URL,
});

const subscribe = (history = null) => {
    request.interceptors.request.use((config) => {
        let token = localStorage.getItem("token");

        if (token) {
            config.headers["Authorization"] = ["Bearer", token].join(" ");
        }

        return config;
    });

    request.interceptors.response.use(
        (config) => config,
        (error) => {
            if (error?.response?.status === 401) {
                localStorage.removeItem("token");
                history.push("/");
                ShowNotification(
                    "error",
                    "Login yoki parol xato!",
                    "Iltimos qaytadan urining!"
                );
            }

            if (error.response?.data) {
                console.log(error);
            }

            throw error;
        }
    );
};

export default { request, subscribe };
