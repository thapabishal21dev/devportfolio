"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import React, { useState, useEffect } from "react";

interface Quote {
  _id: string;
  content: string;
  author: string;
}
const Footer = () => {
  const newDate = new Date();

  const getCurrentYear = newDate.getFullYear();

  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          "https://api.quotable.io/quotes/random?limit=1"
        );
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <>
      <div className=" bg-centre bg-[url('/wallpaper.png')]">
        <div className="dark:bg-slate-950  flex justify-center text-white">
          <div className=" w-[780px] md:w-[650px] sm:w-full px-4  ">
            <div className=" flex flex-row sm:flex-col justify-between ">
              <div className=" flex flex-row gap-40 md:gap-14 sm:gap-0 sm:justify-between mx-20 ">
                <div>
                  <h1 className=" dark:text-neutral-400  text-center font-bold text-sm my-5">
                    PAGES
                  </h1>
                  <ul className="flex flex-col text-[1rem] gap-4 items-center ">
                    <li>
                      <Link
                        className=" dark:text-white hover:underline hover:underline-offset-2 dark:hover:text-slate-300"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" dark:text-white hover:underline hover:underline-offset-2 dark:hover:text-slate-300"
                        href="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" dark:text-white hover:underline hover:underline-offset-2 dark:hover:text-slate-300"
                        href="/projects"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" dark:text-white hover:underline hover:underline-offset-2 dark:hover:text-slate-300"
                        href="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className=" dark:text-neutral-400 text-center font-bold text-sm my-5">
                    SOCIAL
                  </h1>
                  <ul className="flex flex-col gap-4 items-center dark:text-white ">
                    <li>
                      <a
                        className=" hover:text-slate-300 hover:underline hover:underline-offset-2 flex flex-row items-center gap-2"
                        href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
                        target="_blank"
                      >
                        {" "}
                        <FaLinkedin />
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover:text-slate-300 hover:underline hover:underline-offset-2 flex flex-row items-center gap-2"
                        href="https://www.github.com/thapabishal21tech/"
                        target="_blank"
                      >
                        {" "}
                        <FaGithub />
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover:text-slate-300 hover:underline hover:underline-offset-2 flex flex-row items-center gap-2"
                        href="https://www.x.com/"
                        target="_blank"
                      >
                        {" "}
                        <FaXTwitter />
                        Twitter
                      </a>
                    </li>

                    <li>
                      <a
                        className=" hover:text-slate-300 hover:underline hover:underline-offset-2 flex flex-row items-center gap-2"
                        href="mailto:thapabishal21dev@gmail.com"
                        target="_blank"
                      >
                        {" "}
                        <MdEmail />
                        Email
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="  flex justify-center">
                <div className=" sm:text-center">
                  <h1 className=" dark:text-neutral-400 font-bold text-sm my-5">
                    THOUGHT OF THE DAY
                  </h1>
                  <div className="  w-[300px] md:w-fit text-sm text-blue-200 italic pb-2 ">
                    {quotes.length ? (
                      <div>
                        {quotes.map((quote) => (
                          <div key={quote._id} className=" gap-2 flex flex-col">
                            <p>{`❛❛ ${quote.content} ❜❜`}</p>
                            <p className="text-yellow-500">-{quote.author}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        <p>loading...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center border-t mt-10 border-slate-400 dark:border-slate-700">
              <div className=" flex flex-col justify-center items-center my-4 ">
                <div className=" flex items-center justify-center gap-4">
                  <span className="  font-bold text-sm font-mono dark:text-slate-500">
                    MADE WITH
                  </span>
                  <div className="">
                    <ul className=" flex flex-row items-center gap-2">
                      <li>
                        <Image
                          width={30}
                          height={30}
                          alt="react"
                          src="/reactjs.svg"
                        />
                      </li>
                      <li>
                        <Image
                          width={30}
                          height={30}
                          alt="react"
                          src="/nextjs.svg"
                        />
                      </li>
                      <li>
                        <Image
                          width={30}
                          height={30}
                          alt="react"
                          src="/tailwindcss.svg"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1 className=" dark:text-slate-500 text-sm font-bold font-mono text-center">
                    Made by{" "}
                    <span className="font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-yellow-500 to-green-400 dark:bg-gradient-to-r dark:from-pink-600 dark:to-purple-600">
                      {" "}
                      BISHAL THAPA
                      <i className="devicon-flutter-plain colored"></i>
                    </span>{" "}
                    All rights reserved &copy;{" "}
                    {getCurrentYear ? <span>{getCurrentYear}</span> : <></>}.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
// with 💙
