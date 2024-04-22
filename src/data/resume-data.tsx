import {
  FrienderLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, CVIcon } from "@/components/icons";
import profilePicture from "../images/profilePic.jpg";

// import resumePdf from "../images/resume.pdf";

let x= CVIcon
export const RESUME_DATA = {
  name: "Charles Chitty",
  initials: "CC",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/San-Francisco",
  timeZone:"America/Los_Angeles",
  about:
    "Fullstack Software Engineer",
  summary:
    "A full stack developer based in San Francisco.",
  summaryAbout:
    `Hi, my name is Charles and I am 22-years old. When I am not staring at screen working on my next coding project, I like to run, read, and listen to music. Last month I just completed my first half marathon in Portland and now I'm spending my free time catching up on some books on my to-do list. Some books that I have just started on include Kafka on the Shore and Crying in H-Mart.

    Find my resume attached at the bottom.`,
  futureEvents: [
  ],
  avatarUrl: profilePicture,
  personalWebsiteUrl: "https://charleschitty.com",
  lastUpdated: new Date("2024-04-16T08:00:00Z"),
  // resumePdf: resumePdf,
  contact: {
    email: "charlescchitty@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/charleschitty",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/charles-chitty/",
        icon: LinkedInIcon,
      },
      {
        name:"Resume",
        url:"https://google.com",
        icon: CVIcon,
      }
    ],
  },
  education: [
    {
      school: "Duke University",
      degree: "Bachelor's Degree in Economics",
      start: "2019",
      end: "2023",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
  ],
  books:[
    { title: "Kafka on the Shore", read: true },
    { title: "Crying in H-Mart", read: false },
    { title: "Eleanor and Park", read: false },
    { title: "How do you live", read:true},
    { title: "Gentleman in Moscow", read:true},
    { title: "Anna Karenina", read: false},
  ],
  projects: [
    {
      title: "Friender",
      techStack: [
        "Side Project",
        "Python",
        "Flask",
        "Jinja",
        "SQLAlchemy"
      ],
      description: "A test platform that links members to local users",
      logo: FrienderLogo,
      link: {
        label: "friender.com",
        href: "https://friender-demo-app.onrender.com",
      },
    },
    {
      title: "Jobly",
      techStack: [
        "Side Project",
        "React",
        "Express",
        "PostgreSQL"
      ],
      description: "A test job platform that links users and job openings",
      link: {
        label: "https://react-jobly-chitty.surge.sh/",
        href: "http://react-jobly-chitty.surge.sh/",
      },
    },
  ],
} as const;