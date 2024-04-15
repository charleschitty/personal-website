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
    "A full stack designer based in San Francisco but working remotely.",
  avatarUrl: profilePicture,
  personalWebsiteUrl: "https://charleschitty.com",
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