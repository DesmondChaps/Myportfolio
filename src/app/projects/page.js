import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import Project from "@/components/Project/Project";
import "./Projects.css";

export const metadata = {
  title: "Things I’ve made trying to put my dent in the universe.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
  projects: [
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
  ],
};

export default function Projects() {
  const projects = metadata.projects.map((project, index) => (
    <Project key={index} company={project.company} description={project.description} link={project.link} />
  ));
  return (
    <div id="page-wrapper">
      <Header />
      <div id="main-content">
        <Intro title={metadata.title} introduction={metadata.description} />
        <div id="projects">{projects}</div>
      </div>
      <Footer />
    </div>
  );
}
