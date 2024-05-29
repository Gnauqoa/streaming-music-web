import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormProvider } from "../../../components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../../../apis/auth";
import { Box, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { pathPage } from "../../../routes/path";
import AuthTextField from "../AuthTextField";
import axios from "../../../utils/axios";
import { setUser } from "../../../redux/slices/user";
import { useDispatch } from "../../../redux/store";

export type RegisterFormProps = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};
export const defaultValues: RegisterFormProps = {
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  password: "",
};
export const RegisterSchema = yup.object().shape({
  username: yup.string().required("Please enter your account"),
  email: yup.string().required("Please enter your email").email(),
  first_name: yup.string().required("Please enter your first name"),
  last_name: yup.string().required("Please enter your last name"),
  password: yup.string().required("Please enter your password"),
});

const Register = () => {
  const methods = useForm<RegisterFormProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data: RegisterFormProps) => {
    try {
      const res = await registerUser(data);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.data.access_token}`;
      const user = await axios.get("/api/v1/users/current");
      dispatch(setUser(user.data.data));
      toast("Register success", { type: "success" });
      navigate(pathPage.root);
    } catch (error) {
      const op = error as AxiosError;
      toast((op.response?.data as any)?.error?.errors[0], { type: "error" });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          pt: 10,
          pb: 10,
        }}
      >
        <Stack sx={{ maxWidth: 350, gap: 3 }}>
          <Typography sx={{ fontSize: 50 }}>Sign up to start listen</Typography>
          <AuthTextField placeholder={"Email"} name="email" />
          <AuthTextField placeholder={"User name"} name="username" />
          <AuthTextField placeholder={"First name"} name="first_name" />
          <AuthTextField placeholder={"Last name"} name="last_name" />
          <AuthTextField
            name="birth"
            placeholder={"*************"}
            type={"date"}
          />
          <AuthTextField
            name="password"
            placeholder={"*************"}
            type={"password"}
          />
          <LoadingButton
            sx={{ backgroundColor: "primary.main" }}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>{" "}
        </Stack>
      </Box>
    </FormProvider>
  );
};

export default Register;
