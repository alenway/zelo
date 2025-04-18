"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userName);
    console.log(email);
    console.log(password);
  };
  return (
    <>
      <Link href="/auth/signin">go to signin</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user name"
          className="border-blue-600 border-2 "
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          className="border-blue-600 border-2 "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="*******"
          className="border-blue-600 border-2 "
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-red-600 p-3 cursor-pointer">
          submit
        </button>
      </form>
    </>
  );
};

export default Page;
