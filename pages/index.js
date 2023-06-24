import { useUsername } from "@/context/UsernameContext";
import Link from "next/link";
import { createContext, useContext, useEffect } from "react";

const Home = () => {
  const { username, changeUsername } = useUsername();

  console.log(username);

  useEffect(() => {
    changeUsername("Hello Htoo");
  }, []);

  console.log(username);

  return (
    <div>
      <h1>Home</h1>
      <Link href="/dashboard">Go to Dashboard</Link> |
      <Link href="/about">Go to About</Link> |
      <Link href="/dashboard/3">Go to Dashboard with ID</Link>
    </div>
  );
};

export default Home;
