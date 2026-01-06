// Comprehensive knowledge base for Swastik Saumya's portfolio chatbot

export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  category: string;
  followUp?: string[];
}

export const portfolioKnowledge: KnowledgeEntry[] = [
  // Personal Information
  {
    keywords: ["who", "swastik", "name", "about", "introduce"],
    response:
      "Hi! I'm Swastik Saumya, a passionate front-end developer and BCA student from Ghaziabad, UP. I specialize in building responsive, user-friendly web applications with modern technologies like React, Vue.js, TypeScript, and Tailwind CSS. I'm deeply interested in AI, robotics, and modern UI/UX design with hands-on experience across multiple projects.",
    category: "personal",
    followUp: [
      "Would you like to know about my education?",
      "Want to see my projects?",
      "Interested in my technical skills?",
    ],
  },

  // Education
  {
    keywords: [
      "education",
      "bca",
      "college",
      "university",
      "degree",
      "study",
      "student",
    ],
    response:
      "I'm currently pursuing Bachelor of Computer Applications (BCA) at IMS Unison University in Ghaziabad, UP, India (2023-2026). I maintain a CGPA of 8.5/10. I completed my 12th grade in Science stream from Central Academy, Bihar with 82%. My coursework includes Data Structures, Algorithms, AI & Machine Learning, Web Development, and Database Management.",
    category: "education",
    followUp: [
      "What subjects am I studying?",
      "Tell me about my academic projects",
      "What are my future learning goals?",
    ],
  },

  {
    keywords: ["subjects", "curriculum", "coursework", "learning"],
    response:
      "My BCA curriculum at IMS Unison University covers: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Development Technologies, Software Engineering, Artificial Intelligence & Machine Learning, Computer Networks, Operating Systems, Python Programming, and Java Programming. I'm also hands-on with React, Vue.js, and modern web technologies.",
    category: "education",
  },

  // Internship
  {
    keywords: ["internship", "webboost", "experience", "work", "job", "intern"],
    response:
      "I completed a 3-month remote internship as a Front-End Developer at WebBoost Solutions by UM (June-August 2023). I worked on building responsive websites, improving UI/UX, and collaborating with a remote team using Git. I delivered 6+ projects and significantly improved my React and JavaScript skills.",
    category: "internship",
    followUp: [
      "What projects did I work on?",
      "What technologies did I use?",
      "What did I learn from the internship?",
    ],
  },

  {
    keywords: ["webboost", "projects", "internship projects", "work projects"],
    response:
      "During my internship, I worked on several projects: 1) E-commerce Landing Page (improved conversion by 25%), 2) Business Portfolio Website with React, and 3) Restaurant Website Redesign (increased mobile engagement by 40%). I used HTML, CSS, JavaScript, React, and responsive design principles.",
    category: "internship",
  },

  // Projects
  {
    keywords: ["projects", "portfolio", "github", "code", "development"],
    response:
      "I've built several exciting projects: 1) E-commerce Furniture Website using HTML/CSS/JS/PHP, 2) Self-Driving Car Simulation using Python & AI, 3) Weather Vue Application with real-time forecasts, 4) Netflix Clone using React, and 5) Social Media Dashboard using React & TypeScript. Each project demonstrates different aspects of my technical skills.",
    category: "projects",
    followUp: [
      "Tell me about the E-commerce Furniture Website",
      "What's the Self-Driving Car project?",
      "Show me the Weather Vue App details",
    ],
  },

  {
    keywords: ["ecommerce", "furniture", "website", "php"],
    response:
      "The E-commerce Furniture Website is a comprehensive online platform for furniture retail. It features responsive design, product galleries with zoom functionality, shopping cart management, user accounts, and admin panel for inventory. Built with HTML5, CSS3, JavaScript, Bootstrap, PHP, and MySQL with secure payment integration.",
    category: "projects",
  },

  {
    keywords: ["self-driving", "car", "simulation", "ai", "computer vision"],
    response:
      "The Self-Driving Car Simulation is an advanced AI project combining computer vision and machine learning. It includes real-time lane detection, traffic sign recognition, obstacle avoidance, and autonomous path planning. Built with Python, OpenCV, TensorFlow, and features a complete simulation environment for testing.",
    category: "projects",
  },

  {
    keywords: ["weather", "vue", "application", "forecast"],
    response:
      "The Weather Vue Application provides comprehensive weather information with real-time updates, geolocation services, 7-day forecasts, and beautiful weather animations. Features include automatic location detection, manual search, interactive maps, and responsive design. Built with Vue.js, JavaScript, and Weather APIs.",
    category: "projects",
  },

  {
    keywords: ["netflix", "clone", "react", "streaming"],
    response:
      "The Netflix Clone replicates the popular streaming platform's core functionality. Features include user authentication, movie browsing with categories, video streaming, search functionality, and responsive design matching Netflix's modern UI. Built with React, JavaScript, CSS3, and integrated with Movie Database APIs.",
    category: "projects",
  },

  {
    keywords: ["social", "media", "dashboard", "analytics"],
    response:
      "The Social Media Dashboard provides comprehensive analytics and insights for social media management. Features include multi-platform integration, interactive charts, real-time engagement metrics, audience demographics, and customizable widgets. Built with React, TypeScript, Chart.js, and Tailwind CSS.",
    category: "projects",
  },

  // Skills & Technologies
  {
    keywords: [
      "skills",
      "technologies",
      "tech stack",
      "programming",
      "languages",
    ],
    response:
      "My technical skills include: Programming Languages - Python (88%), Java (80%), JavaScript (95%), C/C++ (75%), PHP (78%); Frontend - React (90%), Vue.js (88%), TypeScript (85%), HTML/CSS (95%); Database - MySQL (85%), PostgreSQL (80%), MongoDB (75%); Tools - Git/GitHub (90%), VS Code, Docker (70%), AWS (65%).",
    category: "skills",
    followUp: [
      "What's my strongest skill?",
      "What am I currently learning?",
      "Tell me about my AI/ML skills",
    ],
  },

  {
    keywords: ["react", "javascript", "frontend", "vue"],
    response:
      "I'm highly proficient in frontend development! I specialize in React (90%) and Vue.js (88%) with extensive JavaScript (95%) experience. I've built multiple production-level projects including e-commerce platforms, streaming applications, and dashboards. I'm comfortable with component architecture, state management, hooks, and modern frontend patterns.",
    category: "skills",
  },

  {
    keywords: ["ai", "ml", "machine learning", "artificial intelligence"],
    response:
      "I have strong foundation in AI/ML with 75% proficiency in Machine Learning, 70% in Deep Learning, and 72% in Computer Vision. I've worked with TensorFlow, OpenCV, and built projects like the Self-Driving Car Simulation. I'm passionate about applying AI to solve real-world problems and continuously expanding my knowledge in this field.",
    category: "skills",
  },

  // Contact & Social
  {
    keywords: ["contact", "email", "linkedin", "github", "social"],
    response:
      "You can reach me at: Email: swastiksaumya07@gmail.com, GitHub: github.com/swastiksaumya, LinkedIn: linkedin.com/in/swastik-saumya-996878296. I'm located in Ghaziabad, UP, India. I'm always open to discussing new opportunities, collaborations, and exciting projects!",
    category: "contact",
  },

  // Goals & Future
  {
    keywords: ["goals", "future", "plans", "aspirations", "career"],
    response:
      "My future goals include: mastering full-stack development (MERN stack), expanding knowledge in cloud technologies and DevOps, deepening AI/ML expertise, contributing to open-source projects, and becoming a well-rounded developer capable of building scalable applications. I'm excited about emerging technologies and innovative solutions.",
    category: "future",
  },

  // Location & Background
  {
    keywords: ["location", "where", "ghaziabad", "bihar", "india"],
    response:
      "I'm currently based in Ghaziabad, UP, India, where I study at IMS Unison University. I originally completed my schooling in Bihar before moving to UP for my BCA degree. I'm open to remote opportunities and excited about connecting with the global tech community.",
    category: "location",
  },

  // Achievements & Recognition
  {
    keywords: ["achievements", "awards", "recognition", "accomplishments"],
    response:
      "Some of my key achievements include: maintaining 8.5+ CGPA at IMS Unison University, being Computer Science topper in 12th grade, winning School Science Exhibition, completing multiple real-world projects, and successfully building production-level applications. I'm an active participant in university tech events.",
    category: "achievements",
  },

  // Help & Navigation
  {
    keywords: ["help", "what can you do", "commands", "features"],
    response:
      "I can help you learn about Swastik's background, education, projects, skills, and contact information. Try asking me: 'Tell me about his projects', 'What's his education?', 'Show me his skills', 'How to contact him?', 'What are his achievements?', or 'What technologies does he use?'",
    category: "help",
  },

  // Portfolio Features
  {
    keywords: ["website", "portfolio", "features", "dark mode", "animations"],
    response:
      "This portfolio is built with React, TypeScript, Tailwind CSS, and Framer Motion. It features dark/light mode toggle, smooth animations, responsive design, glassmorphism effects, interactive components, and this AI chatbot! It showcases modern web development practices and demonstrates Swastik's technical skills.",
    category: "portfolio",
  },
];

// Intent recognition patterns
export const intentPatterns = {
  greeting: /^(hi|hello|hey|good morning|good afternoon|good evening)/i,
  thanks: /^(thanks|thank you|appreciate)/i,
  goodbye: /^(bye|goodbye|see you|farewell)/i,
  question: /^(what|how|when|where|why|who|can|do|does|is|are)/i,
};

// Response templates
export const responseTemplates = {
  greeting: [
    "Hello! 👋 I'm Swastik's AI assistant. I can tell you all about his background as a front-end developer, BCA student, and his exciting projects in AI and web development. What would you like to know?",
    "Hi there! 🚀 Welcome to Swastik Saumya's portfolio. I'm here to help you learn about his journey from Bihar to IMS Unison University and his passion for modern web technologies. Ask me anything!",
    "Hey! 🌟 I'm the AI assistant for this portfolio. I have comprehensive knowledge about Swastik's education at IMS Unison University, his projects including self-driving car simulation, and his technical skills. How can I help you?",
  ],
  thanks: [
    "You're welcome! 😊 Is there anything else you'd like to know about Swastik's projects, education at IMS Unison University, or his skills in React and AI/ML?",
    "Happy to help! 🙌 Feel free to ask me about his technical skills, specific projects like the Netflix clone, or his future goals.",
    "Glad I could assist! 💫 Want to explore more about his e-commerce furniture website or his achievements in academics?",
  ],
  goodbye: [
    "Goodbye! 👋 Thanks for exploring Swastik's portfolio. Don't forget to check out his GitHub at github.com/swastiksaumya!",
    "See you later! 🌟 Feel free to contact Swastik at swastiksaumya07@gmail.com if you're interested in collaboration.",
    "Farewell! 🚀 Remember, Swastik is always open to new opportunities and exciting projects in web development and AI/ML.",
  ],
  fallback: [
    "I'm not sure about that specific topic. Could you ask about Swastik's education at IMS Unison University, his React/Vue.js projects, AI/ML skills, or contact information?",
    "Hmm, I don't have information on that. Try asking me about his background, technical skills in JavaScript/Python, or specific projects like the Weather Vue App!",
    "I might not have understood that correctly. Ask me about his projects, education in Ghaziabad, technical achievements, or future goals in full-stack development!",
  ],
};

// Smart search function
export function findRelevantResponse(userInput: string): string {
  const input = userInput.toLowerCase();

  // Check for greeting
  if (intentPatterns.greeting.test(input)) {
    return responseTemplates.greeting[
      Math.floor(Math.random() * responseTemplates.greeting.length)
    ];
  }

  // Check for thanks
  if (intentPatterns.thanks.test(input)) {
    return responseTemplates.thanks[
      Math.floor(Math.random() * responseTemplates.thanks.length)
    ];
  }

  // Check for goodbye
  if (intentPatterns.goodbye.test(input)) {
    return responseTemplates.goodbye[
      Math.floor(Math.random() * responseTemplates.goodbye.length)
    ];
  }

  // Search knowledge base
  let bestMatch: KnowledgeEntry | null = null;
  let maxScore = 0;

  portfolioKnowledge.forEach((entry) => {
    let score = 0;
    entry.keywords.forEach((keyword) => {
      if (input.includes(keyword.toLowerCase())) {
        score += keyword.length; // Longer keywords get higher score
      }
    });

    if (score > maxScore) {
      maxScore = score;
      bestMatch = entry;
    }
  });

  if (bestMatch && maxScore > 0) {
    return bestMatch.response;
  }

  // Fallback response
  return responseTemplates.fallback[
    Math.floor(Math.random() * responseTemplates.fallback.length)
  ];
}

// Get follow-up suggestions
export function getFollowUpSuggestions(userInput: string): string[] {
  const input = userInput.toLowerCase();

  for (const entry of portfolioKnowledge) {
    if (
      entry.keywords.some((keyword) => input.includes(keyword.toLowerCase()))
    ) {
      return entry.followUp || [];
    }
  }

  return [
    "Tell me about his projects",
    "What's his education background?",
    "Show me his skills",
    "How can I contact him?",
  ];
}

// Conversation context management
export class ConversationContext {
  private history: Array<{ user: string; bot: string; timestamp: Date }> = [];

  addExchange(userMessage: string, botResponse: string) {
    this.history.push({
      user: userMessage,
      bot: botResponse,
      timestamp: new Date(),
    });

    // Keep only last 10 exchanges
    if (this.history.length > 10) {
      this.history = this.history.slice(-10);
    }
  }

  getHistory() {
    return this.history;
  }

  getLastTopic(): string | null {
    if (this.history.length === 0) return null;

    const lastExchange = this.history[this.history.length - 1];

    // Analyze the last bot response to determine topic
    for (const entry of portfolioKnowledge) {
      if (lastExchange.bot.includes(entry.response.substring(0, 50))) {
        return entry.category;
      }
    }

    return null;
  }

  clear() {
    this.history = [];
  }
}
