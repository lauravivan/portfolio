import Freelance from "@/pages/Freelance.vue";
import Articles from "@/pages/Articles.vue";
import Certifications from "@/pages/Certifications.vue";
import College from "@/pages/College.vue";
import Contact from "@/pages/Contact.vue";
import Courses from "@/pages/Courses.vue";
import Events from "@/pages/Events.vue";
import Homepage from "@/pages/About.vue";

import { type IMetadata } from "@lauravivan/notion-portfolio";
import Honors from "@/pages/Honors.vue";
import Publications from "@/pages/Publications.vue";
import Projects from "@/pages/Projects.vue";
import Github from "@/pages/Github.vue";
import NotionPortfolio from "@/pages/projects/NotionPortfolio.vue";
import Volunteering from "@/pages/Volunteering.vue";
import Yoko from "@/pages/projects/Yoko.vue";
import Repo from "@/pages/Repo.vue";

const metadata: IMetadata = {
  user: {
    author: `Laura Vivan's Portfolio`,
    socialMedia: "@lauravivan",
  },
  pages: {
    about: {
      id: "about",
      title: "About (me)",
      isHomepage: true,
      banner: {
        path: "/banners/about.webp",
      },
      icon: {
        path: "/icons/about.png",
      },
      component: Homepage,
      path: "/",
    },
    articles: {
      id: "articles",
      title: "My articles",
      banner: {
        path: "/banners/articles.webp",
      },
      icon: {
        path: "/icons/articles.png",
      },
      component: Articles,
      path: "/articles",
    },
    certifications: {
      id: "certifications",
      title: "My certifications",
      banner: {
        path: "/banners/certifications.webp",
      },
      icon: {
        path: "/icons/certifications.png",
      },
      component: Certifications,
      path: "/certifications",
    },
    college: {
      id: "college",
      title: "Academic and Community Involvement",
      banner: {
        path: "/banners/college.webp",
      },
      icon: {
        path: "/icons/college.png",
      },
      component: College,
      path: "/college",
    },
    contact: {
      id: "contact",
      title: "Contact (me)",
      banner: {
        path: "/banners/contact.webp",
      },
      icon: {
        path: "/icons/contact.png",
      },
      component: Contact,
      path: "/contact",
    },
    courses: {
      id: "courses",
      title: "Courses I took",
      banner: {
        path: "/banners/courses.webp",
      },
      icon: {
        path: "/icons/courses.png",
      },
      component: Courses,
      path: "/courses",
    },
    events: {
      id: "events",
      title: "Community & Events",
      banner: {
        path: "/banners/events.webp",
      },
      icon: {
        path: "/icons/events.png",
      },
      component: Events,
      path: "/events",
    },
    freelance: {
      id: "freelance",
      title: "Freelance",
      banner: {
        path: "/banners/freelance.webp",
      },
      icon: {
        path: "/icons/freelance.png",
      },
      component: Freelance,
      path: "/freelance",
    },
    "honors-and-awards": {
      id: "honors-and-awards",
      title: "My honors and Awards",
      banner: {
        path: "/banners/honors-and-awards.webp",
      },
      icon: {
        path: "/icons/honors-and-awards.png",
      },
      component: Honors,
      path: "/honors-and-awards",
    },
    publications: {
      id: "publications",
      title: "Publications",
      banner: {
        path: "/banners/publications.webp",
      },
      icon: {
        path: "/icons/publications.png",
      },
      component: Publications,
      path: "/publications",
    },
    volunteering: {
      id: "volunteering",
      title: "Volunteering",
      banner: {
        path: "/banners/volunteering.webp",
      },
      icon: {
        path: "/icons/volunteering.png",
      },
      component: Volunteering,
      path: "/volunteering",
    },
    projects: {
      id: "projects",
      title: "My projects",
      banner: {
        path: "/banners/projects.webp",
      },
      icon: {
        path: "/icons/projects.png",
      },
      component: Projects,
      path: "/projects",
      pages: ["notion-portfolio", "yoko"],
    },
    github: {
      id: "github",
      title: "My GitHub repos",
      banner: {
        path: "/banners/github.webp",
      },
      icon: {
        path: "/icons/github.png",
      },
      component: Github,
      path: "/github",
      pages: ["repo"],
    },
    repo: {
      id: "repo",
      title: "Repo",
      icon: {
        path: "/icons/github.png",
      },
      component: Repo,
      path: `/github/:id`,
      parentPage: "github",
    },
    "notion-portfolio": {
      id: "notion-portfolio",
      title: "Notion Portfolio",
      component: NotionPortfolio,
      parentPage: "projects",
      path: "/notion-portfolio",
      icon: {
        path: "/icons/about.png",
      },
      databaseInfo: {
        Created: {
          icon: "clock",
          value: "December 2023",
        },
        Tags: {
          icon: "code",
          value: ["NPM package", "Vue.js", "Pinia", "Vue router"],
        },
      },
    },
    yoko: {
      id: "yoko",
      title: "Yoko!",
      component: Yoko,
      parentPage: "projects",
      path: "/yoko",
      banner: {
        path: "/banners/yoko.webp",
      },
      icon: {
        path: "/icons/yoko.png",
      },
      databaseInfo: {
        Created: {
          icon: "clock",
          value: "May 2024",
        },
        Tags: {
          icon: "code",
          value: ["TypeScript", "React.js", "React router", 'Zustand'],
        },
      },
    },
  },
  favorites: [
    "about",
    "contact",
    "college",
    "volunteering",
    "freelance",
    "projects",
  ],
};

export default metadata;
