import { pathPage } from "../routes/path";
import { getToken, saveToken } from "./local-storage";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const interceptors = {
  request: [
    (config: AxiosRequestConfig) => {
      const token = getToken();
      console.log("get token: ", token);
      if (token) {
        config = {
          ...config,
          headers: { Authorization: `Bearer ${token}` },
        };
      }

      return config;
    },
  ],
  response: [
    async (response: AxiosResponse) => {
      console.log("config url: ", response.config.url);
      if ("/api/v1/users/sign_in" === response.config.url) {
        console.log("response", response);
        saveToken(response.data?.data?.access_token);
      }
      return response;
    },
  ],
  error: [
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (error.response.config.url !== "/api/v1/users/current")
          window.location.href = pathPage.login;
      }
      throw error;
    },
  ],
};

export default interceptors;
