import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./About.css";

export const metadata = {
  title: "My name is Desmond Chaparadza. I live in Salt Lake City, Where I am creating a future in Analysis.",
  paragraph1:
    "Experienced Information Systems Administrator with a robust background in managing enterprise-level systems and leading technology-driven business improvements.",
  paragraph2:
    " Currently pursuing a Bachelor of Applied Science in System Administration at Ensign College, where I am deepening my expertise in Network Administration, Security, Operating Systems, Cloud Computing Fundamentals, Virtualization Technologies, and Cybersecurity principles. ",
  paragraph3:
    " I hold an Associate degree in Business Intelligence from Ensign College, with a strong focus on Data Analysis, Visualization, and Database Management Systems.",
};

export default function About() {
  const body = (
    <div className="content-wrapper about-content">
      <div id="main-content">
        <div className="title">
          <h1>{metadata.title}</h1>
        </div>
        <div className="paragraph">
          <p>{metadata.paragraph1}</p>
        </div>
        <div className="paragraph">
          <p>{metadata.paragraph2}</p>
        </div>
        <div className="paragraph">
          <p>{metadata.paragraph3}</p>
        </div>
        <div className="paragraph">
          <p>{metadata.paragraph4}</p>
        </div>
      </div>
      <div id="main_right">
        <div id="profile-picture">
          <img src="about.jpeg" alt="Profile Picture" className="picture" />
        </div>
        <div className="socials">
          <a href="https://www.twitter.com/janedoe">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M11.9047 8.47089L19.3513 0.00836182H17.5873L11.1187 7.35475L5.956 0.00836182H0L7.80867 11.1185L0 19.9916H1.764L8.59067 12.2319L14.044 19.9916H20M2.40067 1.30886H5.11067L17.586 18.755H14.8753"
                fill="#71717A"
              />
            </svg>{" "}
            Follow me on X
          </a>
          <a href="https://www.github.com/janedoe">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 -0.000366211C4.475 -0.000366211 0 4.58763 0 10.2526C0 14.7896 2.862 18.6216 6.838 19.9796C7.338 20.0696 7.525 19.7616 7.525 19.4926C7.525 19.2496 7.512 18.4426 7.512 17.5826C5 18.0586 4.35 16.9566 4.15 16.3796C4.037 16.0846 3.55 15.1746 3.125 14.9316C2.775 14.7396 2.275 14.2646 3.112 14.2516C3.9 14.2396 4.462 14.9956 4.65 15.3026C5.55 16.8536 6.988 16.4186 7.562 16.1486C7.65 15.4826 7.912 15.0336 8.2 14.7776C5.975 14.5216 3.65 13.6376 3.65 9.71563C3.65 8.60063 4.037 7.67763 4.675 6.95963C4.575 6.70363 4.225 5.65263 4.775 4.24263C4.775 4.24263 5.612 3.97363 7.525 5.29363C8.325 5.06363 9.175 4.94763 10.025 4.94763C10.875 4.94763 11.725 5.06263 12.525 5.29363C14.437 3.96063 15.275 4.24363 15.275 4.24363C15.825 5.65263 15.475 6.70363 15.375 6.95963C16.012 7.67763 16.4 8.58763 16.4 9.71563C16.4 13.6496 14.063 14.5216 11.838 14.7776C12.2 15.0976 12.513 15.7136 12.513 16.6746C12.513 18.0456 12.5 19.1476 12.5 19.4946C12.5 19.7626 12.688 20.0836 13.188 19.9806C15.1849 19.2846 16.911 17.9756 18.12 16.2406C19.3456 14.4845 20.0019 12.3941 20 10.2526C20 4.58763 15.525 -0.000366211 10 -0.000366211Z"
                fill="#71717A"
              />
            </svg>{" "}
            Follow me on GitHub
          </a>
          <a href="https://www.linkedin.com/in/jane-doe">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M15.335 15.339H12.67V11.162C12.67 10.166 12.65 8.884 11.28 8.884C9.891 8.884 9.679 9.968 9.679 11.089V15.339H7.013V6.75H9.573V7.92H9.608C9.966 7.246 10.836 6.533 12.136 6.533C14.836 6.533 15.336 8.311 15.336 10.624V15.339H15.335ZM4.003 5.575C3.79956 5.57526 3.59806 5.53537 3.41006 5.45761C3.22207 5.37984 3.05127 5.26574 2.90746 5.12184C2.76365 4.97793 2.64965 4.80706 2.57201 4.61901C2.49437 4.43097 2.4546 4.22944 2.455 4.026C2.4552 3.71983 2.54618 3.4206 2.71644 3.16615C2.8867 2.91169 3.12859 2.71343 3.41153 2.59645C3.69447 2.47947 4.00574 2.44902 4.30598 2.50894C4.60622 2.56886 4.88196 2.71648 5.09831 2.93311C5.31466 3.14974 5.46191 3.42566 5.52145 3.72598C5.58099 4.0263 5.55013 4.33753 5.43278 4.62032C5.31543 4.9031 5.11687 5.14474 4.86219 5.31467C4.60751 5.4846 4.30917 5.5752 4.003 5.575ZM5.339 15.339H2.666V6.75H5.34V15.339H5.339ZM16.67 0H1.329C0.593 0 0 0.58 0 1.297V16.703C0 17.42 0.594 18 1.328 18H16.666C17.4 18 18 17.42 18 16.703V1.297C18 0.58 17.4 0 16.666 0H16.67Z"
                fill="#71717A"
              />
            </svg>{" "}
            Follow me on LinkedIn
          </a>
        </div>
        <div className="email">
          <a href="desmond.chaparadza@gmail.com">
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon svg-icon"
            >
              <path d="M20.75 3.75V14.25C20.75 14.8467 20.5129 15.419 20.091 15.841C19.669 16.2629 19.0967 16.5 18.5 16.5H3.5C2.90326 16.5 2.33097 16.2629 1.90901 15.841C1.48705 15.419 1.25 14.8467 1.25 14.25V3.75M20.75 3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75M20.75 3.75V3.993C20.75 4.37715 20.6517 4.75491 20.4644 5.0903C20.2771 5.42569 20.0071 5.70754 19.68 5.909L12.18 10.524C11.8252 10.7425 11.4167 10.8582 11 10.8582C10.5833 10.8582 10.1748 10.7425 9.82 10.524L2.32 5.91C1.99292 5.70854 1.72287 5.42669 1.53557 5.0913C1.34827 4.75591 1.24996 4.37815 1.25 3.994V3.75" />
            </svg>{" "}
            Email me
          </a>
        </div>
      </div>
    </div>
  );
  return (
    <div id="page-wrapper">
      <Header />
      {body}
      <Footer />
    </div>
  );
}
