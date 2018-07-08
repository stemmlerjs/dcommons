import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./style.scss";

const ld = {
  "@context": "http://schema.org",
  "@type": "Organization",
  url: "https://dcommonslab",
  name: "DCommons Lab | Software Development &amp; Consulting",
  logo: "https://dcommonslab/icon.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: null,
    email: "hello@dcommonslab",
    contactType: "customer service"
  },
  // sameAs: [
  //   "https://plus.google.com/u/1/b/117172292821813006162/117172292821813006162",
  //   "https://github.com/elwood-technology",
  //   "https://twitter.com/hello_elwood",
  //   "https://www.facebook.com/elwood.technology",
  //   "https://angel.co/elwood-technology",
  //   "https://www.linkedin.com/company/elwood-technology/",
  //   "https://www.instagram.com/hello_elwood/"
  // ]
};

class TemplateWrapper extends Component {
  componentDidMount() {
    const { history, location } = window;
    const { search } = window.location || {};

    if (
      typeof history.replaceState === "function" &&
      search.indexOf("utm_source") !== -1
    ) {
      setTimeout(() => history.replaceState({}, document.title, "/"), 1000);
    }
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <div className="layout">
        <Helmet
          title="DCommons Lab | Software Development &amp; Consulting | hello@dcommons.lab | Oakville, Ontario"
          meta={[
            {
              name: "description",
              content:
                "Software Development &amp; Consulting | hello@dcommons.lab| Oakville, Ontario"
            },
            {
              name: "keywords",
              content:
                "software, development, dev shop, consulting, node, javascript, ios, android, java"
            },
            {
              property: "og:title",
              content:
                "DCommons Lab | Software Development &amp; Consulting"
            },
            {
              property: "og:description",
              content:
                "Oakville, Ontario Software Development &amp; Consulting"
            },
            {
              property: "og:type",
              content: "website"
            }
          ]}
          script={[
            {
              type: "application/ld+json",
              innerHTML: JSON.stringify(ld)
            }
          ]}
          link={[{ rel: "apple-touch-icon", href: "/icon.png" }]}
        />
        {children()}
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
