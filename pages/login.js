import { useRouter } from "next/router";
import {useEffect} from "react";

const Login = () => {
  const router = useRouter();

  const loginClicked = async () => {
    await router.push("/dashboard");
  };

  useEffect(() => {
        // Prefetch the dashboard page
        router.prefetch('/dashboard')
  }, [])

  return (
    <>
      <h1>Login Page</h1>

      <button
        onClick={loginClicked}
        className="px-10 py-5 bg-green-500  text-black rounded-md"
      >
        Login
      </button>
    </>
  );
};

export default Login;
