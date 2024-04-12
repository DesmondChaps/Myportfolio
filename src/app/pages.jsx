import Header from "@/components/Header/Header";
import Intro from "@/components/introduction/intro";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkedWidget/WorkedWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

const articles = [
  {
    date: "My Experience",
    title: "",
    content:
      "From 2019 to 2022, I served as an Information Systems Administrator at Spar Zimbabwe, where I led the successful implementation of Microsoft Dynamics 365 across over 20 supermarkets. My role involved training over 200 employees, creating critical financial reports using Power BI, and streamlining data migration processes to enhance operational efficiency. Prior to this, as a Data Clerk, I managed data with high accuracy and provided valuable business analysis that supported strategic decision-making.",
    link: "#",
  },
  
];

const intro = {
  image: "profile.jpeg",
  title: "System Administrator, father, and husband",
  introduction:
    "I am passionate about learning",
  linkedIn_link: "www.linkedin.com/in/desmond-chaparadza-031969133",
  
  github_link: "https://www.github.com",
};

const skills = [
  { name: "HTML", proficiency: 60, icon: "html5.png" },
  { name: "CSS", proficiency: 50, icon: "css3.png" },
  { name: "JavaScript", proficiency: 75, icon: "javascript.png" },
];

export default function Home() {
  return (
    <div id="page-wrapper">
      <Header />
      <Intro
        image={intro.image}
        title={intro.title}
        introduction={intro.introduction}
        linkedIn_link={intro.linkedIn_link}
        x_link={intro.x_link}
        github_link={intro.github_link}
      />
      <div className="content-wrapper">
        <div id="main-content">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>

        <div id="main_right">
          <SignupWidget
            title={"Stay up to date"}
            content={"Get notified when I publish something new, and unsubscribe at any time."}
          />
          <WorkWidget
            title={"Work"}
            content={"My work experience."}
            experiences={[
              {
                logo: "/slack.png",
                organization: "Spar Zimbabwe",
                jobTitle: "Systems Administrator",
                startYear: 2020,
                endYear: 2022,
              },
              {
                logo: "/spotify.png",
                organization: "Spar Zimbabwe",
                jobTitle: "Data Clerk",
                startYear: 2019,
                endYear: 2020,
              },
              {
                logo: "/audible.png",
                organization: "BeanTree",
                jobTitle: "Data Clerk",
                startYear: 2018,
                endYear: 2019,
              },
              {
                logo: "/microsoft.png",
                organization: "BeanTree",
                jobTitle: "Receiving Clerk",
                startYear: 2017,
                endYear: 2018,
              },
            ]}
          />
          <SkillsWidget
            title={"Skills"}
            content={"Skilled in Microsoft Dynamics 365 and Microsoft Office Suite, my technical acumen is complemented by a solid foundation in customer service and problem-solving, ensuring that technology implementations drive business value and enhance user experiences. I am passionate about leveraging technology to solve complex business challenges, with a keen interest in cloud technologies and cybersecurity."}
            skills={skills}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
