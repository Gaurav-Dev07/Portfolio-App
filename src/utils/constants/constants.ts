export const NAME = "Gaurav Shukla";
export const ROLE = "Full Stack Software Engineer";
export const PROFESSIONAL_SUMMARY =
  "I craft exceptional digital experiences through modern full-stack development, with a strong interest in distributed systems, AI integration, and solving complex optimization problems. Passionate about clean code, innovative solutions, and bringing ideas to life with elegant software architecture";
export const ABOUT_ME_SUMMARY =
  "Developed a comprehensive digital marketplace for one of the largest truck manufacturing companies in the US. Contributed as a Full-Stack Engineer from the ground up, owning the end-to-end lifecycle—including architecture planning, system design, and scalable implementation. Built the frontend application and backend microservices from scratch, ensuring modularity, performance, and future scalability.";
export const JORNEY_SUMMARY = {
  first:
    "Started coding in college with cpp and dsa then quickly fell in love with problem-solving. Transitioned to web development and have been building full-stack applications ever since, currently working remotely with a startup.",
  second:
    "I believe in continuous learning and staying up-to-date with the latest technologies. Currently focused on cloud-native architectures, microservices, modern frontend frameworks and leveraging artificial intelligence.",
  third:
    "I am very interested in working with startups and innovative projects.",
};

export const PROFESSIONAL_PROJECTS = [
  {
    title: "Wabash Parts Ecommerce Platform",
    description:
      "Contributed to enhancing and stabilizing an existing parts e-commerce application for Wabash. The application, originally written in plain JavaScript, suffered from critical bugs and poor performance. I resolved production issues, led performance investigations (spikes) to improve page rendering speed, and introduced TypeScript for stronger type safety and maintainability. Additionally, I refactored code to improve quality and scalability, while actively working on feature enhancements and a complete UI revamp to modernize the platform.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "WebSocket",
      "Tailwind",
      "react-query",
      "graphql",
    ],
    liveUrl: "https://parts.onewabash.com/",
  },
  {
    title: "Wabash Marketplace",
    description:
      "Developed a comprehensive digital marketplace for one of the largest truck manufacturing companies in the US. Contributed as a Full-Stack Engineer from the ground up, owning the end-to-end lifecycle—including architecture planning, system design, and scalable implementation. Built the frontend application and backend microservices from scratch, ensuring modularity, performance, and future scalability.",
    technologies: [
      "React.js",
      "material-ui",
      "jest",
      "Node.Js",
      "Nest.js",
      "redis",
      "microservice-architecture",
      "PostgreSQL",
      "Azure",
    ],
    liveUrl: "https://marketplace.onewabash.com/",
  },
  {
    title: "cloud-arch Visualizer",
    description:
      "Developed an internal cloud architecture visualization platform from scratch as part of a 3-member team. The tool allowed users to log in with cloud credentials and automatically generate system-design-like diagrams of infrastructure, enriched with metadata. Implemented support for AWS, Azure, and GCP, along with a date-based view to visualize and compare architecture changes over time. This feature enabled teams to track system evolution, identify resource inefficiencies, and optimize cloud usage. The platform directly contributed to better cost management and strategic business decisions by providing visibility into resource allocation and system growth.",
    technologies: ["React", "Socket.io", "Node.js", "Redis", "JWT"],
    liveUrl: "https://marketplace.onewabash.com/",
  },
  {
    title: "Amplifier Studio",
    description:
      "Contributed to the development of Amplifier Security, a platform for cybersecurity and vulnerability analysis. Built the frontend dashboard with a strong focus on clean UI/UX, integrating interactive graphs and charts to provide real-time insights into vulnerabilities. Independently designed and implemented a Google Chrome extension to extend application functionality and improve accessibility. Ensured the UI was responsive, performant, and optimized for analyzing large datasets while maintaining an intuitive experience for security teams.",
    technologies: ["React", "Socket.io", "Node.js", "Redis", "JWT"],
    liveUrl: "#",
  },
  {
    title: "Moxy",
    description:
      "Moxy is a social media platform that allows users to share short video clips, follow other users, and engage with content through likes and comments. Worked as a backend developer on building key features like user recommendation, post sharing and post insights.",
    technologies: ["nodejs", "nest.js", "mongodb", "redis"],
    featured: true,
    liveUrl: "#",
  },
];

export const PERSONAL_PROJECTS = [
  {
    title: "Code Review AI-Assistant",
    description:
      "Developed a full-stack AI agent for automated code reviews. Users authenticate via GitHub OAuth to access repositories and subscribe to the review agent. Once a pull request is raised, the agent automatically analyzes the code and generates review comments using OpenAI APIs. The backend leverages GitHub APIs to interact with repositories, post comments, and monitor PRs in real time. Built a responsive frontend interface to manage subscriptions, view repositories, and track code review activity, enabling developers to improve code quality with minimal manual effort.",
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    featured: true,
    liveUrl: "#",
  },
  {
    title: "API Document Viewer",
    description:
      "Developed a tool to dynamically generate and serve Swagger API documentation for multiple services and versions. The application exposes an API where users submit a JSON configuration along with service name and version; this automatically produces a Swagger-compliant document. A GET API endpoint allows retrieving documentation by service name + version, enabling teams to easily track and consume APIs across versions. The tool solved integration challenges with third-party APIs by providing consistent, versioned documentation without the need for manual updates. This config-driven design simplified onboarding, reduced integration errors, and improved developer productivity.",
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    featured: true,
    liveUrl: "",
  },
];