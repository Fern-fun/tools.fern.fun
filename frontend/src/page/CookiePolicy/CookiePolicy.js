import React from "react";

function CookiePolicy() {
  return (
    <div style={{ padding: "150px" }}>
      <h1>Cookie Policy for Fern Tools</h1>

      <p>
        This is the Cookie Policy for Fern Tools, accessible from tools.fern.fun
      </p>

      <p>
        <span className="c-secondary">1. </span>
        <strong>What Are Cookies</strong>
      </p>

      <p style={{ paddingLeft: "15px" }}>
        As is common practice with almost all professional websites this site
        uses cookies, which are tiny files that are downloaded to your computer,
        to improve your experience. This page describes what information they
        gather, how we use it and why we sometimes need to store these cookies.
        We will also share how you can prevent these cookies from being stored
        however this may downgrade or 'break' certain elements of the sites
        functionality.
      </p>

      <p>
        <span className="c-secondary">2. </span>
        <strong>How We Use Cookies</strong>
      </p>

      <p style={{ paddingLeft: "15px" }}>
        We use cookies for a variety of reasons detailed below. Unfortunately in
        most cases there are no industry standard options for disabling cookies
        without completely disabling the functionality and features they add to
        this site. It is recommended that you leave on all cookies if you are
        not sure whether you need them or not in case they are used to provide a
        service that you use.
      </p>

      <p>
        <span className="c-secondary">3. </span>
        <strong>Disabling Cookies</strong>
      </p>

      <p style={{ paddingLeft: "15px" }}>
        You can prevent the setting of cookies by adjusting the settings on your
        browser (see your browser Help for how to do this). Be aware that
        disabling cookies will affect the functionality of this and many other
        websites that you visit. Disabling cookies will usually result in also
        disabling certain functionality and features of the this site. Therefore
        it is recommended that you do not disable cookies. This Cookies Policy
        was created with the help of the .
      </p>

      <p>
        <span className="c-secondary">4. </span>
        <strong>The Cookies We Set</strong>
      </p>

      <ul>
        <li>
          <p style={{ paddingLeft: "15px" }}>Account related cookies</p>
          <p style={{ paddingLeft: "30px" }}>
            If you create an account with us then we will use cookies for the
            management of the signup process and general administration. These
            cookies will usually be deleted when you log out however in some
            cases they may remain afterwards to remember your site preferences
            when logged out.
          </p>
        </li>

        <li>
          <p style={{ paddingLeft: "15px" }}>Login related cookies</p>
          <p style={{ paddingLeft: "30px" }}>
            We use cookies when you are logged in so that we can remember this
            fact. This prevents you from having to log in every single time you
            visit a new page. These cookies are typically removed or cleared
            when you log out to ensure that you can only access restricted
            features and areas when logged in.
          </p>
        </li>

        <li>
          <p style={{ paddingLeft: "15px" }}>Site preferences cookies</p>
          <p style={{ paddingLeft: "30px" }}>
            In order to provide you with a great experience on this site we
            provide the functionality to set your preferences for how this site
            runs when you use it. In order to remember your preferences we need
            to set cookies so that this information can be called whenever you
            interact with a page is affected by your preferences.
          </p>
        </li>
      </ul>

      <p>
        <span className="c-secondary">5. </span>
        <strong>Third Party Cookies</strong>
      </p>

      <p style={{ paddingLeft: "15px" }}>
        In some special cases we also use cookies provided by trusted third
        parties. The following section details which third party cookies you
        might encounter through this site.
      </p>

      <ul>
        <li>
          <p style={{ paddingLeft: "15px" }}>
            From time to time we test new features and make subtle changes to
            the way that the site is delivered. When we are still testing new
            features these cookies may be used to ensure that you receive a
            consistent experience whilst on the site whilst ensuring we
            understand which optimisations our users appreciate the most.
          </p>
        </li>
      </ul>

      <p>
        <span className="c-secondary">6. </span>
        <strong>More Information</strong>
      </p>

      <p style={{ paddingLeft: "15px" }}>
        Hopefully that has clarified things for you and as was previously
        mentioned if there is something that you aren't sure whether you need or
        not it's usually safer to leave cookies enabled in case it does interact
        with one of the features you use on our site.
        <ul style={{ paddingLeft: "30px" }}>
          <li>Email: dev.fern.fun@gmail.com</li>
        </ul>
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "center",
          paddingTop: "50px",
          fontSize: "0.8rem",
        }}
      >
        <div>Last Updated: November 24, 2022</div>
        <div>
          <a
            className="c-secondary"
            style={{ textDecoration: "none", cursor: "pointer" }}
            href="https://www.cookiepolicygenerator.com/cookie-policy-generator/"
          >
            Cookies Policy Generator
          </a>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
