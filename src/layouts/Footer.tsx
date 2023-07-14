import React from "react";
import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-white text-secondary py-8 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center mx-4 md:mx-auto max-w-6xl">
        {/* Logo */}
        <div>{/* <img className="h-10" src={logo} alt="Logo" /> */}</div>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20 mt-8 md:mt-0">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>Shipping</li>
            <li>How it works</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li>List your gear</li>
            <li>Contact team</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-2 justify-end mt-8 md:mt-0">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center items-center mt-8">
        <p className="mb-4 md:mr-8">Privacy Policy</p>
        <p className="mb-4 md:mr-8">Terms & Conditions</p>
        <p>&copy; TechNet {year}</p>
      </div>
    </div>
  );
};

export default Footer;
