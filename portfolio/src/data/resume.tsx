import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Manan Arora",
  initials: "MA",
  url: "https://github.com/Manancode",
  location: "Ghaziabad. Uttar Pradesh",
  locationLink: "",
  description:
    "Full-stack dev. Find me on GitHub, LinkedIn and Twitter.",
  summary:"I am a full-stack software engineer, I love building software products that solves genuine problems of people. Founded some of the products in past [now pivoted] as a solopreneur. I also contribute to Open Source Projects.",
  
  avatarUrl: "/dp.jpeg",
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
        url: "https://www.linkedin.com/in/manancode",
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
        url: "/",
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
      school: "National Institute of Technology Hamirpur",
      href: "https://nith.ac.in/",
      degree: "Himachal Pradesh",
      logoUrl: "/nithlogo.png",
      start: "2023",
      end: "2027",
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
          href: "/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manancode/cryptobox",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/koshbox.jpeg",
      video: "",
    },
    {
      title: "RateYourcustomer",
      href: "https://rateyourcustomer.vercel.app/",
      dates: "August 2024 - September 2024",
      active: true,
      description:
        "Developed Rateyourcustomer, a saas application that rates your customer based on their activity such as spending habits and much more. Made a Webhook architect from scratch to transfer users data safely.",
      technologies: [
        "React.js",
        "Kafka",
        "Cronjobs",
        "Gemini API",
        "TailwindCSS",
        "Framer Motion",
        "Node.js",
        "Express",
      ],
      links: [
        {
          type: "Website",
          href: "https://rateyourcustomer.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manancode/rateourcustomer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rate.png",
      video: "",
    },
    {
      title: "Saasy.lol",
      href: "https://rateyourcustomer.vercel.app/",
      dates: "June 2024 - August 2024",
      active: true,
      description:
        "Developed a saas that helps in marketing of your product using reddit. FIlters out related posts/users/subreddits . Used Tensorflow and AI-models to actually judge the sentiment of a conversation and ultimately helps founders to find leads for their product.",
      technologies: ["JavaScript", "React.js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://saasylol.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https;//github.com/manancode/saasy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sassy.png",
      video: "",
    },
    {
      title: "CleanTalk",
      href: "/",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "To develop a voice recording software that automatically removes filler words like 'uhhs' and 'uhmms' to enhance the clarity and attentiveness of online presentations.",
      technologies: [
        "Nodejs",
        "React.js",
        "TailwindCSS",
        "WHISPERAPI",
        "ffmpeg",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/voice-filter-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cleantalk.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "IIT Kanpur E-summit'23",
      dates: "Oct 13th - 15th, 2023",
      location: "IIT Kanpur",
      description:
        "Secured the 2nd Position E-summit'23",
      image: "/esummit.jpeg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://ecelliitk.org/esummit/",
        },
      ],
    },
    {
      title: "Electrothon 6.0",
      dates: "August 23rd - 24th, 2024",
      location: "NIT Hamirpur",
      description:
        "Made a tech application to connect ambulance in one tap.",
      icon: "public",
      image: "/electrothon.jpeg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/",
        },
      ],
    },
    {
      title: "Stellarscape Explorer Hackathon",
      dates: "Feb 2024 - March 2024",
      location: "NIT Hamirpur",
      description:
        "Won Track-1 where I developed a web3 dapp over layer-2 blockchain Andromeda",
      image: "/stellarescape.webp",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/",
        },
      ],
    },
     {
      title: "Rannit-E",
      dates: "March 19th, 2024",
      location: "NIT Durgapur",
      description:
        "",
      image: "rannite.webp",
      // win: "Best Data Hack",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/",
        },
      ],
    },
  ],
} as const;
