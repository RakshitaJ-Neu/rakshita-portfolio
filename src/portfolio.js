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
    url: ""
  },
};

//Home Page
const greeting = {
  title: "Rakshita Jaiswal",
  logo_name: "Rakshita Jaiswal",
  subTitle:
    "A versatile professional with three years of experience as a Business Analyst. My goal is to manage sustainable and scalable products that have a significant impact. With a proven track record of translating complex business needs into actionable solutions, I seek new challenges to drive product excellence and transform business landscapes.",
  resumeLink:
    "https://drive.google.com/file/d/1nh_6lzD3g60MId49pEtnP7RXPKOFlmYx/view?usp=sharing",
  linkedinProfile: "https://www.linkedin.com/in/rakshita-jaiswal/",
  githubProfile: "https://github.com/RakshitaJ-Neu",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/RakshitaJ-Neu",
  // linkedin: "https://www.linkedin.com/in/rakshita-jaiswal/",
  // gmail: "rakshita.jaiswal25@gmail.com",
  // gitlab: "https://gitlab.com/RakshitaJ-Neu",
  // facebook: "https://www.facebook.com/rakshita.jaiswal1998/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/rakshita_jaiswal_/"

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
        "⚡ Coordinate requirement-gathering meetings with Slack and Teams, fostering collaboration and clear communication with stakeholders",
        "⚡ Comprehensive market research and competitive analysis using SWOT Analysis to drive informed decision-making",
        "⚡ Optimize business processes with Miro and Six Sigma, enhancing efficiency and reducing operational bottlenecks",
        "⚡ Leverage data analysis with Excel and Google Analytics to inform strategic decisions and improve go-to-market strategies",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
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
        "⚡ Monitor and control project risk, timeline, and budget, ultimately driving success and creating value for clients"
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
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing responsive, user-friendly web interfaces with HTML, CSS, and JavaScript",
        "⚡ Building responsive website front end using ReactJS framework and Visual Studio Code",
        "⚡ Ensuring consistent performance and appearance across different browsers and devices using BrowserStack",
        "⚡ Designing intuitive and visually appealing user interfaces using Figma that enhance user experience",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
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
    }
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

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
        "⚡ Apart from this, I have done courses on Business Analytics and Intelligence, Data Science, and Web Development.",
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
        "⚡ I have completed a range of Data Science courses, focusing on areas such as Data Analytics, Explainable AI, and Graph Machine Learning.",
        "⚡ In addition to this, I am currently a Graduate Teaching Assistant, where I am mastering my skills in Project Management, Business Analytics, and Data Visualization.",
        "⚡ Actively contributed to GWISE and APMC Club, working in product protothon that enhanced collaboration and innovation.",
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
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#00000099",
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
      title: "AI for Product Management",
      subtitle: "- Google Cloud",
      logo_path: "aiProduct_logo.png",
      certificate_link:
        "https://www.credly.com/badges/f89d4a74-c823-41ca-b084-9a3b2ceab42f/linked_in_profile",
      alt_name: "Google Cloud",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Leadership",
  description:
    "I have worked as a Business Analyst with diverse companies, refining my skills through hands-on internships and leading teams to success. My journey spans various projects in business analysis, data science, and project management. I love driving innovation and efficiency, which is why I thrive in both professional roles and leadership positions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Product Business Analyst",
          company: "Adventus Education(India) Pvt Ltd.",
          company_url: "https://adventus.io/",
          logo_path: "adventus_logo.png",
          duration: "Apr 2023 - Aug 2023",
          location: "Pune, Maharashtra",
          description:
            "I enhanced resource management efficiency by 20% and improved go-to-market strategies by 18% through effective stakeholder management and data analysis. My support measures reduced product delivery time by 10% and streamlined communication, cutting misunderstandings by 20%.",
          color: "#000000",
        },
        {
          title: "Business Analyst",
          company: "Adeption India LLP",
          company_url: "https://adeption.io/",
          logo_path: "adeption_logo.png",
          duration: "Feb 2021 - Mar 2023",
          location: "Pune, Maharashtra",
          description:
            "I boosted project delivery efficiency by 30% and reduced project time by 20% using Agile methodologies. Leading a cross-functional team, I increased app downloads by 30% and improved product quality by 25%. My efforts resolved critical workflow issues, enhancing system performance by 25% and reducing downtime by 40%.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Analytics Intern",
          company: "KPMG India",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "kpmg_logo.png",
          duration: "Jul 2020 - Aug 2020",
          location: "Mumbai, Maharashtra",
          description:
            "I excelled in Data Quality Assessment, Data Insights, and Presentation, crafting impactful PowerBI presentations that enhanced client decision-making by 20%. Leveraging SQL and PowerBI, I identified key trends and insights, driving a 15% revenue increase.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "Graduate Representative",
          company: "WISE-Northeastern",
          company_url: "https://www.northeasternwise.com/",
          logo_path: "gwise_logo.png",
          duration: "Sept 2023 - Present",
          location: "Boston, MA",
          description:
            "Representing the Women’s Interdisciplinary Society of Entrepreneurship (WISE) community by collecting feedback and driving thoughtful discussions, working with partnership with university senior management. Our efforts resulted in changing university policies to better support women entrepreneurs, fostering a more inclusive and empowering environment for female students pursuing entrepreneurial endeavors. ",
          color: "#4285F4",
        },
        {
          title: "Secretary- General",
          company: "APMC-Northeastern",
          company_url: "https://www.apmcneu.com/",
          logo_path: "apmc_logo.png",
          duration: "Dec 2023 - July 2024",
          location: "Boston, MA",
          description:
            "I developed and executed strategic plans to improve Aspiring Product Managers Club(APMC) engagement. Recruited and led a team of 20+ volunteer Club Champions promoting the 60 members club through various channels, including social media, newsletters, and partnerships.",
          color: "#000000",
        },
        {
          title: "Graduate Ambassador",
          company: "Husky Sisters Code-Northeastern",
          company_url: "https://coe.northeastern.edu/orgs/husky-systers-code/#:~:text=As%20women%20in%20the%20graduate,be%20better%20versions%20of%20ourselves.",
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
    "My projects focus on Data Science, Project Management, and Frontend Development. I specialize in creating impactful Data Science solutions, developing responsive web interfaces, and designing comprehensive project plans to ensure successful outcomes.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_rakshita_circular.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
