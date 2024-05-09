import { getToken, saveToken } from "./local-storage";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const ClientID = process.env.API_CLIENT_ID || "binary-options";

const interceptors = {
  request: [
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        config = {
          ...config,
          headers: { Authorization: `Bearer ${token}` },
        };
      }
      if (ClientID) {
        config = {
          ...config,
          headers: {
            "Client-ID": ClientID,
          },
        };
      }
      if (ClientID && token) {
        config = {
          ...config,
          headers: {
            "Client-ID": ClientID,
            Authorization: `Bearer ${token}`,
          },
        };
      }

      return config;
    },
  ],
  response: [
    async (response: AxiosResponse) => {
      if ("/user_api/users/users/sign_in" === response.config.url) {
        // console.log('response', response);
        saveToken(response.data?.data?.access_token);
      }
      return response;
    },
  ],
  error: [
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        window.location.href = "/auth/login";
      }
      throw error;
    },
  ],
};

export default interceptors;
