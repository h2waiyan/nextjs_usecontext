import { useRouter } from "next/router";
import { useUsername } from "@/context/UsernameContext";
import { createContext, useContext, useEffect } from "react";

import React from "react";

const About = () => {
  const router = useRouter();
  const { username, changeUsername } = useUsername();

  console.log(username);

  useEffect(() => {
    changeUsername("Hello YNANFNASFNLAK");
  }, []);

  console.log(username);
  return (
    <>
      <h1>About Page</h1>

      <button
        onClick={() => router.back()}
        className="px-10 py-5 bg-red-500  text-black"
      >
        Go Back
      </button>
    </>
  );
};

export default About;
