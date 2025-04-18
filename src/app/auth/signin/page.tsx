"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <>
      <Link href="/auth/signup">go to signup</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          className="text-white bg-amber-900 cursor-pointer p-2.5"
        >
          submit
        </button>
      </form>
    </>
  );
};

export default Page;
