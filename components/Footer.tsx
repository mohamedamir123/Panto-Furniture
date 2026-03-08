"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-[#F7F7F7] pt-29.5 pb-14 px-32">
      <div className="container">
        <div className="flex flex-col gap-29.5">
          <div className="flex flex-col sm:flex-row gap-15 sm:gap-0 items-start sm:items-center justify-between">
            <div className="flex flex-col items-start gap-7.25">
              <h2 className="text-2xl text-black font-bold">Panto</h2>
              <p className="text-black/50 text-sm">
                The advantage of hiring a workspace with <br /> us is that gives
                you comfortable service <br /> and all-around facilities.
              </p>
            </div>
            <div className="flex flex-col items-start gap-5">
              <h2 className="text-sm text-[#F6973F]">Services</h2>
              <ul className="flex flex-col gap-4 text-sm">
                <Link href={"#"}>Email Marketing</Link>
                <Link href={"#"}>Camapigns</Link>
                <Link href={"#"}>Branding</Link>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-5">
              <h2 className="text-sm text-[#F6973F]">Furniture</h2>
              <ul className="flex flex-col gap-4 text-sm">
                <Link href={"#"}>Beds</Link>
                <Link href={"#"}>Chair</Link>
                <Link href={"#"}>All</Link>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-5">
              <h2 className="text-sm text-[#F6973F]">Follow Us</h2>
              <ul className="flex flex-col gap-4 text-sm">
                <Link
                  href={"https://www.facebook.com/"}
                  target="blank"
                  className="flex items-center gap-1"
                >
                  <FaFacebookF className="text-[#1E2833] text-xl" />
                  <span>Facebook</span>
                </Link>
                <Link
                  href={"https://x.com/"}
                  target="blank"
                  className="flex items-center gap-1"
                >
                  <FaTwitter className="text-[#1E2833] text-xl" />
                  <span>Twitter</span>
                </Link>
                <Link
                  href={"https://www.instagram.com/"}
                  target="blank"
                  className="flex items-center gap-1"
                >
                  <FaInstagram className="text-[#1E2833] text-xl" />
                  <span>Instagram</span>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between">
            <h5 className="text-black/50 text-sm">
              Copyright © 2021 Panto. All rights reserved
            </h5>
            <div className="flex gap-10 items-center text-black/40">
              <h3>Terms & Conditions</h3>
              <h3>Privacy Policy</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
