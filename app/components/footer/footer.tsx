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
          "http://api.quotable.io/quotes/random?limit=1",
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
      <div className="flex justify-center text-neutral-700 dark:bg-[#0b0d11] dark:text-neutral-300">
        <div className="w-[780px] border-t-[1px] border-t-slate-700 px-4 sm:w-full md:w-[650px]">
          <div className="flex flex-row justify-between sm:flex-col">
            <div className="mx-20 flex flex-row gap-40 sm:justify-between sm:gap-0 md:gap-14">
              <div>
                <h1 className="my-5 text-center text-sm font-bold dark:text-gray-400">
                  PAGES
                </h1>
                <ul className="flex flex-col items-center gap-4 text-[1rem]">
                  <li>
                    <Link
                      className="dark:text-white dark:hover:text-slate-300"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dark:text-white dark:hover:text-slate-300"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dark:text-white dark:hover:text-slate-300"
                      href="/projects"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dark:text-white dark:hover:text-slate-300"
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="my-5 text-center text-sm font-bold dark:text-gray-400">
                  SOCIAL
                </h1>
                <ul className="flex flex-col items-center gap-4 dark:text-white">
                  <li>
                    <a
                      className="flex flex-row items-center gap-2 hover:text-slate-300"
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
                      className="flex flex-row items-center gap-2 hover:text-slate-300"
                      href="https://www.github.com/thapabishal21dev/"
                      target="_blank"
                    >
                      {" "}
                      <FaGithub />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex flex-row items-center gap-2 hover:text-slate-300"
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
                      className="flex flex-row items-center gap-2 hover:text-slate-300"
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
            <div className="flex justify-center">
              <div className="sm:text-center">
                <h1 className="my-5 text-sm font-bold dark:text-gray-400">
                  THOUGHT OF THE DAY
                </h1>
                <div className="w-[300px] pb-2 text-sm italic text-blue-700 dark:text-blue-200 md:w-fit">
                  {quotes.length ? (
                    <div>
                      {quotes.map((quote) => (
                        <div key={quote._id} className="flex flex-col gap-2">
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
          <div className="mt-10 flex flex-col items-center justify-center border-t border-slate-400 dark:border-slate-700">
            <div className="my-4 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-4">
                <span className="font-mono text-sm font-bold dark:text-slate-500">
                  MADE WITH
                </span>
                <div className="">
                  <ul className="flex flex-row items-center gap-2">
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
                <h1 className="font-mono text-center text-sm font-bold dark:text-slate-500">
                  Made by{" "}
                  <span className="text-md bg-gradient-to-r font-bold text-sky-500 dark:text-sky-600">
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
    </>
  );
};

export default Footer;
// with 💙
