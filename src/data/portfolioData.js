export const portfolioData = {
  personal: {
    name: "Vaibhav Kr. Pandey",
    role: "Backend & Full Stack Software Engineer",
    currentCompany: "Cognizant",
    currentPosition: "Jr. Software Engineer",
    location: "Noida, India",
    email: "vaibhavadg123@gmail.com",
    phone: "+91 8299 653 666",
    github: "https://github.com/VaibhavPan1",
    linkedin: "https://linkedin.com/in/vaibhav-kumar-pandey",
    tagline: "Engineering scalable backend architectures, resilient microservices, and robust production systems.",
    summary:
      "Software Engineer with hands-on enterprise experience in Java, Spring Boot, REST APIs, and distributed microservices. Currently resolving production incidents, analyzing systems logs, and optimizing backend performance at Cognizant. Passionate about designing resilient architectures, scalable data workflows, and modern React interfaces.",
    availability: "Available for Backend & Full Stack Engineering Roles",
  },

  experience: [
    {
      company: "Cognizant",
      role: "Jr. Software Engineer",
      period: "July 2025 – Present",
      type: "Full-time",
      location: "Noida / Hybrid",
      summary:
        "Contributing to enterprise application stability, investigating root-cause production incidents, and ensuring tight SLA compliance for critical backend workflows.",
      highlights: [
        "Investigate complex backend application issues and data inconsistencies using deep SQL queries, application log analysis, and targeted debugging techniques.",
        "Collaborate seamlessly with cross-functional development and QA teams to reproduce enterprise defects, formulate solutions, and validate fixes before production deployment.",
        "Develop in-depth operational understanding of enterprise software topologies, multi-tier database schemas, and end-to-end production support workflows.",
        "Rapidly triage and resolve critical production incidents and service requests while consistently upholding strict SLA compliance benchmarks.",
      ],
      technologies: [
        "Java",
        "SQL",
        "Linux",
        "Production Debugging",
        "Log Analysis",
        "Postman",
        "Jira",
        "Enterprise Architecture",
      ],
    },
  ],

  projects: [
    {
      id: "bookbase",
      title: "BookBase – Library Management System",
      subtitle: "Enterprise Microservices Architecture & Modern Web Client",
      category: "Backend & Microservices",
      featured: true,
      description:
        "Designed and implemented an enterprise-grade library management platform, migrating from a monolithic baseline into autonomous, containerized Spring Boot microservices.",
      metrics: [
        { label: "Architecture", value: "Microservices" },
        { label: "Security", value: "JWT + RBAC" },
        { label: "Client", value: "React SPA" },
      ],
      highlights: [
        "Designed and developed modular REST APIs using Spring Boot handling catalog inventory, membership accounts, and transactional borrowing workflows.",
        "Implemented stateless JWT-based authentication combined with granular role-based authorization (RBAC) via Spring Security.",
        "Successfully migrated legacy monolithic design into independent, loosely-coupled Spring Boot microservices with discrete data boundaries.",
        "Engineered an intuitive frontend dashboard using React, integrating responsive state management with backend RESTful endpoints.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "React",
        "REST APIs",
        "MySQL",
        "Docker",
      ],
      github: "https://github.com/VaibhavPan1/bookbase",
      liveDemo: null,
    },
    {
      id: "evault",
      title: "Blockchain Based eVault",
      subtitle: "Decentralized & Encrypted Document Repository",
      category: "Distributed Systems & Web3",
      featured: true,
      description:
        "A decentralized, cryptographically audited document vault protecting critical records from tampering, unapproved revisions, or unauthorized access.",
      metrics: [
        { label: "Storage", value: "Decentralized IPFS" },
        { label: "Security", value: "Hybrid AES/RSA" },
        { label: "Consensus", value: "Solidity Smart Contract" },
      ],
      highlights: [
        "Architected an immutable document verification repository combining a Django backend, Solidity smart contracts, and decentralized IPFS storage.",
        "Engineered a hybrid AES-256 and RSA asymmetric encryption pipeline ensuring multi-tier confidentiality before payloads reach distributed nodes.",
        "Eliminated document forgery risks via on-chain hash attestation, allowing instant verification of provenance and integrity.",
        "Provided fine-grained access delegation allowing verified institutions and recipients to safely decrypt and examine files.",
      ],
      technologies: [
        "Solidity",
        "Django",
        "Python",
        "IPFS",
        "AES/RSA Encryption",
        "PostgreSQL",
        "Web3",
      ],
      github: "https://github.com/VaibhavPan1/blockchain-evault",
      liveDemo: null,
    },
  ],

  skills: {
    languages: [
      { name: "Java", level: "Advanced", badge: "Primary" },
      { name: "SQL", level: "Advanced", badge: "Primary" },
      { name: "Python", level: "Proficient", badge: null },
      { name: "JavaScript", level: "Proficient", badge: null },
    ],
    frameworks: [
      { name: "Spring Boot", level: "Core Stack" },
      { name: "Spring Security", level: "Core Stack" },
      { name: "Spring MVC", level: "Core Stack" },
      { name: "React", level: "Core Stack" },
      { name: "Django", level: "Proficient" },
      { name: "Node.js", level: "Proficient" },
    ],
    databases: [
      { name: "MySQL", detail: "Relational & indexing" },
      { name: "PostgreSQL", detail: "Complex queries & ACID" },
      { name: "MongoDB", detail: "Document store" },
      { name: "SQL Server", detail: "Enterprise queries" },
    ],
    toolsAndDevops: [
      { name: "Git & GitHub", icon: "git" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "Jira", icon: "jira" },
      { name: "Linux / Bash", icon: "linux" },
    ],
    coreConcepts: [
      "RESTful API Design",
      "Microservices Architecture",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)",
      "Production Root-Cause Debugging",
      "CI/CD & DevOps Basics",
      "SLA Compliance & Incident Triage",
    ],
    aiSkills: [
      "Prompt Engineering",
      "Claude",
      "Codex",
      "Antigravity",
    ],
  },

  education: [
    {
      institution: "United College of Engineering and Research",
      location: "Prayagraj, India",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2021 – 2025",
      score: "CGPA: 8.1",
      badge: "Graduated",
      highlights: [
        "Core Coursework: Operating Systems, Database Management Systems (DBMS), Computer Networks, Object-Oriented Analysis, Software Engineering.",
        "Developed solid foundation in algorithmic complexity, concurrency, systems design, and full-stack software development.",
      ],
    },
    {
      institution: "St. Mary's Convent School",
      location: "Prayagraj, India",
      degree: "Senior Secondary School (Class XII)",
      period: "Graduated",
      score: "85%",
      badge: "Completed",
      highlights: [
        "Strong academic standing in Mathematics, Physics, and Computer Science fundamentals.",
      ],
    },
  ],
};
