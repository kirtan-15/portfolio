export const projects = [
  {
    id: 1,
    title: 'Schedulix AI: Automated Academic Timetable Generation & Academic Operations Platform',
    tagline: 'A multi-role Android app generating conflict-free, gap-free academic timetables',
    role: 'Lead Developer & Architect',
    projectType: 'Android Timetable Management System',
    status: 'Completed',
    description: 'Schedulix AI is an Android timetable management system built for engineering colleges, where building a weekly schedule by hand means juggling faculty availability, room capacity, visiting-faculty windows, daily load limits, and — the part everyone actually notices — avoiding a student\'s day having a lecture, then two free slots, then another lecture. Most of the effort went into the scheduling engine: ~4,000 lines of purpose-written Kotlin (no scheduling library) using a block-based construction strategy that makes gaps structurally impossible, backed by a constraint graph for resolving the conflicts that do appear during editing. On top of that sits a three-role app (Admin / Faculty / Student) with resource management, timetable publishing and edit history, attendance, reports with PDF/CSV export, and an optional AI assist that ranks already-validated schedule adjustments. The decision I\'d point at first: the AI never generates a timetable — all candidate moves are computed and validated by deterministic Kotlin first; the model is only asked to rank moves that are already legal, and if exactly one legal move exists, the API isn\'t called at all.',
    problemSolution: [
      { problem: 'Manual timetables take days and errors surface only after students see them', solution: 'Generates the full week programmatically, then runs zero-lecture-day and subject-completeness validation before returning a result — a bad schedule returns an error, not a broken schedule' },
      { problem: 'Gaps (free slots between lectures) are the #1 complaint', solution: 'Gap creation is prevented at generation time by construction (slots are packed sequentially), not cleaned up afterwards' },
      { problem: 'Faculty double-booking and room clashes', solution: 'Central move-validation engine checks faculty, room, and division occupancy before any assignment is accepted' },
      { problem: 'Visiting faculty only available in certain windows', solution: 'Visiting-faculty time windows are first-class constraints in the solver, not a note in someone\'s notebook' },
      { problem: 'Rooms/labs unavailable on specific days', solution: 'Time-bound resource restrictions stored per resource and enforced by the solver' },
      { problem: 'Faculty overloaded on some days, idle on others', solution: 'Per-faculty daily load limits (default 4) and max 3 consecutive lectures; per-division daily floor/ceiling of 2–6 lectures' },
      { problem: 'Once a timetable is published, edits are undocumented and nothing can be audited', solution: 'Publishing and editing are separate flows with a before/after audit trail per change (create / update / swap room / swap faculty / move slot)' },
      { problem: 'Admins, faculty, and students all need different views of the same data', solution: 'Three role-based surfaces over one Firebase backend, with role determined at login and enforced in Realtime Database security rules' },
      { problem: 'Workload and syllabus data sit in spreadsheets', solution: 'In-app reports with PDF and CSV export, plus workload analytics and a syllabus-hours tracker' }
    ],
    achievements: [
      {
        title: '1. Scheduling Engine Written From Scratch (~4,000 Lines of Kotlin)',
        desc: 'No constraint-solving library, no OR-tools, no genetic algorithm. A three-phase block solver (BlockBasedSolver, ~2,400 lines) works day-first: distribute each division\'s weekly requirements across 6 days → pack each day\'s bucket into contiguous slots → insert breaks at the midpoint of 4+ lecture blocks. Because phase two fills slots sequentially, gaps cannot occur. Retries up to 3 times with different strategies before reporting constraint failure.'
      },
      {
        title: '2. Two Independent Solver Strategies',
        desc: 'FacultyFirstSolver (~1,220 lines) takes the opposite approach — build a global faculty-per-day plan first, then assign slots — using MRV (minimum remaining values) ordering with forward checking. Having two strategies means a case that defeats one can still be solved by the other, and it gave a way to cross-check results.'
      },
      {
        title: '3. Conflict Graph for Schedule Repair',
        desc: 'ConflictGraph (~545 lines) models the timetable as a graph — lectures as nodes, constraints as edges — tracking faculty, room, division, visiting-window, and room-restriction conflicts. It supports chain moves up to 5 deep, so resolving one clash can cascade safely through a sequence of dependent relocations instead of failing.'
      },
      {
        title: '4. AI Used as a Ranker, Not a Generator',
        desc: 'The Gemini integration (AISolverBridge, AIGapOptimizer, GapMoveGenerator) never asks a model to invent a schedule. It generates candidate moves in Kotlin, validates each against every hard constraint, auto-applies the move if there\'s exactly one legal option, and only calls the LLM when two or more legal options exist — asking it to rank them by break placement, practical grouping, and balance. Rate-limit handling with backoff retries, provider abstraction (Gemini or any OpenAI-compatible endpoint), and defensive JSON extraction. The AI is optional — the app works fully without an API key.'
      },
      {
        title: '5. Quality Instrumentation Built Into the Solver',
        desc: 'Rather than eyeballing output, the solver ships with TimetableQualityTracker, SolverVerificationDashboard, and TimetableAnalysisLogger (~1,500 lines combined) that score the generated timetable on gap count, per-day load variance, subject distribution, and constraint violations — so a regression in the algorithm shows up as a number.'
      },
      {
        title: '6. Publish / Edit Separation With Full Audit Trail',
        desc: 'Generating and publishing are distinct operations. After publishing, edits go through EditPublishedTimetableActivity → TimetableEditManager → EditHistoryTracker, which records actor, timestamp, action type, and before/after state for every entry touched. Combined with SemesterSnapshotGenerator, published versions remain reconstructable.'
      },
      {
        title: '7. Role Enforcement at the Data Layer, Not Just the UI',
        desc: 'Logins are resolved to Admin / Faculty / Student, and Realtime Database rules restrict writes per-node — e.g. semester writes require the authenticated UID to exist under admins, and planLabel is validated against a closed set of values. Navigation and session handling sit on top of that, not in place of it.'
      },
      {
        title: '8. Report Generation With Real File Output',
        desc: 'Report layer spans 47 files, including WeeklyReportGenerator, AdvancedReportGenerator, and multiple iText-based PDF generators producing formatted A4 tables, plus CSV export via OpenCSV. Charts via MPAndroidChart; a HealthScoreCalculator and ReportsV2InsightsEngine derive workload and coverage signals from raw timetable data.'
      },
      {
        title: '9. Algorithm-Focused Test Suite',
        desc: '24 unit test files, concentrated on the parts where bugs are expensive: break allocation, gap elimination, resource-availability validation, faculty priority rules, and chromosome/break-placement scenarios — rather than scattering shallow tests across UI.'
      }
    ],
    modules: [
      'Scheduling Engine: Generation, validation, gap elimination, conflict resolution, quality scoring — 40 files.',
      'AI Optimizer: Prompt building, candidate-move ranking, provider dispatch, suggestion UI.',
      'Timetable Lifecycle: Preview, publish, edit published, swap lectures, export, edit history, snapshots — 27 files.',
      'Resource Management: Faculty, subjects, classrooms, divisions, departments, semesters, time slots.',
      'Dynamic Resource Availability: Time-bound restrictions on faculty/rooms; visiting-faculty windows; priority rules.',
      'Reports & Analytics: Weekly/faculty/division/semester reports, workload analysis, syllabus tracking, PDF & CSV export — 47 files.',
      'Attendance: Faculty marks attendance against timetable lectures; students view their own history.',
      'Access & Roles: Firebase Auth login, student enrollment lookup, per-role session, role-based navigation.',
      'Data Layer: 34 Room entities + DAOs + repositories bridging Room and Firebase — 49 files.',
      'Communication: Admin/faculty announcements, leave requests and approval history.'
    ],
    category: 'mobile',
    tech: ['Kotlin', 'Android SDK', 'Firebase', 'Room', 'Coroutines', 'MVVM', 'Gemini AI', 'iText PDF', 'OpenCSV', 'MPAndroidChart'],
    image: 'APP',
    screenshots: [
      { src: '/images/schedulix/admin-dashboard.jpg', caption: 'Admin Dashboard — live stats and core modules' },
      { src: '/images/schedulix/timetable-editor.jpg', caption: 'Master Timetable Editor with AI Optimize' },
      { src: '/images/schedulix/reports-workload.jpg', caption: 'Advanced Reports — faculty workload balance' },
      { src: '/images/schedulix/faculty-dashboard.jpg', caption: 'Faculty Dashboard — workload status & control deck' },
      { src: '/images/schedulix/student-dashboard.jpg', caption: 'Student Dashboard — today\'s timetable & attendance' }
    ],
    github: null,
    live: null
  },
  {
    id: 2,
    title: 'SCMS: Smart Corporate Management System',
    tagline: 'Employees, attendance, payroll, and projects in one role-based MEAN-stack platform',
    role: 'Full-Stack Developer',
    projectType: 'Full-Stack Corporate Management System',
    status: 'Completed',
    description: 'SCMS is a full-stack Corporate Management System that brings employee records, attendance, leave approvals, payroll, and project/task tracking into a single role-based web application. It replaces the scattered spreadsheets and manual paperwork typically used to run day-to-day HR and operations in a small-to-medium company. In such organizations, attendance is tracked manually, leave requests move over email or chat, payroll is calculated in spreadsheets, and task ownership is unclear — leading to data inconsistencies, approval delays, human errors in salary calculation, and no single source of truth for employee information. SCMS addresses this with a centralized platform where admins/HR onboard employees with structured records, employees check in/out with GPS-verified attendance and apply for leaves online, managers approve through a defined workflow with audit trails, payroll is computed automatically from configurable salary components, and projects, tasks, time logs, and workload views stay in the same system.',
    achievements: [
      {
        title: '1. Geofenced Attendance Workflow',
        desc: 'Check-in is rejected outside the configured office radius, with the actual distance computed and returned to the user (Haversine distance vs. office radius). The nearest of multiple office locations is auto-selected, and late/half-day detection runs off shift start plus grace period, with a manual-absent cron job backing it up.'
      },
      {
        title: '2. Tiered Approval Workflow',
        desc: 'Pending check-ins route to the reporting manager (with escalation when unavailable), supporting approve / decline / mark-late outcomes plus manager notes. Employees can request attendance corrections, managers/HR review them, admin holds a final override, and every action is stored in an audit log.'
      },
      {
        title: '3. Dependency-Aware Payroll Engine',
        desc: 'Salary components can reference other components (e.g., "HRA = 40% of Basic"). The engine topologically sorts them and resolves values, then adjusts for attendance and overtime rules — driving attendance-aware payroll runs, payslip generation, and approval.'
      },
      {
        title: '4. Policy-Driven Leave Management',
        desc: 'Leave applications with file attachments (Multer), policy-driven balance tracking, manager approval workflow, team calendar, balance history, and year-end leave processing — balance carry-forward/expiry executed as a controlled preview + execute step instead of ad-hoc edits.'
      },
      {
        title: '5. Automated Jobs',
        desc: 'A timezone-aware node-cron job marks absent employees daily so attendance data doesn\'t depend on manual entry, with escalation logs for missed check-ins.'
      },
      {
        title: '6. Test Coverage on Critical Paths',
        desc: 'Jest unit tests plus property-based tests (fast-check) on the project and task controllers — focused where business-logic bugs are most expensive.'
      },
      {
        title: '7. Responsive, Dark-Theme UI',
        desc: 'Angular 19 signals-based SPA with Tailwind CSS v4, role-guarded routes, and status badges/modals for approval actions, with separate role-based dashboards and email notifications.'
      }
    ],
    modules: [
      'Authentication & Access Control: JWT-based auth, role-based routing (Admin / HR / Manager / Employee), 6-digit email OTP verification (Nodemailer) with expiry.',
      'Employee & Organization Management: Onboarding with meaningful 11-digit IDs; department, designation, HR, manager, and office-location CRUD.',
      'Attendance: GPS geofenced check-in/check-out, late/half-day detection via shift start + grace period, manual-absent cron job.',
      'Attendance Approvals: Manager/HR approve, decline, or mark-late pending check-ins; correction requests with review flow; admin override; audit log and escalation records.',
      'Leave Management: Applications with attachments, policy-driven balance tracking, approval workflow, team calendar, balance history, year-end processing.',
      'Payroll: Configurable salary components with dependency resolution, salary templates, revisions, attendance-aware runs, payslip generation and approval.',
      'Projects & Tasks: Project creation with member assignment, tasks with subtasks and comments, time logging, per-employee timesheets, workload and budget reports, project analytics.',
      'Dashboards & Notifications: Separate role-based dashboards, email notifications, escalation logs for missed check-ins.'
    ],
    category: 'fullstack',
    tech: ['Angular 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS v4', 'Nodemailer', 'node-cron', 'Jest'],
    image: 'ERP',
    screenshots: [
      { src: '/images/scms/login.png', caption: 'Secure JWT login with role detection' },
      { src: '/images/scms/employee-dashboard.png', caption: 'Employee dashboard — clock-in, leave balance, payslips' },
      { src: '/images/scms/manage-hr.png', caption: 'Admin — Manage HR with granular permissions' },
      { src: '/images/scms/leave-year-end.png', caption: 'Year-end leave processing with preview & execute' },
      { src: '/images/scms/projects-analytics.png', caption: 'Project analytics and team utilization' }
    ],
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
  }
];
