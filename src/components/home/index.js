import React from "react";
import Link from "gatsby-link";

import EmailIcon from "react-icons/lib/fa/envelope";
import MessageIcon from "react-icons/lib/fa/comment";

import { event } from "../../utils/ga";
import Footer from "../footer";
import WeDo from "../we-do";
import How from "../how";
import "./style.scss";

import LowResImageSrc from "../../utils/low-res-image";

const onEmailClick = place => () => {
  event("Email", `Home:${place}`);
};

const Home = () => (
  <main className="c-home">
    <header
      className="c-home-header"
      style={{ backgroundImage: `url("${LowResImageSrc}")` }}
    >
      <span className="c-home-header-img" />
      <div className="c-home-main">
        <h1>
          <Link
            className="c-home-logo"
            onClick={() => event("Pizza", "Home")}
            to="/pizza"
          >
            <img src="https://elwood.technology/icon.png" alt="Pizza" />
          </Link>
          DCommons Lab
        </h1>
        <h2>Software &amp; Digital Product Development Consultancy</h2>
        <h3>
          We help our clients build great products &amp; grow great teams.
        </h3>
        <a
          onClick={onEmailClick("head")}
          className="btn btn-lg"
          href="mailto:hello@dcommons.lab"
        >
          <EmailIcon />
          <span>hello@dcommons.lab</span>
        </a>
      </div>
    </header>
    <How />

    <WeDo onEmailClick={onEmailClick("wedo")}>
      <h3>
        Let&#39;s Talk... <small>over some good coffee!</small>
      </h3>
    </WeDo>
    <Footer />
  </main>
);

export default Home;
