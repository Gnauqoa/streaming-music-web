import { AxiosResponse } from "axios";
import axios from "../utils/axios";

import { AddUserType, UpdatePasswordPayload, UpdateUserPayload } from "../@types/user";
import { SignFormProps } from "../sections/login";

export const signIn = (payload: SignFormProps): Promise<AxiosResponse> => {
  return axios.post("/users/sign_in", payload);
};

export const registerUser = (payload: AddUserType): Promise<AxiosResponse> => {
  return axios.post("/users", payload);
};

export const getCurrentUser = (): Promise<AxiosResponse> => {
  return axios.get("/users/current");
};
export const updateProfile = (
  payload: UpdateUserPayload
): Promise<AxiosResponse> => {
  return axios.put("/users/current", payload);
};
export const changePassword = (
  payload: UpdatePasswordPayload
): Promise<AxiosResponse> => {
  return axios.put("/users/current/password", payload);
};
