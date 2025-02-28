/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rakshita's Portfolio",
  description:
    "A Passionate individual who thrives on working with end-to-end products, leveraging my skills in data-driven insights and strategic project management. My goal is to develop sustainable and scalable Products that create a significant impact. With a proven track record of translating complex business needs into actionable solutions, I seek new challenges to drive product excellence and transform business landscapes. Always eager to make a meaningful difference, I am dedicated to delivering innovative products in the AI-driven world.",
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
    "A versatile professional and finance enthusiast with four years of experience as a Business Analyst. My goal is to manage sustainable and scalable products that have a significant impact. With a proven track record of translating complex business and finance needs into actionable solutions, I seek new challenges to drive product excellence and transform business landscapes.",
  resumeLink:
    "https://drive.google.com/file/d/1ToBAQPtEZYGKuVva818awFvI22qjokKB/view?usp=sharing",
  linkedinProfile: "https://www.linkedin.com/in/rakshita-jaiswal/",
  githubProfile: "https://github.com/RakshitaJ-Neu",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/RakshitaJ-Neu",
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
    link: "mailto:rakshita.jaiswal25@gmail.com",
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
      title: "Business Analysis",
      fileName: "CloudInfraImg",
      skills: [
        //" In today's competitive market, the need for business analysis has never been more crucial. Every decision made within an organization, whether big or small, can have a significant impact on its overall success.",
        "⚡ Translate business needs into detailed BRD, FRD, and SRS documents using Microsoft Word and G Suite, ensuring clarity and precision",
        "⚡ Optimized data reconciliation workflows using Power Query and Microsoft PowerAutomate, resulting in a significant increase in financial report reliability and reducing reporting errors",
        "⚡ Comprehensive market research and competitive analysis using SWOT Analysis to drive informed decision-making",
        "⚡ Collaborated with cross-functional teams: Finance, Business Control, Development to streamline processes, and enhance operational efficiency ",
        "⚡ Leverage data analysis with Excel and Google Analytics to inform strategic decisions and improve go-to-market strategies",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
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
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: {
            color: "#FFCA28",
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
          skillName: "Miro",
          fontAwesomeClassname: "simple-icons:miro",
          style: {
            color: "#336791",
          },
        },

        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },

    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Create impactful visualizations with Tableau and Power BI to effectively communicate data-driven insights",
        "⚡ Utilize Pandas, NumPy, Sci-Kit Learn, and TensorFlow to manipulate data and build robust models",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Optimize and deploy machine learning algorithms like Logistic Regression, Decision Trees, and Random Forests",
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
        "⚡ Led cross-functional teams with Azure DevOps to deliver high-quality projects on time and within scope",
        "⚡ Implement strategic Project Management practices and process workflows using Agile frameworks and JIRA",
        "⚡ Manage resources effectively with efficient tools like Microsoft Project",
        "⚡ Identify and Mitigate risks using SWOT Analysis and risk management techniques",
        "⚡ Monitor and control project risk, timeline, and budget, ultimately driving success and creating value for clients",
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
      title: "User Interface & User Experience Designing",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating engaging and user-centric UI designs using Figma, Moqups and Adobe XD to enhance digital experiences",
        "⚡ Conducting user research and usability testing to gather insights and improve design decisions",
        "⚡ Developing responsive and accessible designs that ensure seamless experiences across devices and screen sizes",
        "⚡ Implementing UX best practices and design systems to maintain consistency and usability across applications",
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
        "⚡ I have studied basic Information Technology subjects like DS, Algorithms, Cloud Comuting, OS, etc.",
        "⚡ Apart from this, I have done courses on Business Analytics and Intelligence, Data Science, Financial Analysis and User Experience Designing.",
        "⚡ During my time at university, I showcased leadership and teamwork on the girls football team, leading us to win the Intercollege Football competition.",
        "⚡ I was selected for All-Rounder Student Scholarship, awarded to the top 7% of students at my college.",
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
        "⚡ I have completed a range of Information Management courses, focusing on areas such as Data Science, Business Analytics, Project Management, Product Designing and Agile Software Development.",
        "⚡ In addition to this, I am currently a Graduate Teaching Assistant, where I am mentoring students through career planning sessions and facilitating resume optimization workshops.",
        "⚡ Actively contributed to GWISE and Women’s Interdisciplinary Society of Entrepreneurship (WISE) Club, creating an empowering environment and fostering trust-based relationships.",
      ],
      website_link: "https://www.northeastern.edu/",
    },
  ],
};

const certifications = {
  certifications: [
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
      title: "Data Analytics Consulting",
      subtitle: "- Tom Brunskill",
      logo_path: "kpmg_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/18IOTrVUIdln8rPTqVVfLgGNHPaIm8LXs/view",
      alt_name: "KPMG",
      color_code: "#1F70C199",
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
      title: "Scrum Professional",
      subtitle: "- CertiProf",
      logo_path: "scrum_logo.png",
      certificate_link:
        "https://www.credly.com/badges/503f45bc-adc9-49f2-8551-81c15591a97e/public_url",
      alt_name: "CertiProf",
      color_code: "#2A73CC",
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
  subtitle: "Work, Internship and Leadership",
  description:
    "I have worked as a Business Analyst with diverse companies, refining my skills through hands-on internships and leading teams to success. My journey spans various projects in financial analysis, business analysis, data science, and project management. I love driving innovation and efficiency, which is why I thrive in both professional roles and leadership positions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Finance and Business Control Analyst",
          company: "Volvo Group",
          company_url: "https://www.volvogroup.com/en/",
          logo_path: "volvo_logo.png",
          duration: "Sept 2024 - Dec 2024",
          location: "Virginia, United States",
          description: [
            "Working closely with Credit, Tax and Business Control teams, I was actively involved in optimizing financial processes, leading to a 40% increase in operational efficiency. By automating data reconciliation workflows using Power Query and Excel, I significantly enhanced financial report reliability by 90% while reducing reporting errors by 75%. Additionally, I designed and implemented automated data pipelines that streamlined workflows and further improved reporting accuracy by 90%. My efforts in standardizing financial reporting procedures also helped uncover opportunities for $120K in annual cost savings through optimized resource allocation.",
          ],
          color: "#000000",
        },
        {
          title: "Product Business Analyst",
          company: "Adventus Education(India) Pvt Ltd.",
          company_url: "https://adventus.io/",
          logo_path: "adventus_logo.png",
          duration: "Apr 2023 - Aug 2023",
          location: "Pune, Maharashtra",
          description: [
            "I conducted requirements-gathering meetings with business leaders and key stakeholders, using Confluence and Microsoft Word to improve resource management efficiency by 20%. Through internal user journey analytics, I optimized processes, reducing fallout steps by 10 per project. Additionally, I developed and implemented solutions through detailed project documentation, clearly outlining functional and non-functional business requirements using Microsoft Word and G Suite, which minimized misunderstandings by 20%. To further support data-driven decision-making, I utilized SQL and PowerPoint to identify trends from requirement meetings, improving overall productivity by 30%.",
          ],
          color: "#000000",
        },
        {
          title: "Business Analyst",
          company: "Adeption India LLP",
          company_url: "https://adeption.io/",
          logo_path: "adeption_logo.png",
          duration: "Feb 2021 - Mar 2023",
          location: "Pune, Maharashtra",
          description: [
            "I drafted comprehensive Business Requirement Documents (BRD), Functional Requirement Documents (FRD), and Software Requirement Specifications (SRS) for 10 projects using Google Suite and Excel, increasing delivery efficiency by 30%. By facilitating the troubleshooting of complex issues as a cross-functional lead with a 5-member team that included product, engineering, sales and support, our team ensured the functionality of the app, increasing the user experience by 30%. These initiatives ensured quality and compliance while diminishing development time by 40% through team initiatives to enhance business documentation; improving product quality by 25%.",
          ],
          color: "#000000",
        },
        {
          title: "Data Analytics Intern",
          company: "KPMG India",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "kpmg_logo.png",
          duration: "Jul 2020 - Aug 2020",
          location: "Mumbai, Maharashtra",
          description: [
            "I performed data quality checks, derived actionable insights and visualized results on Power BI, improving client decision making by 20%. Utilizing SQL to perform analyses on big data sets, I helped diagnose trends which directly resulted in a 15% increase in revenue. I turned a spreadsheet full of numbers into concise and powerful PowerPoint presentations where insight from the analysis could be best utilized as an action plan to reach the target milestones more closely.",
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
          company_url: "https://www.northeasternwise.com/",
          logo_path: "NortheasternCOE.png",
          duration: "Jan 2025 - Present",
          location: "Boston, MA",
          description:
            "As a Graduate Teaching Assistant, I guide and mentor students in career planning sessions, which has significantly improved internships application success rates. I also conduct engaging talks in both personal & leadership development goals and career management strategies, equipping students with the skills needed for professional growth. Additionally, I facilitate career development workshops that enhance leadership and time management skills.",
          color: "#4285F4",
        },
        {
          title: "Media Services Specialist",
          company: "Event Management - Northeastern University",
          company_url: "https://www.northeasternwise.com/",
          logo_path: "Northeastern_logo.png",
          duration: "Jan 2025 - Present",
          location: "Boston, MA",
          description:
            "I coordinate media services for events, ensuring high-quality audiovisual experiences through seamless setup, real-time troubleshooting, and collaboration with technical teams. By managing sound, video, lighting and live production elements, I enhance audience engagement and event impact while maintaining smooth operations.",
          color: "#4285F4",
        },
        {
          title: "Graduate Representative",
          company: "WISE- Northeastern University",
          company_url: "https://www.northeasternwise.com/",
          logo_path: "gwise_logo.png",
          duration: "Sept 2023 - Present",
          location: "Boston, MA",
          description:
            "Representing the Women’s Interdisciplinary Society of Entrepreneurship (WISE) community by collecting feedback and driving thoughtful discussions, working with partnership with university senior management. Our efforts resulted in changing university policies to better support women entrepreneurs, fostering a more inclusive and empowering environment for female students pursuing entrepreneurial endeavors. ",
          color: "#4285F4",
        },
        {
          title: "Graduate Ambassador",
          company: "Husky Sisters Code- Northeastern University",
          company_url:
            "https://coe.northeastern.edu/orgs/husky-systers-code/#:~:text=As%20women%20in%20the%20graduate,be%20better%20versions%20of%20ourselves.",
          logo_path: "huskySis_logo.png",
          duration: "Sept 2023 - Jan 2024",
          location: "Boston, MA",
          description:
            "Responsible for representing Husky Sister Code through media, teams, professional events, and engaging with diverse professional coders. Through these efforts, I help build a supportive network that empowers women in technology, driving impactful discussions and inspiring the next generation of female coders.",
          color: "#D83B01",
        },
        {
          title: "President of Student E-Cell",
          company: "Student fellowship E-Cell- Pune University",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "mitEcell_logo.png",
          duration: "Jan 2017 - April 2020",
          location: "Pune, Maharashtra",
          description:
            "I  fostered a collaborative environment, and successfully coordinated events that empowered students to develop and launch their business ideas. My strategic vision and effective management skills significantly enhanced the E-Cell's impact and outreach.",
          color: "#0C9D58",
        },
        {
          title: "Professional Footballer",
          company: "Pune University-Undergrad Girls Football Team",
          company_url: "https://github.com/",
          logo_path: "mit_logo.png",
          duration: "Aug 2016 - April 2020",
          location: "Pune, Maharashtra",
          description:
            "Spreadheaded the team to multiple noteworthy victories and accomplishments, underscoring the pivotal role of effective leadership in sports. Excelled in high-pressure situations, consistently displaying resilience, and maintaining composure in fiercely competitive environments.",
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
    "My projects focus on Finance & Business Control Analysis, Process Automation, Project Planning and Data-Driven Decision-Making. With expertise in requirement analysis and Agile methodologies, I streamline financial workflows, automate reporting, and enhance data accuracy. By analyzing complex datasets and developing predictive models, I create actionable insights that drive efficiency, reduce manual effort, and support strategic decision-making.",
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

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_rakshita_circular.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Strategic Planning, Business Process Improvement, Data Analysis and Visualization.",
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
    subtitle: "Burnett St, Jamaica Plain, MA, USA 02130",
    locality: "Jamaica Plain",
    country: "USA",
    region: "Massachusetts",
    postalCode: "02120",
    streetAddress: "Burnett St",
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
  // publicationsHeader,
  // publications,
  contactPageData,
};
