import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/tahj.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Tahj Dalzell
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer 
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Junior FullStack Software Developer providing new ideas and services for programming and design content
              needs. Join me down below and lets get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} alt="loading" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              For the past 2 years I have been providing programing services to E-Commerce companies and Businesses that needed to take a trip to the future. My love of programing developed because of my love for problem solving.
              as a graduate from USD FullStack Web Development bootcamp, I have been collaborting with teams to build something live changing for businesses and also for the team.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming, photography 
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Graphic Design
              </h3>
              <p className="py-2">
               Crafting refined designs tailored to meet your needs while adhering to the fundamental principles of design.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} alt="code"width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Clean Code
              </h3>
              <p className="py-2">
                Rule Number one is always have clean code that can be understood after a glance at the readme.
                
              </p>
          
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} alt="consulting"width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, Ive done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <a href="https://musical-dasik-caaa2c.netlify.app" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="A Number Guessing Game"

              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="remotecareerstarter.com"  target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="A LandingPage for Remote Careers"
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://risk-reward-calc.netlify.app" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="A Risk Reward calculator for leverageing crypto"
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://loquacious-peony-c02071.netlify.app" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="Worm Game"
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
           <a href="https://jahaziel-dalzell.myshopify.com" target="_blank" rel="noopener noreferrer">
           <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
           layout="responsive"
            src={web1}
            alt="E-Commerce Fashion Store"
             />
  </a>
</div>
           
          </div>
        </section>
      </main>
    </div>
  );
}
