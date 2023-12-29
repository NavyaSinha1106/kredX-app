"use client";
import { useEffect, useState } from "react";
import Button from "../components/Anchor";
import Cookies from "js-cookie";

const ThankYouPage: React.FC = () => {
  const [formCookie, setFormCookie] = useState({
    Username: "",
    Phone: "",
    Email: "",
  });
  useEffect(() => {
    const cookieData = Cookies.get("formData");
    const parsedCookie = cookieData ? JSON.parse(cookieData) : null;
    setFormCookie(parsedCookie);
  }, []);

  return (
    <>
      <div className="bg-slate-900 h-screen flex flex-col justify-center items-center">
        <h1 className="text-teal-500 font-bold text-4xl">
          Thank you For Submitting Personal Details
        </h1>
        <div className="flex flex-col justify-center items-center text-white text-2xl m-10">
          <p className="m-5">Name: {formCookie.Username}</p>
          <p className="m-5">Phone: {formCookie.Phone}</p>
          <p className="m-5">Email: {formCookie.Email}</p>
        </div>
        <Button link={"/"} text={"Go Back"} />
      </div>
    </>
  );
};

export default ThankYouPage;
