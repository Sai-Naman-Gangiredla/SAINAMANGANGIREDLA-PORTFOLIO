export const projects = [
  {
    slug: "bookmarkstack",
    title: "BookmarkStack",
    category: "Real-time System",
    description:
      "A real-time bookmark management system built to solve cross-device inconsistency and information overload through structured tagging and cloud sync.",
    tech: ["Next.js", "Supabase", "Tailwind", "Real-time Sync", "Auth"],

    images: {
      preview: "/projects/bookmarkstack/preview.png",
      gallery: [
        "/projects/bookmarkstack/screen1.png",
        "/projects/bookmarkstack/screen2.png",
      ],
    },

    highlights: [
      "Designed real-time synchronization across devices without duplicate writes or state conflicts",
      "Built structured tagging system enabling scalable organization and fast retrieval",
      "Handled authentication + live updates simultaneously without breaking session state",
      "Optimized UI updates for instant feedback using real-time listeners",
    ],

    story: {
      context:
        "Modern users constantly save links across browsers and devices, but native bookmarking systems lack structure, synchronization, and searchability.",
      problem:
        "Bookmarks quickly become duplicated, scattered, and difficult to retrieve, especially when switching between devices or workflows.",
      approach:
        "I designed a centralized bookmark system using Next.js and Supabase, combining authentication, structured tagging, and real-time syncing to ensure consistency across devices.",
      challenges:
        "Managing real-time updates alongside authentication was complex. Handling session persistence, syncing changes instantly, and avoiding duplicate writes required careful backend design.",
      outcome:
        "The system delivers a seamless cross-device bookmarking experience where users can organize, retrieve, and manage links efficiently without losing context.",
    },

    architecture:
      "Frontend (Next.js) → API Layer → Supabase → Real-time Sync → UI",

    flow: [
      "User saves a bookmark via the UI",
      "Request is processed through API layer",
      "Bookmark stored in Supabase database",
      "Real-time listeners sync updates",
      "UI updates instantly across devices",
    ],

    github: "https://github.com/Sai-Naman-Gangiredla/smart-bookmark-saas",
    live: "https://bookmarkstack.vercel.app/",
  },

  {
    slug: "workflow-automation",
    title: "Workflow Automation System",
    category: "AI Pipeline",
    description:
      "An AI-driven automation system designed to eliminate repetitive manual workflows and improve operational efficiency.",
    tech: ["Python", "Automation", "AI", "Pipelines"],

    images: {
      preview: "/projects/automation-workflow/preview.png",
      gallery: [],
    },

    highlights: [
      "Designed modular pipeline architecture enabling flexible workflow execution",
      "Integrated AI decision layer to dynamically determine execution paths",
      "Built scalable automation logic reusable across different workflows",
      "Reduced manual intervention through structured task orchestration",
    ],

    story: {
      context:
        "Many business and personal workflows still rely heavily on repetitive manual tasks that consume time and introduce human error.",
      problem:
        "Manual workflows are inefficient, inconsistent, and do not scale well as complexity increases.",
      approach:
        "I built a modular automation system where workflows are structured into pipelines, allowing tasks to be executed programmatically with AI-assisted decision-making.",
      challenges:
        "Designing a flexible pipeline architecture that could handle different workflows without breaking required careful abstraction and control flow management.",
      outcome:
        "The system significantly reduces manual effort, improves consistency, and allows workflows to scale without additional human intervention.",
    },

    architecture:
      "User Input → Pipeline Engine → AI Decision Layer → Task Execution → Output",

    flow: [
      "User defines workflow steps",
      "Pipeline processes structured inputs",
      "AI determines execution path",
      "Tasks executed automatically",
      "Results generated and returned",
    ],

    github:
      "https://github.com/Sai-Naman-Gangiredla/VectorShift-Frontend-Assesment",
    live: "#",
  },

  {
    slug: "bone-fracture",
    title: "Bone Fracture Detection",
    category: "Computer Vision",
    description:
      "A deep learning-based system to detect bone fractures from X-ray images using computer vision techniques.",
    tech: ["Python", "TensorFlow", "OpenCV", "CNN"],

    images: {
      preview: "/projects/bone-fracture/preview.png",
      gallery: ["/projects/bone-fracture/screen1.png"],
    },

    highlights: [
      "Built CNN model for medical image classification with feature extraction pipeline",
      "Handled noisy and inconsistent medical data through preprocessing techniques",
      "Improved prediction reliability through model tuning and validation",
      "Designed pipeline from raw input to prediction output",
    ],

    story: {
      context:
        "Medical imaging requires fast and reliable diagnosis, but manual interpretation can be slow and prone to human error.",
      problem:
        "Detecting fractures manually is time-consuming and depends heavily on expertise.",
      approach:
        "I built a convolutional neural network (CNN) model trained on X-ray images to classify fractures automatically.",
      challenges:
        "Handling noisy and inconsistent medical data while improving model accuracy required careful preprocessing and tuning.",
      outcome:
        "The system can assist in faster and more consistent fracture detection, supporting medical workflows.",
    },

    architecture:
      "Image Input → Preprocessing → CNN Model → Prediction → Output",

    flow: [
      "User uploads X-ray image",
      "Image is preprocessed",
      "CNN extracts features",
      "Model predicts fracture presence",
      "Result displayed",
    ],

    github:
      "https://github.com/Sai-Naman-Gangiredla/Bone-fracture-detection-using-ML-and-Deep-Learning-",
    live: "#",
  },

  {
    slug: "product-analyzer",
    title: "Product Analyzer",
    category: "AI Analytics",
    description:
      "An AI-powered system designed to analyze product datasets and generate actionable insights for decision-making.",
    tech: ["Python", "AI", "Data Processing", "Analytics"],

    images: {
      preview: "/projects/product-analyzer/preview.png",
      gallery: [],
    },

    highlights: [
      "Designed data processing pipeline for transforming raw datasets into structured inputs",
      "Applied AI-based analysis to extract meaningful patterns and insights",
      "Handled inconsistent data formats with preprocessing and validation layers",
      "Built system to convert data into decision-ready outputs",
    ],

    story: {
      context:
        "Organizations collect large amounts of product data but struggle to extract meaningful insights.",
      problem:
        "Raw datasets are unstructured and difficult to interpret without advanced analysis.",
      approach:
        "I built a system that processes datasets, applies AI-based analysis, and generates structured insights.",
      challenges:
        "Handling inconsistent data formats and ensuring meaningful output required careful preprocessing and validation.",
      outcome:
        "The system transforms raw data into actionable insights, improving decision-making efficiency.",
    },

    architecture:
      "Dataset → Cleaning → AI Analysis → Insight Generation → Output",

    flow: [
      "Dataset uploaded",
      "Data cleaned and structured",
      "AI analyzes patterns",
      "Insights generated",
      "Results presented",
    ],

    github: "https://github.com/Sai-Naman-Gangiredla/Product-Analyzer-",
    live: "#",
  },

  {
    slug: "brewit",
    title: "BrewIt",
    category: "Interactive UI",
    description:
      "An interactive coffee recipe platform that provides real-time nutritional insights based on user customization.",
    tech: ["React", "JavaScript", "State Management", "UI/UX"],

    images: {
      preview: "/projects/brewit/preview.png",
      gallery: [],
    },

    highlights: [
      "Built real-time nutrition calculation engine driven by user input",
      "Designed responsive UI that updates instantly with state changes",
      "Balanced accuracy and performance in live calculations",
      "Implemented structured state management for dynamic UI behavior",
    ],

    story: {
      context:
        "Coffee enthusiasts often customize recipes, but existing platforms lack real-time feedback on nutritional impact.",
      problem:
        "Users cannot understand how ingredient changes affect nutrition instantly.",
      approach:
        "I built an interactive UI that recalculates nutritional values dynamically as users modify ingredients.",
      challenges:
        "Balancing real-time calculations with UI responsiveness while maintaining accuracy required careful state management.",
      outcome:
        "Users can experiment with recipes while instantly understanding their nutritional impact.",
    },

    architecture: "User Input → Logic Engine → Nutrition Calculator → UI",

    flow: [
      "User selects ingredients",
      "Logic processes inputs",
      "Nutrition calculated dynamically",
      "UI updates in real time",
    ],

    github: "https://github.com/Sai-Naman-Gangiredla/BrewIt",
    live: "https://sai-naman-gangiredla.github.io/BrewIt/",
  },

  {
    slug: "nutriplan",
    title: "NutriPlan",
    category: "Health System",
    description:
      "A personalized nutrition planning system that generates real-time diet recommendations based on user inputs.",
    tech: ["React", "Health Logic", "Real-time Calculations", "UI/UX"],

    images: {
      preview: "/projects/nutriplan/preview.png",
      gallery: [],
    },

    highlights: [
      "Designed dynamic diet generation logic based on user inputs",
      "Implemented real-time calculation system for personalized nutrition",
      "Ensured usability while handling complex health logic",
      "Built structured system for consistent and adaptive outputs",
    ],

    story: {
      context:
        "Maintaining a structured and personalized diet is difficult without proper planning tools.",
      problem:
        "Users struggle to create consistent, personalized nutrition plans.",
      approach:
        "I built a system that dynamically generates diet plans based on user preferences and nutritional requirements.",
      challenges:
        "Ensuring accurate calculations while keeping the interface simple required careful design decisions.",
      outcome:
        "The system helps users maintain consistency and make better nutrition choices.",
    },

    architecture: "User Input → Nutrition Logic → Plan Generator → UI",

    flow: [
      "User enters preferences",
      "System calculates requirements",
      "Plan generated dynamically",
      "Results displayed",
    ],

    github: "https://github.com/Sai-Naman-Gangiredla/NutriPlan",
    live: "#",
  },

  {
    slug: "dayorganizer",
    title: "DayOrganizer App",
    category: "Mobile App",
    description:
      "An Android application designed to help users organize daily tasks efficiently.",
    tech: ["Java", "Android", "SQLite", "Mobile UI"],

    images: {
      preview: "/projects/dayorganizer/preview.png",
      gallery: [],
    },

    highlights: [
      "Designed lightweight task management system optimized for mobile usability",
      "Implemented persistent storage using SQLite for reliability",
      "Focused on minimal UI for quick interaction and clarity",
      "Handled task updates and state consistency efficiently",
    ],

    story: {
      context:
        "Managing daily tasks without structure often leads to reduced productivity.",
      problem:
        "Users lack a simple and effective way to organize daily activities.",
      approach:
        "I built a lightweight Android app focused on simplicity and usability for task management.",
      challenges:
        "Designing a clean UI while handling persistent storage required multiple iterations.",
      outcome: "The app improves daily organization and productivity.",
    },

    architecture: "User Input → Local Storage → UI Update",

    flow: [
      "User adds tasks",
      "Tasks stored locally",
      "Tasks organized and displayed",
      "UI updates dynamically",
    ],

    github: "https://github.com/Sai-Naman-Gangiredla/DayOrganizer-App",
    live: "#",
  },
];
