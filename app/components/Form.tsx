"use client";
import { StaticImageData } from "next/image";
import FormPic from "../assets/FormPic.svg";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Input from "./Input";
import Button from "./Button";

const Form: React.FC = () => {
  const formUrl: string = (FormPic as StaticImageData).src;
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const router = useRouter();

  async function handleFormSubmit() {
    let countryCodeRegEx = new RegExp(/^\+91\s?[0-9]*$/);
    let phoneRegEx = new RegExp(/^\+91\s?\d{10}$/);
    let emailRegEx = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );

    if (!phoneRegEx.test(phone) && !emailRegEx.test(email)) {
      setEmailError("Invalid Email ID");
      if (!countryCodeRegEx.test(phone)) {
        setPhoneError("Please add correct country code");
      } else {
        setPhoneError("Invalid Phone number");
      }
    } else if (!emailRegEx.test(email)) {
      setEmailError("Invalid Email ID");
      setPhoneError("");
    } else if (!countryCodeRegEx.test(phone)) {
      setEmailError("");
      setPhoneError("Please add correct country code");
    } else if (!phoneRegEx.test(phone)) {
      setEmailError("");
      setPhoneError("Invalid Phone number");
    } else if (phoneRegEx.test(phone) && emailRegEx.test(email)) {
      setPhoneError("");
      setEmailError("");
      Cookies.set(
        "formData",
        JSON.stringify({
          Username: name,
          Phone: phone,
          Email: email,
        })
      );
      router.push(
        `/ThankYouPage?data=${encodeURIComponent(
          JSON.stringify({
            Username: name,
            Phone: phone,
            Email: email,
          })
        )}`
      );
    }
  }
  return (
    <>
      <div className="flex justify-center items-center p-8 m-20 mx-32 bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
        <div className="flex justify-center w-full">
          <img src={formUrl} alt="Form" className="h-full w-full" />
        </div>
        <div className="ml-6 w-[90%]">
          <p className="text-3xl bg-gradient-to-r from-teal-600 to-sky-400 text-transparent bg-clip-text font-medium">
            Experience The Simplicity And Efficiency Of KredX Today!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleFormSubmit();
            }}
          >
            <Input
              label="Full Name*"
              placeholder="Enter full name (eg: Jane Doe)"
              customClass="mt-7"
              setValue={setName}
            />
            <Input
              label="Phone Number*"
              placeholder="Enter phone number (eg: +91 0000000000)"
              setValue={setPhone}
              customClass="mt-3"
              error={phoneError}
            />
            <Input
              label="Email ID*"
              placeholder="Enter email ID (eg:abc@domain.com)"
              setValue={setEmail}
              customClass="mt-3"
              error={emailError}
            />
            <Button text="Schedule A Demo" handleClick={handleFormSubmit} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
