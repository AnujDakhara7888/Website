const PROJECTS_DATA = [
  {
    title: "ImageMind: Advanced Image Indexing and Retrieval System",
    description:
      "A high-performance AI-powered image indexing and retrieval system using deep learning techniques.",
    about:
      "ImageMind is an advanced image indexing and retrieval system built using Python, Flask, PyTorch, and FAISS. It features a custom MobileNetV3-based neural network, significantly enhancing feature extraction efficiency. The system enables large-scale image dataset processing with optimized performance through a RESTful API, multi-threading, and state management. The project integrates attention mechanisms to improve image search accuracy and retrieval speed.",
    link: "https://github.com/AnujDakhara7888",
    imageUrl: "/img/ImageMind.png",
    github: "https://github.com/AnujDakhara7888",
    type: ["project", "AI", "computer-vision"],
    technologies: [
      "Python",
      "Flask",
      "PyTorch",
      "FAISS",
      "MobileNetV3",
      "REST API",
      "Computer Vision",
    ],
  },
  {
    title: "NEO Tracker",
    description:
      "A real-time application for retrieving Near Earth Object (NEO) data from NASA’s API.",
    about:
      "NEO Tracker is an interactive web application designed to fetch and analyze real-time Near Earth Object (NEO) data from NASA’s API. The project features advanced data structures and BigData’s JSON parsing techniques for efficient analysis. Users can visualize live NEO data with an interactive UI, built using D3.js for intuitive data representation. Performance optimizations include multi-threading and caching mechanisms in Java to ensure smooth data retrieval and visualization.",
    link: "https://github.com/AnujDakhara7888",
    imageUrl: "/img/Neo.png",
    github: "https://github.com/AnujDakhara7888",
    type: ["project", "data-analysis", "space-tech"],
    technologies: [
      "Java",
      "BigData",
      "D3.js",
      "JSON Parsing",
      "Multi-threading",
      "Caching",
    ],
  },
  {
    title: "KnowledgeNest: A Language Learning App",
    description:
      "An interactive web-based language learning platform for enhanced user engagement.",
    about:
      "KnowledgeNest is a language learning app designed with a responsive and user-friendly interface. It enables seamless course sales while ensuring an immersive learning experience. Built using HTML, JavaScript, and CSS, the platform enhances accessibility across devices, ensuring a smooth and engaging learning journey.",
    link: "https://github.com/AnujDakhara7888",
    imageUrl: "/img/KnwoledgeNest.png",
    github: "https://github.com/AnujDakhara7888",
    type: ["project", "education-tech", "web-development"],
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    title: "Eye-Controlled Mouse",
    description:
      "A Python-based project enabling hands-free mouse control using eye movements.",
    about:
      "Eye-Controlled Mouse is an accessibility-focused project that allows users to control their computer's cursor using only their eyes. By leveraging OpenCV and MediaPipe for real-time face tracking, this application enables smooth cursor movement and click actions through blinking or winking, enhancing accessibility and human-computer interaction.",
    link: "https://github.com/AnujDakhara7888",
    imageUrl: "/img/EyeMask.png",
    github: "https://github.com/AnujDakhara7888",
    type: ["project", "AI", "computer-vision", "accessibility"],
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "PyAutoGUI",
      "NumPy",
      "Computer Vision",
    ],
  },
  {
    title: "Fake Stack Overflow",
    description: "A web-based Q&A platform inspired by Stack Overflow.",
    about:
      "Fake Stack Overflow is a fully functional Q&A platform that replicates the core functionalities of Stack Overflow. It features user authentication, question management, voting, and commenting systems. The application is built with React for the frontend, Node.js and Express for the backend, and MongoDB as the database. It includes secure password storage using bcrypt and a responsive, user-friendly interface.",
    link: "https://github.com/AnujDakhara7888", // Replace with your live demo or GitHub repo link
    imageUrl: "/img/Stack.png", // Replace with your project's image or screenshot
    github: "https://github.com/AnujDakhara7888", // Replace with your GitHub repo link
    type: ["project", "full-stack", "open-source"],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Bcrypt",
      "CSS",
    ],
  },
  {
    title: "HealthByte",
    description:
      "Transforming patient mobile health app data pre- and post-operation into anonymized databases for statistical analysis.",
    about:
      "HealthByte is a mobile and web-based application designed to simplify the collection and analysis of health data from patients using Apple's Health app. It streamlines pre- and post-operative monitoring for doctors by securely transmitting anonymized patient data for statistical analysis. The project includes backend systems for data processing, a user-friendly interface, and Excel/Xcode integration.",
    link: "https://github.com/AnujDakhara7888/XCodeBackEnd-main", // Replace with your GitHub repo or live demo link
    imageUrl: "/img/Xcode.png", // Ensure the image is placed in `public/img/`
    github: "https://github.com/AnujDakhara7888/XCodeBackEnd-main", // Replace with your GitHub repo link
    type: ["project", "health-tech", "data-analysis"],
    technologies: [
      "Xcode",
      "Excel",
      "Apple HealthKit",
      "React Native",
      "Node.js",
      "Microsoft Excel",
      "Python",
    ],
  },
  {
    title: "Premier League Player Data Dashboard",
    description:
      "An interactive dashboard for analyzing Premier League player data using advanced visualization techniques.",
    about:
      "This project involved building an interactive dashboard to explore and analyze Premier League player data. It features dynamic visualizations such as PCA Biplots, Parallel Coordinates, Chord Diagrams, and histograms. The dashboard enhances data exploration through interactive features that allow users to highlight correlated points, bars, and lines. Complex datasets were processed and visualized using Python and D3.js, delivering actionable insights.",
    link: "https://github.com/AnujDakhara7888/D3.js", // Replace with your GitHub repo or live demo link
    imageUrl: "/img/Premier.png", // Ensure the image is placed in `public/img/`
    github: "https://github.com/AnujDakhara7888/D3.js", // Replace with your GitHub repo link
    type: ["project", "data-visualization", "sports-analytics"],
    technologies: ["D3.js", "Python", "Pandas", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "TextSense: Semantic Text Analysis and Named Entity Recognition",
    description:
      "An advanced NLP project leveraging Word2Vec and logistic regression for semantic similarity and entity recognition.",
    about:
      "TextSense is an NLP-powered application designed to analyze semantic relationships in text and identify named entities. It uses Word2Vec for semantic similarity, logistic regression for word analogy tasks, and fine-tuned sentence embeddings to enhance the accuracy of semantic textual similarity (STS). The project also implements named entity recognition (NER) using spaCy and NLTK to classify entities such as persons and locations. Real-world text tasks were used to evaluate and refine model performance.",
    link: "https://github.com/AnujDakhara7888", // Replace with your GitHub repo or live demo link
    imageUrl: "/img/NLP.png", // Ensure the image is placed in `public/img/`
    github: "https://github.com/AnujDakhara7888", // Replace with your GitHub repo link
    type: ["project", "machine-learning", "NLP"],
    technologies: [
      "Word2Vec",
      "spaCy",
      "NLTK",
      "Logistic Regression",
      "Python",
      "Pandas",
      "Scikit-learn",
    ],
  },
];

export default PROJECTS_DATA;
