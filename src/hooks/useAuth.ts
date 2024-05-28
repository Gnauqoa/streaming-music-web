import { useSelector } from "../redux/store";

const useAuth = () => {
  const { isLoading, user } = useSelector((state) => state.user);
  if (isLoading || !user) return { isAuth: false, user };
  return { isAuth: true, user };
};

export default useAuth;
