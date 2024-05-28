import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormProvider } from "../components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export type SignFormProps = {
  account: string;
  password: string;
};
export const defaultValues: SignFormProps = {
  account: "",
  password: "",
};
export const LoginSchema = yup.object().shape({
  account: yup.string().required("Please enter your account"),
  password: yup.string().required("Please enter your password"),
});

// const onSubmit = async (data: SignFormProps) => {
//   try {
//     await login(data.email, data.password);
//   } catch (error) {
//     console.error(error);
//   }
// };

const Login = () => {
  const methods = useForm<SignFormProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods}>
      <></>
    </FormProvider>
  );
};

export default Login;
