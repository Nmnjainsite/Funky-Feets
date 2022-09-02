import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <hr style={{ width: "80%" }} />
      <p>
        © Funky Feet 2022. All rights reserved. Site - Managed by Naman Jain .
      </p>

      <a href="https://github.com/Nmnjainsite">
        <BsGithub></BsGithub>
      </a>
      <a href="https://www.linkedin.com/in/naman-jain-97382b231/">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://twitter.com/NamanJa83726591">
        <BsTwitter></BsTwitter>
      </a>
      <a href="https://www.instagram.com/namanjain_321/">
        <BsInstagram></BsInstagram>
      </a>
    </footer>
  );
};

export { Footer };
