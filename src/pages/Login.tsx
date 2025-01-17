import { Button, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHInput from "../components/form/PHInput";
import PHForm from "../components/form/PHForm";

interface IFormInput {
  id: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [addLogin] = useLoginMutation();
  // console.log("error =>", error);
  const defaultValues = {
    id: "A-0001",
    password: "admin123",
  };
  const onSubmit: SubmitHandler<IFormInput> = async (data: FieldValues) => {
    console.log("Login =>", data);
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const result = await addLogin(userInfo).unwrap();
      const token = result.data.accessToken;
      const user = verifyToken(token) as TUser;
      dispatch(setUser({ user: user, token: result?.data?.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues = {defaultValues}>
        <PHInput type="text" name="id" label="ID : " />
        <PHInput type="text" name="password" label="Password : " />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
