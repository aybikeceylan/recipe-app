import React from "react";
import Header from "../components/Header";
import Coding from "../assets/coding.svg"

const About = () => {
    return (
        <div className="bg-orange-300 h-[100vh] w-full flex flex-col">
            <Header />
            <img src={Coding} alt="" className="w-[500px] mx-auto" />
            <p className="text-2xl font-bold text-black mx-auto py-5">About Full-Stack Developer Aybike</p>
            <div className="bg-orange-500 font-bold text-lg text-black sm:w-[400px] md:w-[800px] py-10 mx-auto rounded-lg flex flex-col px-10 gap-4 shadow-md shadow-gray-500">
                <p className="text-end">I'm Aybike 🙂</p>
                <p>I'm currently learning Full-Stack Development Languages.</p>
                <p>I've already known JS, ReactJS,Python, SQL.</p>
            </div>
        </div>
    );
};

export default About;