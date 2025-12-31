/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rakshita's Portfolio",
  description:
    "SaaS Product Leader and AI Product Manager with 5+ years driving AI-powered product strategy through data-driven insights and cross-functional leadership. Certified Scrum Product Owner (CSPO®) specializing in production-scale ML pipelines, agentic workflows, and B2B SaaS solutions. Expertise in roadmap development, stakeholder alignment, and Agile delivery that achieves revenue growth, operational efficiency, and measurable ROI through strategic AI product innovation.",
  og: {
    title: "Rakshita Jaiswal Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Rakshita Jaiswal",
  logo_name: "Rakshita Jaiswal",
  subTitle:
    "AI Product Manager | SaaS Leader | CSPO® with 5+ years shipping production ML systems and agentic workflows. I translate advanced AI (LLMs, RAG, multi-agent orchestration) into scalable B2B SaaS solutions—delivering 2x developer adoption, $2.4M revenue impact, and 40% faster sales cycles across 5K+ enterprise users.",
  resumeLink:
    "https://drive.google.com/file/d/1yMHpx0XdQtO1knUM7bx3VMoBndTUAY5C/view?usp=sharing",
  linkedinProfile: "https://www.linkedin.com/in/rakshita-jaiswal/",
  githubProfile: "https://github.com/rakshita-jaiswal",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/rakshita-jaiswal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rakshita-jaiswal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },

  {
    name: "Gmail",
    link: "mailto:rakshita.j@mailjobtech.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/rakshita.jaiswal1998/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rakshita_jaiswal_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Product Management",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Defining product vision and strategy aligned with business goals",
        "⚡ Conducting market research and competitive analysis",
        "⚡ Creating and prioritizing product roadmaps",
        "⚡ Writing detailed product requirements and user stories",
        "⚡ Collaborating with cross-functional teams to deliver products",
        "⚡ Analyzing product metrics and user feedback for continuous improvement",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft PowerAutomate",
          fontAwesomeClassname: "simple-icons:powerautomate",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Advanced SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Productboard",
          fontAwesomeClassname: "simple-icons:producthunt",
          style: {
            color: "#DA552F",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "simple-icons:confluence",
          style: {
            color: "#172B4D",
          },
        },
        {
          skillName: "Mixpanel",
          fontAwesomeClassname: "simple-icons:mixpanel",
          style: {
            color: "#7856FF",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Miro",
          fontAwesomeClassname: "simple-icons:miro",
          style: {
            color: "#050038",
          },
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: {
            color: "#E37400",
          },
        },
      ],
    },

    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building predictive models using Machine Learning algorithms",
        "⚡ Developing data pipelines and ETL processes",
        "⚡ Performing statistical analysis and data visualization",
        "⚡ Implementing AI solutions for business problems",
        "⚡ Working with big data technologies and cloud platforms",
        "⚡ Creating dashboards and reports for data-driven decision making",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "DesignImg",
      skills: [
        "⚡ Leading Agile/Scrum teams and facilitating ceremonies",
        "⚡ Managing project timelines, budgets, and resources",
        "⚡ Identifying and mitigating project risks",
        "⚡ Stakeholder communication and expectation management",
        "⚡ Tracking project progress and reporting to leadership",
        "⚡ Ensuring quality delivery and continuous process improvement",
      ],
      softwareSkills: [
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            color: "#0078D7",
          },
        },
        {
          skillName: "Notion",
          fontAwesomeClassname: "simple-icons:notion",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Microsoft Project",
          fontAwesomeClassname: "simple-icons:microsoft",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "Agile PLM",
          fontAwesomeClassname: "material-symbols:engineering",
          style: {
            color: "#F57C00",
          },
        },
      ],
    },
    {
      title: "User Interface & Experience",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing intuitive and user-friendly interfaces",
        "⚡ Conducting user research and usability testing",
        "⚡ Creating wireframes, prototypes, and mockups",
        "⚡ Implementing responsive design principles",
        "⚡ Collaborating with developers to ensure design feasibility",
        "⚡ Iterating designs based on user feedback and analytics",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "Moqups",
          fontAwesomeClassname: "simple-icons:moqups",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "Balsamiq",
        //   fontAwesomeClassname: "simple-icons:balsamiq",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#F79F1B",
//       },
//       profileLink: "https://leetcode.com/layman_brother/",
//     },
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Savitribai Phule Pune University",
      subtitle: "B.E. in Information Technology",
      logo_path: "sppu_logo.png",
      alt_name: "SPPU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Built foundation in Information Technology including Data Structures, Algorithms, Cloud Computing, and Operating Systems",
        "⚡ Specialized in Business Analytics, Data Science, Financial Analysis, and UX Design - laying groundwork for AI product management career",
        "⚡ Demonstrated leadership as captain of girls football team, winning Intercollege Football competition",
        "⚡ Awarded All-Rounder Student Scholarship (top 7% of students) for academic excellence and extracurricular achievements",
      ],
      website_link: "http://www.unipune.ac.in/",
    },
    {
      title: "Northeastern University",
      subtitle: "M.S. in Information Systems",
      logo_path: "Northeastern_logo.png",
      alt_name: "Northeastern University, Boston",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Master's specialization in AI/ML Product Management, Data Science, and Agile Software Development with focus on production ML systems",
        "⚡ Certified in Prompt Engineering & Programming with OpenAI (Columbia+), Microsoft AI Product Manager, and Product Management for AI and Data Science",
        "⚡ Graduate Teaching Assistant mentoring students in career planning and technical product management strategies",
        "⚡ Active leader in GWISE and Women's Interdisciplinary Society of Entrepreneurship (WISE), fostering inclusive tech community",
      ],
      website_link: "https://www.northeastern.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Scrum Product Owner®",
      subtitle: "- Scrum Alliance",
      logo_path: "cspo_logo.png",
      certificate_link:
        "https://certification.scrumalliance.org/accounts/1767962-rakshita-jaiswal/certifications/2096895-cspo",
      alt_name: "Scrum Alliance",
      color_code: "#2A73CC",
    },
    {
      title: "Microsoft AI Product Manager",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/certificate/1Q158QXPGS5R",
      alt_name: "Coursera",
      color_code: "#0072C6",
    },
    {
      title: "AI Product Management 101",
      subtitle: "- Maven",
      logo_path: "maven_logo.png",
      certificate_link:
        "https://maven.com/wrap-up/c44879e4",
      alt_name: "Maven",
      color_code: "#FF8C00",
    },
    {
      title: "Advanced AI Product Leadership",
      subtitle: "- Maven",
      logo_path: "maven_logo.png",
      certificate_link:
        "https://maven.com/wrap-up/c22e3c55",
      alt_name: "Maven",
      color_code: "#FF8C00",
    },
    {
      title: "GenAI for Product Managers",
      subtitle: "- LinkedIn Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/c2cbf6c74053ec7f9c3914e0b232cba85f4661aa5698e15afd6daaa1d752b7fe?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNcHmpIaRSlWTrJq2hVpRoQ%3D%3D&accountId=74653650&u=74653650&success=true&authUUID=gO%2FXL6uPSBGFsUu4i1gRzw%3D%3D",
      alt_name: "LinkedIn Learning",
      color_code: "#ADD8E6",
    },
    {
      title: "McKinsey Forward Program",
      subtitle: "- McKinsey / Credly",
      logo_path: "mckinsey_logo.png",
      certificate_link:
        "https://www.credly.com/badges/bd3f144b-8bbc-4abd-b285-2a294e0198cd/public_url",
      alt_name: "Credly",
      color_code: "#B3E5FC",
    },
    {
      title: "Product Management for AI and Data Science",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.svg.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d78a01d4-be0a-4d20-aacb-4918687360f6/",
      alt_name: "Udemy",
      color_code: "#D8B7FF",
    },
    {
      title: "Business Analytics Specialization",
      subtitle: "- Eric Bradlow",
      logo_path: "wharton_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/YLKC9TVDQQLA",
      alt_name: "University of Pennsylvania",
      color_code: "#ADD8E6",
    },
    {
      title: "Lean Six Sigma Foundations",
      subtitle: "- PMI",
      logo_path: "pmi_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1rSIhPwuvWFkrZfvdSIARY7IdoxH_2Tnp/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "#00000099",
    },
    {
      title: "Advanced Lean Six Sigma",
      subtitle: "- C.S.S.C.",
      logo_path: "cssc_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1HlV8D6xbMAn7Fs5ny7cUggdsCytetZtD/view",
      alt_name: "Counsil for Six Sigma",
      color_code: "#0C9D5899",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "- DataCamp",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.datacamp.com/completed/statement-of-accomplishment/track/7b182bc71b2a1ec873c30da85ac5ded4875e288b?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink",
      alt_name: "DataCamp",
      color_code: "#0078D6",
    },
    {
      title: "Problem Solving with Excel",
      subtitle: "- Alex Manilla",
      logo_path: "pwc_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/78SEH8HAJCNE",
      alt_name: "PwC",
      color_code: "#D83B0199",
    },
    {
      title: "Data Visualization with Advanced Excel",
      subtitle: "- Alex Manilla",
      logo_path: "pwc_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/PZLCZSB2MG8B",
      alt_name: "PwC",
      color_code: "#1F70C199",
    },
    {
      title: "Data-driven Decision Making",
      subtitle: "- Alex Manilla",
      logo_path: "pwc_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/QLGD426E88EP",
      alt_name: "PwC",
      color_code: "#0C9D5899",
    },
    {
      title: "Power BI Essential Training",
      subtitle: "- NASBA",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1UMI346LvGMsyQ__XzTpzCPwgE5dB8lLV/view?usp=drive_link",
      alt_name: "LinkedIn Learning",
      color_code: "#4285F499",
    },
    {
      title: "Business Analyst and Project Manager Collaboration",
      subtitle: "- IIBA",
      logo_path: "iiba_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/174nHkN3DZVPc41vdsoGIvm_kRyjD8QIj/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "#FFBB0099",
    },
    {
      title: "Python for Finance",
      subtitle: "- LinkedIn Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/83a0ebba7840414c129d92fda0792f43ef5de1814b8d66b292107a8f05d48bea?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BEj7c79WfSlOAMOHZPlEwzw%3D%3D",
      alt_name: "LinkedIn Learning",
      color_code: "#4285F499",
    },
    {
      title: "AI for Product Management",
      subtitle: "- Google Cloud",
      logo_path: "aiProduct_logo.png",
      certificate_link:
        "https://www.credly.com/badges/f89d4a74-c823-41ca-b084-9a3b2ceab42f/linked_in_profile",
      alt_name: "Google Cloud",
      color_code: "#4285F499",
    },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#00000099",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "AI Product Leadership & SaaS Innovation",
  description:
    "AI Product Manager driving production ML systems and B2B SaaS innovation. Built LangChain-powered tools at BNY (2x adoption, 30% faster delivery) and AI payment systems at Sage Softtech (25% onboarding increase). Delivered $2.4M revenue through MLflow monitoring, 40% sales cycle reduction via automated qualification, and 35% faster onboarding with end-to-end ML workflows. CSPO® certified with expertise in stakeholder alignment and data-driven strategy.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "AI Product Manager",
          company: "BNY",
          company_url: "https://www.bny.com/",
          logo_path: "bny_logo.png",
          duration: "Sept 2024 - Present",
          location: "Massachusetts, United States",
          description: [
            "Led Agile cross-functional teams to define ML product vision for personalized banking recommendations on AWS SageMaker, establishing 8 KPIs through RICE framework that improved sprint velocity by 30% and decreased feature delivery time",
            "Developed AI product roadmap and PRDs for fraud detection system using XGBoost predictive analytics, conducting stakeholder workshops that attained 95% requirement alignment and ensuring compliance with OCC model risk management frameworks",
            "Partnered with data science teams to implement MLflow monitoring and built 6 Tableau dashboards, improving recommendation acceptance rates by 18% and generating $2.4M incremental revenue",
            "Supervised end-to-end product lifecycle for credit risk assessment tools on cloud infrastructure, leading sprint planning and backlog grooming while prioritizing user stories based on customer research and API integration feasibility",
            "Executed go-to-market strategy and A/B testing using Adobe Target to validate AI-enabled recommendation models, optimizing customer journeys via Amplitude analytics and competitive insights",
            "Leveraged Microsoft Power Automate to streamline model update workflows and compliance documentation across Jira and Confluence, reducing manual reporting time by 20% and ensuring traceable audit readiness for OCC-regulated AI models",
          ],
          color: "#000000",
        },
        {
          title: "Product Manager",
          company: "Sage Softtech, India",
          company_url: "https://sagesofttech.com/",
          logo_path: "sage_logo.png",
          duration: "Jan 2023 - Aug 2023",
          location: "Pune, Maharashtra",
          description: [
            "Achieved 25% payment onboarding completion increase by leading AI-enhanced digital wallet feature from concept-to-production, creating user journey maps and coordinating SQL-driven cohort analysis for transaction behavior segmentation",
            "Reduced payment integration costs by managing UX and engineering trade-offs for transaction flows, adapting MVP scope and prioritizing payment processing features under tight deadlines",
            "Accelerated digital wallet MVP delivery by 2+ weeks through requirements gathering and agile ceremonies, translating stakeholder needs into technical specifications for mobile payment experiences and financial analytics dashboards",
            "Transformed payment product roadmap by designing customer surveys capturing 200+ insights quarterly, tracking transaction patterns in Google Analytics, and managing cross-functional delivery while validating payment flow optimization",
            "Designed internal prototype dashboards and feature intake forms in Microsoft Power Apps, automating status tracking and stakeholder notifications via Power Automate, improving sprint transparency and reducing feedback turnaround time by 30%",
          ],
          color: "#000000",
        },
        {
          title: "Product Manager",
          company: "Vivma Software Inc, India",
          company_url: "https://vivma.com/",
          logo_path: "vivma_logo.png",
          duration: "Dec 2019 - Dec 2022",
          location: "Pune, Maharashtra",
          description: [
            "Drove 15% order growth on a $12M portfolio by defining product specifications for AI-driven portfolio optimization algorithms and customer insight models, aligning data engineering teams to deliver solutions for institutional investors",
            "Directed portfolio optimization initiative that drove 15% growth on $12M assets by taking complete ownership of algorithm development and coding, self-teaching AI-analysis while managing institutional investor expectations",
            "Overcame operational bottlenecks to reduce reconciliation time from 20 to 5 hours by scoping automation requirements and facilitating Excel VBA and Python solution delivery under monthly deadline pressure",
            "Achieved 18% reduction in operational costs by collaborating on predictive pricing models, defining ML success criteria using logistics metrics, and driving data-driven decision making across operations teams",
            "Streamlined analyst training efficiency by 50% by scoping AI-driven simulation tools, implementing continuous feedback loops, and establishing metrics to improve sprint velocity and predictability",
            "Developed product roadmap through market research with 150+ customer interviews and stakeholder workshops, supporting successful delivery of 4 quarterly releases with cross-functional teams and executive leadership alignment",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "College of Engineering - Northeastern University",
          company_url: "https://www.northeastern.edu/",
          logo_path: "NortheasternCOE.png",
          duration: "Jan 2025 - Present",
          location: "Boston, MA",
          description: [
            "Mentor 50+ graduate students in career planning sessions, improving internship application success rates by 35% through personalized guidance on resume optimization, interview preparation, and technical product management strategies",
            "Conduct bi-weekly leadership development workshops covering Agile methodologies, stakeholder management, and data-driven decision making, equipping students with industry-ready PM skills",
            "Facilitate career development talks on personal branding, networking strategies, and navigating tech industry transitions, resulting in 40% increase in student engagement with career services",
            "Collaborate with faculty to design curriculum enhancements integrating real-world AI product case studies and hands-on project management simulations",
          ],
          color: "#4285F4",
        },
        {
          title: "President - AI Product Management Council",
          company: "Northeastern University",
          company_url: "https://www.northeastern.edu/",
          logo_path: "Northeastern_logo.png",
          duration: "Sept 2024 - Present",
          location: "Boston, MA",
          description: [
            "Founded and lead AI Product Management Council connecting 100+ graduate students with industry leaders, organizing monthly workshops on production ML systems, agentic workflows, and AI product strategy",
            "Established strategic partnerships with 5+ tech companies (including AI startups and enterprise SaaS firms) to facilitate mentorship programs, guest speaker series, and internship opportunities for members",
            "Organize hands-on sessions covering LangChain, RAG systems, vector databases, and multi-agent orchestration, increasing member technical proficiency and job placement rates by 45%",
            "Drive community engagement through case study competitions, product teardowns, and collaborative projects, building portfolio of AI product management best practices and frameworks",
            "Coordinate quarterly AI Product Summit featuring industry practitioners, attracting 200+ attendees and establishing Northeastern as hub for AI product management education",
          ],
          color: "#4285F4",
        },
        {
          title: "Graduate Representative",
          company: "WISE - Northeastern University",
          company_url: "https://www.northeasternwise.com/",
          logo_path: "gwise_logo.png",
          duration: "Sept 2023 - Feb 2024",
          location: "Boston, MA",
          description: [
            "Represented 200+ women entrepreneurs in WISE community, collecting feedback through surveys and focus groups to drive policy discussions with university senior management",
            "Led advocacy initiatives that resulted in 3 policy changes supporting women entrepreneurs, including expanded funding access and mentorship programs",
            "Organized quarterly networking events connecting female students with industry leaders, fostering inclusive environment and increasing WISE membership by 30%",
            "Partnered with university administration to establish new resources for women-led startups, including dedicated workspace and seed funding opportunities",
          ],
          color: "#4285F4",
        },
        {
          title: "Graduate Ambassador",
          company: "Husky Sisters Code - Northeastern University",
          company_url:
            "https://coe.northeastern.edu/orgs/husky-systers-code/",
          logo_path: "huskySis_logo.png",
          duration: "Sept 2023 - Jan 2024",
          location: "Boston, MA",
          description: [
            "Represented Husky Sisters Code at 15+ professional events, tech conferences, and career fairs, promoting women in technology and building supportive network of 100+ female coders",
            "Organized technical workshops and coding bootcamps focused on AI/ML, web development, and data science, increasing chapter engagement by 40%",
            "Managed social media presence and content strategy, growing community reach by 50% through impactful storytelling and member spotlights",
            "Mentored 20+ undergraduate women in technical skill development and career navigation, facilitating connections with industry professionals and internship opportunities",
          ],
          color: "#D83B01",
        },
        {
          title: "President of Student E-Cell",
          company: "Student Fellowship E-Cell - Pune University",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "mitEcell_logo.png",
          duration: "Jan 2017 - Apr 2020",
          location: "Pune, Maharashtra",
          description: [
            "Led entrepreneurship cell of 150+ students, fostering collaborative environment that empowered 25+ student teams to develop and launch business ideas",
            "Organized 10+ entrepreneurship events including startup competitions, pitch sessions, and industry speaker series, attracting 500+ participants annually",
            "Secured sponsorships totaling ₹5L+ from corporate partners and alumni network, funding student ventures and E-Cell operations",
            "Established mentorship program connecting student entrepreneurs with industry experts, resulting in 8 successful startup launches during tenure",
            "Implemented strategic vision that doubled E-Cell membership and significantly enhanced impact and outreach across university ecosystem",
          ],
          color: "#0C9D58",
        },
        {
          title: "Captain - Women's Football Team",
          company: "Pune University",
          company_url: "http://www.unipune.ac.in/",
          logo_path: "mit_logo.png",
          duration: "Aug 2016 - Apr 2020",
          location: "Pune, Maharashtra",
          description: [
            "Led women's football team to victory in Intercollege Football Competition, demonstrating strategic leadership and team coordination under high-pressure competitive environments",
            "Managed team of 20+ players, coordinating training schedules, game strategies, and performance reviews to optimize team dynamics and individual player development",
            "Excelled in high-stakes situations, consistently displaying resilience, composure, and decision-making skills that translated to success both on and off the field",
            "Balanced athletic leadership with academic excellence, earning All-Rounder Student Scholarship (top 7% of students) for achievements in sports and academics",
            "Fostered inclusive team culture emphasizing collaboration, discipline, and continuous improvement, resulting in multiple noteworthy victories and accomplishments",
          ],
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Academic and personal projects demonstrating hands-on expertise in AI/ML product development, intelligent automation, and data-driven solutions. Each project showcases end-to-end product thinking—from user research and technical architecture to measurable outcomes—applying production-ready technologies like predictive analytics, NLP, and real-time orchestration to solve real-world problems.",
  avatar_image_path: "projects_image.svg",
};

// AI Products Portfolio Page
const aiProductsHeader = {
  title: "AI Products Portfolio",
  description:
    "Production AI products leveraging LLMs, RAG systems, and agentic workflows. FinSense: AI-powered financial decisioning with risk classification and NLP query resolution. AIProductGPT: Instant PRD generation from simple prompts. Each product demonstrates translating advanced AI (LangChain, CrewAI, vector databases) into scalable B2B SaaS solutions with measurable enterprise impact.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Testimonials
const testimonials = [
  {
    name: "Product Lead",
    role: "Senior Product Manager",
    company: "AI Tech Company",
    text: "Rakshita's expertise in AI product management is exceptional. She seamlessly bridges the gap between technical teams and business stakeholders, delivering innovative AI-powered solutions that drive real business value.",
    rating: 5
  },
  {
    name: "Engineering Director",
    role: "Director of Engineering",
    company: "Data Analytics Firm",
    text: "Working with Rakshita transformed our data strategy. Her deep understanding of data science and product management helped us build scalable analytics platforms that our clients love.",
    rating: 5
  },
  {
    name: "Tech Executive",
    role: "VP of Product",
    company: "SaaS Platform",
    text: "Rakshita's ability to translate complex technical requirements into user-centric product features is remarkable. Her strategic vision in tech product development consistently exceeds expectations.",
    rating: 5
  },
  {
    name: "Business Analyst",
    role: "Chief Data Officer",
    company: "Enterprise Solutions",
    text: "Rakshita brings unparalleled expertise in data-driven product management. Her analytical skills and AI/ML knowledge helped us launch products that are both innovative and market-ready.",
    rating: 5
  }
];

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rakshita_professional.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with AI Product Strategy, Production ML Systems, SaaS Product Development, Agentic Workflows, and Data-Driven Product Management.",
  },
  blogSection: {
    title: "Testimonials",
    subtitle: "WHAT PEOPLE SAY...",
    link:
      "https://www.linkedin.com/in/rakshita-jaiswal/details/recommendations/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Strathmore Road, Brighton, MA, USA, 02135",
    locality: "Brighton",
    country: "USA",
    region: "Massachusetts",
    postalCode: "02135",
    streetAddress: "Strathmore Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/WjDEo1NwwoFg53gT9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  aiProductsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
  testimonials,
};
