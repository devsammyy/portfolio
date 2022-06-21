import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="contain">
      <article className="about">
        <h1>Hi, My name is Sammy</h1>
        <div className="info">
          <p>A Software Developer with a passion for learning and creating</p>
          <div className="icons">
            <LinkedInIcon />
            <EmailIcon />
            <GithubIcon />
          </div>
        </div>
      </article>
      <article className="skills">
        <h1>Skills</h1>
        <ul className="list">
          <li className="item">
            <h2>FrontEnd</h2>
            <span>
              ReactJS, Angular, Vue, React-Native, Flutter, NPM, Ionic,
              Bootstrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Backend</h2>
            <span>
              NodeJS, Django, Java Spring, .NET, ExpressJS, GraphQL,
              ApolloServer, MySQL, MongoDB, DynamoDB, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java, Javascript, Python, C++, C#, Go, SQL, </span>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Home;
