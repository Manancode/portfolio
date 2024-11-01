import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Manan Arora",
  initials: "PB",
  url: "https://github.com/Manancode",
  location: "Guwahati, Assam",
  locationLink: "",
  description:
    "Full-stack Deve with an experience of 2 years. Find me on GitHub,LinkedIn and Twitter, always sharing new projects and insights.",
  summary:
    "In 2024, I am a final-year Computer Science student focused on full-stack development, AI, and backend technologies. I’ve interned at Littlebox, conducted research at IIT Guwahati, and built various innovative projects. I’m passionate about creating impactful solutions and always seeking new challenges.",
  avatarUrl: "/profile3.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Node.js",
    "Express",
    "Python",
    "Postgres",
    "Embedded Systems",
    "MongoDB",
    "Java",
    "C++",
    "C",
    "DSA",
    "TailwindCSS",
    "Bootstrap",
    "Shadcn UI",
    "Magic UI",
    "Git",
    "Github",
    "Bash",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mananarorawork@gmail.com",
    tel: "+91 9318404524",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Manancode",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/parijat-bhattacharjee-97741a177/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/Manancode",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mananarorawork@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      "Download CV": {
        name: "Download Resume",
        url: "/Parijat4.pdf",
        icon: Icons.download,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Littlebox",
      href: "https://littleboxindia.com/",
      badges: [],
      location: "Guwahati, Assam",
      title: "Software Development Engineer Intern",
      logoUrl: "/littlebox.avif",
      start: "June 2024",
      end: "July 2024",
      description:
        "Developed and optimized backend services using Node.js and Express for a clothing e-commerce platform. Integrated secure authentication with JWT, implemented image upload functionality with Multer, and protected routes to ensure robust user interactions. Collaborated with the frontend team to streamline API endpoints and enhance user experience. Led database management using MongoDB to efficiently store and retrieve product data.",
    },
    {
      company: "Indian Institute of Technology, Guwahati",
      badges: [],
      href: "https://www.iitg.ac.in/cse/",
      location: "Guwahati, Assam",
      title: "Summer Intern",
      logoUrl: "/iitg.jpeg",
      start: "July 2023",
      end: "August 2023",
      description:
        "Achieved high accuracy and coherence in Bengali news article summarization by applying advanced NLP techniques and fine-tuning models to optimize performance and relevance.",
    },
  ],
  education: [
    {
      school: "Assam Engineering College",
      href: "https://aec.ac.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/aec.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "KoshBox",
      href: "/",
      dates: "October 2024 - Present",
      active: true,
      description: "Payment box like paytm-box but for crypto payments. Koshbox is an IoT device that provides real-time transaction notifications through audio feedback.",
      technologies: ["Esp32", "Websockets", "C++", "Platformio"],
      links: [
        {
          type: "Website",
          href: "https://kanha-gpt.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/POBOROJO/Kanha-GPT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/krishna.jpg",
      video: "",
    },
    {
      title: "Saasy",
      href: "https://law-gpt.netlify.app/",
      dates: "August 2024 - September 2024",
      active: true,
      description:
        "Developed JUSTIFIED, a web application that provides legal advice based on Indian laws and the Indian Penal Code (IPC) through an intuitive and user-friendly interface. Integrated LangChain.js with FAISS to deliver real-time, accurate legal guidance, enhancing the relevance of responses.",
      technologies: [
        "React.js",
        "Typescript",
        "Firebase",
        "Gemini API",
        "TailwindCSS",
        "Framer Motion",
        "Node.js",
        "Express",
        "FAISS",
        "LangChain.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/MET4L-DS/AskMe",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://law-gpt.netlify.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/justified.webp",
      video: "",
    },
    {
      title: "Rateyourcustomer",
      href: "https://virtualr-nine.vercel.app/",
      dates: "June 2024 - August 2024",
      active: true,
      description:
        "Developed the frontend for VirtualR, a Virtual Reality tool designed to empower developers in building immersive VR applications.",
      technologies: ["JavaScript", "React.js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://github.com/POBOROJO/PRACTICE/tree/main/tailwind/practice1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://virtualr-nine.vercel.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/VR.jpeg",
      video: "",
    },
    {
      title: "GDSC Explore 4.0",
      href: "https://gdsc-explore.xyz/",
      dates: "April 2023 - June 2023",
      active: true,
      description:
        "I was the part of the frontend team in building this website, this was the largest developers fest in the North Eastern India.",
      technologies: [
        "JavaScript",
        "React.js",
        "TailwindCSS",
        "Cloudinary",
        "SCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://gdsc-explore.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gdsc-nits-org/gdsc-explore-4.0/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gdsc.webp",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "IIT Kanpur E-summit'23",
      dates: "Oct 13th - 15th, 2023",
      location: "Kanpur",
      description:
        "Secured the 2nd Position in HackVita 2.0, Developed an application to educate and empower individuals to make environmentally conscious choices in their daily lives.",
      image: "/hack-vita.jpeg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/POBOROJO/EcoFront",
        },
      ],
    },
    {
      title: "Electrothon 6.0",
      dates: "August 23rd - 24th, 2024",
      location: "Hamirpur , Himachal Pradesh",
      description:
        "Secured 2nd position as part of a team for presenting an innovative solution in Ideavision competition under the Institution's Innovation Council.",
      icon: "public",
      image: "/ideavision.jpeg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/13wLSA92mlpIo6es7DD7BlmaeRjiujNk5/view",
        },
      ],
    },
    {
      title: "Stellarscape Explorer Hackathon",
      dates: "May 2024 - August 2024",
      location: "Remote",
      description:
        "Was part of a team in developing the backend for a web application that helps people find and book flights for their trips.",
      image: "/girl.jpeg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gssoc.girlscript.tech/",
        },
      ],
    },
    {
      title: "Prasunethon",
      dates: "August 12th, 2023",
      location: "Guwahati, Assam",
      description:
        "Earned 1st position in the 'DSA Code War' event as part of a skilled team.",
      image: "/codewar.jpeg",
      links: [],
    },
    {
      title: "Rannit-E",
      dates: "January 23rd, 2022",
      location: "Guwahati, Assam",
      description:
        "Secured 1st position in circuit building competition in the 'CIRCUIT UNTANGLED' event.",
      image: "robo.jpg",
      // win: "Best Data Hack",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1oKUZfQFaxRkpK38KR3qNlkD5IvQn06CB/view",
        },
      ],
    },
  ],
} as const;