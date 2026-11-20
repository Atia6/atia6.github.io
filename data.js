// ===============================================================
// EDIT THIS FILE ONLY — All personal website content lives here.
// ===============================================================
// Change values in quotation marks. For new items, copy an existing
// object within the relevant array, keeping commas and brackets.
// Leave missing links as empty strings ("") — they will be hidden.
// Add a photo at assets/profile.jpg and set photoFile accordingly.
// Optional: add a redacted public CV PDF at assets/cv.pdf, then set cvFile.
// Only upload a CV PDF if you want all of its contents public.
// Do not change the first line: window.PORTFOLIO_DATA = ...

window.PORTFOLIO_DATA = {
  "profile": {
    "name": "Atia Shahnaz Ipa",
    "initials": "ASI",
    "role": "Lecturer & AI Researcher",
    "affiliation": "Department of Mechatronics Engineering, Khulna University of Engineering & Technology (KUET)",
    "location": "Khulna, Bangladesh",
    "tagline": "Building reliable, knowledge-grounded AI across language and vision.",
    "bio": "I am a Lecturer in Mechatronics Engineering at Khulna University of Engineering & Technology. My research explores large language models, retrieval-augmented generation, multimodal learning, and vision-language systems, with applications in low-resource languages and healthcare. I am particularly interested in making AI responses more grounded, useful, and accessible.",
    "researchInterests": [
      "Multimodal AI",
      "Retrieval-Augmented Generation",
      "Vision-Language Models",
      "Natural Language Processing",
      "Knowledge-Grounded Reasoning",
      "Human-Centered AI"
    ],
    "email": "atia@mte.kuet.ac.bd",
    "github": "https://github.com/Atia6",
    "googleScholar": "https://scholar.google.com/citations?user=8v57ViYAAAAJ&hl=en",
    "linkedin": "https://www.linkedin.com/in/atia-shahnaz-ipa/",
    "orcid": "",
    "universityProfile": "https://kuet.ac.bd/mte/ipa",
    "cvFile": "",
    "photoFile": ""
  },
  "site": {
    "browserTitle": "Research & Teaching",
    "accentLabel": "Research · Teaching · Engineering",
    "footerNote": "Research · Teaching · AI"
  },
  "education": [
    {
      "degree": "Master of Science in Mechatronics Engineering",
      "school": "Khulna University of Engineering & Technology (KUET)",
      "place": "Khulna-9203, Bangladesh",
      "date": "November 2026",
      "details": [
        "CGPA: 3.75 / 4.00"
      ],
      "courses": [
        "Advanced Natural Language Processing",
        "Computer Vision",
        "Data Science and Big Data Analysis"
      ]
    },
    {
      "degree": "Bachelor of Science in Mechatronics Engineering",
      "school": "Khulna University of Engineering & Technology (KUET)",
      "place": "Khulna-9203, Bangladesh",
      "date": "March 2024",
      "details": [
        "CGPA: 3.89 / 4.00",
        "Class Rank: 1st"
      ],
      "courses": [
        "Machine Learning",
        "Software Development",
        "Computer Programming",
        "Human Robot Interaction",
        "Numeric Analysis and Statistics",
        "Calculus and Geometry"
      ]
    }
  ],
  "experience": [
    {
      "role": "Lecturer, Department of Mechatronics Engineering",
      "organization": "Khulna University of Engineering & Technology (KUET)",
      "place": "Khulna-9203",
      "date": "December 2024 – Present",
      "points": [
        "Delivered theoretical lectures and practical sessions in Data Structures and Algorithms, Machine Learning, Human–Robot Interface, and Computer Programming.",
        "Developed course materials, prepared examinations, graded assignments, and assessed student performance.",
        "Mentored students in extracurricular and out-of-class projects, fostering their technical and personal growth.",
        "Contributed to organizing the ICMIEE 2025 conference at KUET."
      ]
    },
    {
      "role": "Part-time Teacher, Department of Mechatronics Engineering",
      "organization": "Khulna University of Engineering & Technology (KUET)",
      "place": "Khulna-9203",
      "date": "October 2024 – December 2024",
      "points": [
        "Delivered lectures and supervised sessional classes on real-world engineering applications.",
        "Assisted in curriculum improvements and facilitated hands-on learning experiences for students."
      ]
    },
    {
      "role": "Part-time AI Researcher",
      "organization": "EmpyrazeIT",
      "place": "Remote",
      "date": "November 2024 – January 2025",
      "points": [
        "Developed AI-driven solutions for the skincare industry using large language models (LLMs), retrieval-augmented generation (RAG), and image processing.",
        "Conducted research and development to improve personalized skincare recommendations."
      ]
    }
  ],
  "research": [
    {
      "kind": "Master’s thesis",
      "title": "KDermaQA: An Intelligent Vision-Language Framework for Knowledge-Based Dermatological Question Answering",
      "date": "",
      "topics": [
        "Multimodal AI",
        "GraphRAG",
        "Healthcare AI"
      ],
      "points": [
        "Architected a multimodal dermatological QA pipeline coupling joint image-text transformer inference with conditional GraphRAG retrieval.",
        "Integrated structured clinical knowledge with safety-constrained response generation for non-pharmacological patient guidance.",
        "Conducted quantitative subsystem evaluation and multi-rater assessment of response relevance, faithfulness, safety, and clinical correctness."
      ],
      "url": ""
    },
    {
      "kind": "Undergraduate thesis",
      "title": "Sentiment Analysis on Product Reviews: A Comprehensive Exploration of the Language Landscape Considering Bangladeshi Individuals",
      "date": "",
      "topics": [
        "LLMs",
        "Code-switching",
        "Sentiment Analysis"
      ],
      "points": [
        "Curated a multilingual corpus spanning monolingual, transliterated, and code-switched reviews.",
        "Integrated language identification and preprocessing with LLM-based sentiment inference.",
        "Benchmarked four open-source LLMs across linguistic categories."
      ],
      "url": ""
    }
  ],
  "publications": [
    {
      "type": "Journal Article",
      "title": "BdSentiLLM: A Novel LLM Approach to Sentiment Analysis of Product Reviews",
      "venue": "IEEE Access",
      "year": "2024",
      "meta": "IF: 4.2 · Q1 (as provided)",
      "points": [
        "Based on undergraduate thesis."
      ],
      "url": "https://ieeexplore.ieee.org/document/10798428",
      "doi": "",
      "authors": ""
    },
    {
      "type": "Conference Paper",
      "title": "Empowering Low-Resource Languages: TraSe Architecture for Enhanced Retrieval-Augmented Generation in Bangla",
      "venue": "LM4UC 2025, NAACL",
      "year": "2025",
      "meta": "",
      "points": [
        "Constructed a context-annotated Bangla question-answering benchmark.",
        "Integrated embedding-based retrieval with translative prompting.",
        "Designed context-conditioned candidate-answer selection with human-in-the-loop evaluation."
      ],
      "url": "https://aclanthology.org/2025.lm4uc-1.2/",
      "doi": "",
      "authors": ""
    },
    {
      "type": "Conference Paper",
      "title": "Exploring Fine-Tuned Vision-Language Model for Multi-Class Skin Disease Classification",
      "venue": "IEEE BECITHCON 2025, IEEE Xplore",
      "year": "2025",
      "meta": "",
      "points": [
        "Fine-tuned Qwen2-VL-2B for 15-class dermatological classification.",
        "Incorporated image preprocessing and lightweight model quantization.",
        "Benchmarked against convolutional and transformer architectures."
      ],
      "url": "https://ieeexplore.ieee.org/abstract/document/11503926",
      "doi": "",
      "authors": ""
    },
    {
      "type": "Conference Paper",
      "title": "BanglaMed-QA: A Question Answering System for Healthcare Support in Bangla",
      "venue": "BIM 2025",
      "year": "2025",
      "meta": "",
      "points": [
        "Constructed a disease-indexed Bangla medical knowledge base.",
        "Integrated lexical normalization with POS-based anaphora resolution.",
        "Combined supervised query categorization with ensemble similarity-based retrieval."
      ],
      "url": "https://arxiv.org/pdf/2608.28329",
      "doi": "",
      "authors": ""
    },
    {
      "type": "Conference Paper",
      "title": "A Collaborative UAV-UGV Heterogeneous System for Enhanced Search and Rescue in Complex Disaster Environments",
      "venue": "IEEE RAAICON 2026",
      "year": "2026",
      "meta": "",
      "points": [
        "Developed a heterogeneous robotic architecture integrating autonomous aerial transit with localized ground reconnaissance.",
        "Engineered a PWM-actuated electromagnetic docking interface with state-based deployment interlocks.",
        "Integrated ESP32-based rover control, wireless video telemetry, and emergency payload delivery."
      ],
      "url": "https://www.researchgate.net/publication/417762413_A_Collaborative_UAV-UGV_Heterogeneous_System_for_Enhanced_Search_and_Rescue_in_Complex_Disaster_Environments#fullTextFileContent",
      "doi": "",
      "authors": ""
    }
  ],
  "projects": [
    {
      "category": "Software",
      "title": "Fake News Detection using LLM and Fine Tuning",
      "description": "Developed a fake news detection system using large language models and parameter-efficient fine-tuning (PEFT) and LoRA techniques.",
      "tags": [
        "LLMs",
        "PEFT",
        "LoRA"
      ],
      "url": "https://github.com/Atia6/Fake_News_Detection/tree/main"
    },
    {
      "category": "Software",
      "title": "Famous Paintings Analysis with SQL Query",
      "description": "Addressed complex queries on a famous-paintings dataset using SQL and PostgreSQL.",
      "tags": [
        "SQL",
        "PostgreSQL"
      ],
      "url": "https://sites.google.com/view/atia-shahnaz-ipa/projects_1/data-science/famous-painting-analysis-with-sql"
    },
    {
      "category": "Hardware",
      "title": "Computer Vision based Multicolor Line Follower Robot",
      "description": "Developed an autonomous multicolor line-following robot using HSV color segmentation, image thresholding, contour detection, and centroid-based path tracking, integrating real-time camera feedback with motor control.",
      "tags": [
        "Computer Vision",
        "OpenCV",
        "Robotics"
      ],
      "url": ""
    },
    {
      "category": "Hardware",
      "title": "CardioCare: A Wearable IoT Device for Real-Time Heart Attack Detection Using Deep Learning",
      "description": "Developed a wearable IoT-based cardiac event detection system using EMG sensor data, preprocessing, and CNN-based classification in PyTorch for real-time detection.",
      "tags": [
        "IoT",
        "CNN",
        "PyTorch"
      ],
      "url": ""
    }
  ],
  "skills": [
    {
      "group": "LLMs & NLP",
      "items": [
        "Retrieval-Augmented Generation (RAG)",
        "Prompt Engineering",
        "Parameter-Efficient Fine-Tuning (PEFT)",
        "LoRA",
        "Text Classification",
        "Semantic Similarity"
      ]
    },
    {
      "group": "Computer Vision & Multimodal AI",
      "items": [
        "CNNs",
        "Vision Transformers (ViT, Swin Transformer)",
        "Vision-Language Models (CLIP, LLaVA)",
        "Visual Question Answering (VQA)",
        "Image-Text Fusion",
        "Cross-Modal Attention",
        "Multimodal Retrieval",
        "Transfer Learning",
        "Fine-Tuning"
      ]
    },
    {
      "group": "Vision Architectures & Techniques",
      "items": [
        "ResNet",
        "DenseNet",
        "ConvNeXt",
        "Image Classification",
        "Feature Extraction",
        "HSV Color Segmentation",
        "Contour Detection"
      ]
    },
    {
      "group": "Frameworks & Libraries",
      "items": [
        "PyTorch",
        "Hugging Face Transformers",
        "LangChain",
        "Scikit-learn",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Beautiful Soup",
        "Matplotlib",
        "Seaborn"
      ]
    },
    {
      "group": "Data Processing & Analysis",
      "items": [
        "Web Scraping",
        "Power BI"
      ]
    },
    {
      "group": "Programming Languages",
      "items": [
        "Python",
        "C",
        "C++",
        "MATLAB",
        "SQL"
      ]
    }
  ],
  "certifications": [
    {
      "name": "Google Advanced Data Analytics Professional Certificate",
      "issuer": "Coursera",
      "date": "November 2024",
      "url": ""
    },
    {
      "name": "SQL (Intermediate) Certificate",
      "issuer": "HackerRank",
      "date": "May 2024",
      "url": ""
    }
  ],
  "awards": [
    {
      "title": "Nominated for the President's Gold Medal",
      "detail": "Khulna University of Engineering & Technology (KUET)",
      "date": "January 2027"
    },
    {
      "title": "Four-times Deans’ List Award",
      "detail": "Faculty of Mechanical Engineering, KUET",
      "date": "Through 2024"
    },
    {
      "title": "Finalist, YES Honda Award",
      "detail": "Honda Foundation",
      "date": "February 2024"
    },
    {
      "title": "Special Mention Award, Luna Samsuddoha DevMania 2023",
      "detail": "BdOSN",
      "date": "May 2023"
    },
    {
      "title": "4th position, FabLab Intra University Challenge 2022",
      "detail": "FabLab KUET",
      "date": "October 2022"
    },
    {
      "title": "Finalist, Anatolian Rover Challenge 2022",
      "detail": "Space Exploration Society (UKET)",
      "date": "May 2022"
    },
    {
      "title": "9th position, International Planetary Aerial Systems (IPAS) Challenge",
      "detail": "Team Durbar · Mars Society South Asia · 26 qualified teams worldwide",
      "date": "May 2021"
    },
    {
      "title": "Certified Solidworks Professional (CSWP)",
      "detail": "Dassault Systems",
      "date": "August 2020"
    },
    {
      "title": "1st position, C Programming Contest",
      "detail": "IEM Robotics and CAD Club, KUET",
      "date": "July 2019"
    },
    {
      "title": "1st Runner-up, BizBash Case Study Competition",
      "detail": "KUET Career Club",
      "date": "March 2019"
    },
    {
      "title": "1st Runner-up, Math Olympiad",
      "detail": "Intra KUET Math Festival",
      "date": "February 2019"
    },
    {
      "title": "HSC, SSC and JSC Scholarships",
      "detail": "Directorate of Secondary & Higher Education, Bangladesh",
      "date": "Through 2019"
    }
  ],
  "activities": [
    {
      "role": "Founding Member Secretary",
      "organization": "KUET Research Society, Mechatronics Engineering wing",
      "date": "November 2023 – March 2024"
    },
    {
      "role": "Student Operator",
      "organization": "FABLAB, KUET",
      "date": "May 2022 – March 2024"
    },
    {
      "role": "Class Representative",
      "organization": "Department of Mechatronics Engineering, KUET",
      "date": "January 2023 – August 2023"
    },
    {
      "role": "Software Co-Team Lead",
      "organization": "KUET Mars Rover Team — Team Durbar",
      "date": "June 2021 – December 2023"
    },
    {
      "role": "Volunteer",
      "organization": "International Conference on Innovative Computing and Communication (ICICC-2021)",
      "date": "December 2020 – February 2021"
    },
    {
      "role": "Science Team Member",
      "organization": "KUET Mars Rover Team — Team Durbar",
      "date": "March 2020 – June 2021"
    },
    {
      "role": "Junior Executive",
      "organization": "KUET Business and Entrepreneurship Club",
      "date": "February 2020 – September 2020"
    },
    {
      "role": "Assistant Class Representative",
      "organization": "Department of Mechatronics Engineering, KUET",
      "date": "January 2019 – August 2019"
    }
  ],
  "languages": [
    {"language": "Bangla", "proficiency": "Native proficiency"},
    {"language": "English", "proficiency": "Professional working proficiency"}
  ],
  "service": [
    {
      "role": "Peer Reviewer",
      "organization": "IEEE Access",
      "detail": "3 manuscripts reviewed"
    }
  ]
};
