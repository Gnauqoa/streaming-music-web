import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormProvider } from "../../components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "../../apis/auth";
import AuthTextField from "./AuthTextField";
import { Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export type SignInFormProps = {
  account: string;
  password: string;
};
export const defaultValues: SignInFormProps = {
  account: "",
  password: "",
};
export const LoginSchema = yup.object().shape({
  account: yup.string().required("Please enter your account"),
  password: yup.string().required("Please enter your password"),
});

const Login = () => {
  const methods = useForm<SignInFormProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const account = methods.watch("account");
  useEffect(() => {
    console.log(account);
  }, [account]);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: SignInFormProps) => {
    try {
      await signIn(data);
      toast("Login success", { type: "success" });
    } catch (error) {
      const op = error as AxiosError;
      toast((op.response?.data as any)?.error?.errors[0], { type: "error" });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <AuthTextField
          label={"Account"}
          placeholder={"Account"}
          name="account"
        />
        <AuthTextField
          label={"Password"}
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
          Login
        </LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default Login;
