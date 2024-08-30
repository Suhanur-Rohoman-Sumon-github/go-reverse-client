import { useGetMeQuery } from "../redux/fetures/auth/authApi";

const useGetMe = () => {
  const { data: userData } = useGetMeQuery(undefined);
  return userData?.data;
};

export default useGetMe;
