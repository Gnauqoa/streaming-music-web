import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormProvider } from "../components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { signIn } from "../apis/auth";

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

// const onSubmit = async (data: SignInFormProps) => {
//   try {
//     await login(data.email, data.password);
//   } catch (error) {
//     console.error(error);
//   }
// };

const Login = () => {
  const enqueueSnackbar = useSnackbar();
  const methods = useForm<SignInFormProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: SignInFormProps) => {
    try {
      await signIn(data);
      // enqueueSnackbar("Login success");
    } catch (error) {
      console.error(error);
      // enqueueSnackbar("Login failed");
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <></>
    </FormProvider>
  );
};

export default Login;
