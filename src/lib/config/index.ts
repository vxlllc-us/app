import {
  faCogs,
  faWrench,
  faPuzzlePiece,
  faShareSquare,
  faCheckSquare,
  faThumbsUp,
  faArrowsAlt,
  faMobile,
  faCloudUploadAlt,
  faSyncAlt,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";

import { IService, IJob, IPartner, ICustomer } from "../types";

function getLogoFromImage(logo: string) {
  return require(`../../res/assets/images/logos/${logo}`);
}

const { REACT_APP_BASE } = process.env;

const services: IService[] = [
  {
    icon: faCogs,
    name: "Program Management",
    description:
      "Strategically linking your Guidewire systems transformation to broader organizational goals can ensure the strategic alignment necessary to achieve innovative systems functionality and operational efficiency. The VXL team will provide the program management expertise required to realize your organizational goals."
  },
  {
    icon: faWrench,
    name: "Suite-Wide Implementation",
    description:
      "VXL has Guidewire Certified professional with expert-level experience implementing Guidewire InsuranceSuite\\xc3\\x82\\xc2\\xae products. The VXL professionals have successfully completed systems transformations and systems upgrades for small, mid-tier and large carriers in the United States, Australia and Europe implementing Guidewire software products with on-site and off-shore teams. VXL\\xc3\\xa2\\xc2\\x80\\xc2\\x99s extensive experience with Guidewire InsuranceSuite\\xc3\\x82\\xc2\\xae will ensure your organization benefits from consistency in configuration, integration, administration and security."
  },
  {
    icon: faPuzzlePiece,
    name: "Suite-Wide Integration",
    description:
      "VXL can help design, develop and implement strategic systems integrations between Guidewire\\xc3\\xa2\\xc2\\x80\\xc2\\x99s InsuranceSuite\\xc3\\x82\\xc2\\xae products and key strategic partners to help insurers optimize workflow and improve decisions across end-to-end claim, billing and underwriting processes. VXL team members are familiar with essentially all methods of integration available to an insurer including SOA/Web services, ACORD XML, XML, MQ Series, SQL calls, and custom APIs."
  },
  {
    icon: faShareSquare,
    name: "Data Migration",
    description:
      "Your data is among the most critical components of your organization. Many organizations face the challenge of designing a single version of the truth where internal and third party data can be positioned for utilization by data consumers and producers. The VXL team has migrated data across 30 projects world-wide and understands the delicate and methodical approach required for successful data consolidation, migration and conversion."
  },
  {
    icon: faCheckSquare,
    name: "Quality Assurance",
    description:
      "The goal of any professional software development initiative is to release a product the meets and exceeds the customer\\xc3\\xa2\\xc2\\x80\\xc2\\x99s expectations. The VXL team has proven expertise in the execution of comprehensive QA (quality assurance) methodologies to ensure your project is implemented with the level of quality our customers expect and deserve."
  },
  {
    icon: faThumbsUp,
    name: "Performance Management",
    description:
      "The VXL team has the technical expertise and analytical skill needed to identify optimal solutions that meet both functional and performance requirements throughout your Guidewire project lifecycle. The VXL team has extensive experience coordinating and prioritizing performance testing work across multiple applications, platforms and releases. Further, the team\\xc3\\xa2\\xc2\\x80\\xc2\\x99s familiarity with Apache Tomcat, IBM WebSphere, WebLogic, and JBoss app servers, and Oracle and Microsoft SQL Server databases, help ensure your systems achieve optimal performance."
  },
  {
    icon: faArrowsAlt,
    name: "Ongoing Maintenance And Enhancement Support",
    description:
      "The VXL team provides superior support to your existing implementation and contribute to post go-live enhancements and improvements to products."
  },
  {
    icon: faMobile,
    name: "Portal Application Development And Support",
    description:
      "The VXL team has rich experience in delivering Guidewire Digital Portal applications to various organizations. Our services include UI customization, branding theming and implementation services for Guidewire Customer portal for customer needs."
  },
  {
    icon: faCloudUploadAlt,
    name: "Cloud Hosting Services",
    description:
      "Taking your applications to cloud has never been easier. The VXL expertise has provided cloud migration strategies to several FinTech and Insurance customers. Our teams have helped our customers evaluate, plan and implemented solutions in AWS Cloud for Guidewire and other products also. Our customers have benefited greatly with our deep understanding and expertise of Cloud Technologies and architectures."
  },
  {
    icon: faSyncAlt,
    name: "Continuous Integration And Continuous Delivery (Ci-Cd) Services",
    description:
      "VXL has expertise in delivering Jenkins, Bamboo, TeamCity and many other CI services to our customers. We setup complete end-to-end automation and DevOps services relying on container technologies like Docker, Kubernetes etc. Our experts have also provided services in Unit testing (JUnit, TestNG, GUnit etc.) to various insurance and noninsurance customers alike."
  },
  {
    icon: faDatabase,
    name: "Big-Data And Analytics",
    description:
      "VLX experts have helped several customers and governments in Big Data and analytics. Our experts have experience in Apache-Storm, Apache-Spark, Apache-Flink, Hadoop etc."
  }
];

const customers: ICustomer[] = [
  {
    logo: getLogoFromImage("ama.png"),
    name: "Alberta Motor Association"
  },
  {
    logo: getLogoFromImage("twia.png"),
    name: "Texas Wind Storm Association"
  },
  {
    logo: getLogoFromImage("tfpa.png"),
    name: "Texas Fair Plan"
  },
  {
    logo: getLogoFromImage("tsys.png"),
    name: "Total Systems"
  },
  {
    logo: getLogoFromImage("gore.png"),
    name: "W L Gore"
  }
];

const partners: IPartner[] = [
  {
    logo: getLogoFromImage("biminds.jpg"),
    name: "Biminds"
  }
];

const jobs: IJob[] = [
  {
    id: "987ADF0897ADF",
    title: "  GUIDEWIRE IMPLEMENTATION ARCHITECT (INTEGRATION & CONFIGURATION)",
    preface: "Guidewire platform knowledge, GOSU Skills Preferred:",
    requirements: [
      "Previous experience with implementing Guidewire ClaimCenter is strongly preferred.",
      "Previous experience associated with the design, development, modification and deployment of software, including object-oriented programming concepts with using design standards and best practices.",
      "ClaimCenter Configuration development experience with relevant certification (Guidewire ClaimCenter 7.x and above).",
      "Experience with Agile methodology, Source version control, and Release",
      "Working with offshore teams with different times is preferred.",
      "Prior experience in: Planning, designing, developing, modifying, testing, debugging, and maintaining GOSU language application code within Guidewire ClaimCenter. management.",
      "Configures screen layouts, including creation of new screens (PCFs).",
      "Experience writing business rules and other business logic.",
      "Experience configuring operational and administration related parameters such as roles and permissions, user attributes regions, activity patterns etc.",
      "Experience resolving issues identified during testing in regards to the configuration requirements.",
      "Experience working within a development team using Agile methodology to deliver User stories.",
      "Experience assisting in GOSU code reviews, code cleanups and perform sprint demos.",
      "Experience handling the responsibility of organizing code merges and environment management tasks.",
      "Previous experience managing projects and team members is a plus. Expected to mentor and train client team on configuration and best practices.",
      "Previous experience associated with the design, development, modification and deployment of software, including object-oriented programming concepts with using design standards and best practices.",
      "ClaimCenter Configuration development experience with relevant certification (Guidewire ClaimCenter 7.x and above).",
      "Experience with Agile methodology, Source version control, and Release",
      "Working with offshore teams with different times is preferred.",
      "Prior experience in: Planning, designing, developing, modifying, testing, debugging, and maintaining GOSU language application code within Guidewire ClaimCenter. management.",
      "Configures screen layouts, including creation of new screens (PCFs).",
      "Experience writing business rules and other business logic.",
      "Experience configuring operational and administration related parameters such as roles and permissions, user attributes regions, activity patterns etc.",
      "Experience resolving issues identified during testing in regards to the configuration requirements.",
      "Experience working within a development team using Agile methodology to deliver User stories.",
      "Experience assisting in GOSU code reviews, code cleanups and perform sprint demos.",
      "Experience handling the responsibility of organizing code merges and environment management tasks.",
      "Previous experience managing projects and team members is a plus. Expected to mentor and train client team on configuration and best practices."
    ]
  }
];

export default {
  routes: {
    home: `${REACT_APP_BASE}/`,
    career: `${REACT_APP_BASE}/career/:id`
  },
  firebase: {
    collections: {
      messages: "messages"
    }
  },
  services,
  customers,
  partners,
  jobs
};
