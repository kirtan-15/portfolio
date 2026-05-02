export const projects = [
  {
    id: 1,
    title: 'TOA_Pro: AI-Driven Academic Timetable Optimizer',
    tagline: 'Solving NP-hard scheduling problems with Genetic Algorithms & Gemini AI',
    role: 'Lead Developer & Architect',
    projectType: 'Industrial-Grade AI Scheduling System',
    status: 'Completed',
    description: 'TOA_Pro (Timetable Optimization Assistant) is a high-performance Android application designed to automate the complex process of institutional scheduling. It solves the NP-hard University Course Timetabling Problem (UCTP) using a hybrid approach of Genetic Algorithms, Hill Climbing heuristics, and Gemini AI to generate conflict-free, optimized timetables.',
    achievements: [
      {
        title: '1. Hybrid Algorithmic Core',
        desc: 'Implemented a sophisticated optimization engine combining Genetic Algorithms for initial generation and Hill Climbing for iterative refinement, ensuring 100% adherence to "Hard Constraints" while optimizing for student "Soft Constraints".'
      },
      {
        title: '2. AI-Powered Conflict Debugger',
        desc: 'Integrated Gemini 1.5 Pro to provide diagnostic analysis of constraint-locked gaps, offering human-readable explanations for scheduling bottlenecks that traditional solvers cannot resolve.'
      },
      {
        title: '3. Real-Time "Fitness Score" Optimization',
        desc: 'Engineered a smart suggestion system that ranks potential moves (Priority 1-3) based on their impact on the overall schedule quality, providing instant visual feedback via a background validation engine.'
      }
    ],
    modules: [
      'Autonomous Generation: "One-click" solution for full-week conflict-free scheduling.',
      'Advanced Analytics: Faculty workload heatmaps and room utilization reporting.',
      'Multi-Tiered Access: Specialized dashboards for Admins, Coordinators, Faculty, and Students.',
      'Reporting Engine: Custom PDF generation for high-quality institutional exports.'
    ],
    category: 'mobile',
    tech: ['Kotlin', 'Android SDK', 'Gemini AI', 'Firebase', 'Genetic Algorithms', 'Coroutines', 'Material Design 3'],
    image: 'APP',
    github: null,
    live: null
  },
  {
    id: 2,
    title: 'SmartCMS: Intelligent Enterprise Resource & Workforce Manager',
    tagline: 'Streamlining corporate operations with automated workflows and GPS tracking',
    role: 'Full-Stack Developer',
    projectType: 'Comprehensive Corporate Management System',
    status: 'Completed',
    description: 'SmartCMS is a robust, full-stack Corporate Management System designed to centralize and automate internal corporate operations. Moving beyond basic CRUD applications, SmartCMS tackles complex business workflows such as geolocation-based attendance, multi-tiered approval processes, and intelligent escalation systems.',
    achievements: [
      {
        title: '1. Intelligent Attendance Escalation Engine',
        desc: 'Built a smart routing system that prevents workflow bottlenecks. If an employee clocks in and their direct reporting manager is marked as "on leave" or "absent", the system automatically re-routes the approval request to an available alternate manager.'
      },
      {
        title: '2. Geofenced Attendance Workflow',
        desc: 'Developed a highly secure, location-aware attendance system with GPS validation against office boundaries and Google Maps integration for real-time status tracking.'
      },
      {
        title: '3. Granular RBAC System',
        desc: 'Engineered a secure ecosystem tailored to five distinct user roles (Admin, HR, Dept Manager, Employee, Finance) with custom 11-digit numeric IDs and streamlined onboarding flows.'
      }
    ],
    modules: [
      'Employee Lifecycle Management: Complete HR dashboard to manage profiles and roles.',
      'Task & Project Delegation: Managers can assign tasks and track team performance.',
      'Payroll & Finance: Attendance-based payroll calculation and expense reporting.',
      'Communication Hub: Integrated notifications for approvals and system alerts.'
    ],
    category: 'fullstack',
    tech: ['Angular (v19+)', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    image: 'ERP',
    github: null,
    live: null
  },
  {
    id: 3,
    title: 'Museek: Unified Music Streaming Platform',
    tagline: 'High-performance audio streaming with multi-source API integration',
    role: 'Full-Stack Developer',
    projectType: 'High-Performance Media Streaming App',
    status: 'Completed',
    description: 'Museek is a high-performance, full-stack music streaming platform designed to provide a seamless audio experience. It integrates multiple music sources, including Spotify, Jamendo, and YouTube, alongside a robust custom music management system.',
    achievements: [
      {
        title: '1. Custom Audio Streaming Engine',
        desc: 'Implemented a partial content streaming system using HTTP Range headers, ensuring instant playback and reduced bandwidth by streaming audio chunks.'
      },
      {
        title: '2. Multi-Source API Orchestration',
        desc: 'Developed a middleware mapping layer that standardizes metadata from Spotify, Jamendo, and YouTube APIs into a single unified format.'
      },
      {
        title: '3. Data Visualization & Analytics',
        desc: 'Built an Admin Dashboard that processes thousands of records using Mongoose aggregation pipelines, rendering real-time playback trends via Chart.js.'
      }
    ],
    modules: [
      'Multi-Source Discovery: Integrated Spotify & Jamendo catalogs',
      'Dynamic Playback: Custom audio player with queue management',
      'Music Management: Secure MP3/WAV uploads using Multer'
    ],
    category: 'fullstack',
    tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    image: 'MUSIC',
    github: null,
    live: null
  },
  {
    id: 4,
    title: 'Student Backlog Tracking System (BLTS)',
    tagline: 'Browser-based data analytics for academic progress tracking',
    role: 'Lead Developer',
    projectType: 'Serverless Data Analytics Platform',
    status: 'Completed',
    description: 'A sophisticated, browser-based data visualization platform designed for educational institutions. BLTS solves the challenge of tracking student progress across multiple semesters using fragmented Excel/CSV data exports.',
    achievements: [
      {
        title: '1. Intelligent Data Pipeline',
        desc: 'Engineered a complex data-merging pipeline that normalizes fragmented Excel/CSV sheets using heuristic role detection and fuzzy matching algorithms.'
      },
      {
        title: '2. Interactive Analytical Dashboard',
        desc: 'Built a real-time KPI dashboard utilizing Recharts for dynamic visualizations of student status distributions (Clear/Backlog/Detained).'
      },
      {
        title: '3. Privacy-First Architecture',
        desc: 'Designed a zero-server architecture where all data processing occurs locally in the browser, ensuring 100% data privacy for student records.'
      }
    ],
    modules: [
      'Normalization Engine: Heuristic schema mapping for university data',
      'Subject History Tracker: Chronological view of every exam attempt',
      'Provisional Marksheets: Automated, A4-ready HTML marksheet generation'
    ],
    category: 'frontend',
    tech: ['React 18', 'Tailwind CSS', 'SheetJS (xlsx)', 'Recharts', 'Vite'],
    image: 'DATA',
    github: null,
    live: null
  },
  {
    id: 5,
    title: 'SecurityGuard: Privacy-First Toolkit',
    tagline: 'Cybersecurity utilities with k-Anonymity breach checking',
    role: 'Backend Developer',
    projectType: 'Cybersecurity Utility',
    status: 'Completed',
    description: 'A comprehensive security toolkit focused on credential hardening and data privacy. It empowers users to analyze password strength and check for historical breaches without exposing sensitive data.',
    achievements: [
      {
        title: '1. k-Anonymity Breach Checking',
        desc: 'Implemented the k-Anonymity model for breach verification, ensuring that only the first 5 characters of a hashed password are sent to the API.'
      },
      {
        title: '2. Advanced Password Analytics',
        desc: 'Developed a custom entropy-based scoring algorithm that evaluates password strength against dictionary attacks and common patterns.'
      }
    ],
    modules: [
      'Breach Checker: Integrated HaveIBeenPwned API',
      'Secure Vault: Local-only encrypted storage concepts',
      'Strength Analyzer: Real-time entropy feedback'
    ],
    category: 'backend',
    tech: ['React', 'Python', 'FastAPI', 'Cryptography', 'REST APIs'],
    image: 'SEC',
    github: null,
    live: null
  }
];
