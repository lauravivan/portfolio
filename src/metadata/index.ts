import Freelance from "@/pages/Freelance.vue";
import Articles from "@/pages/Articles.vue";
import Certifications from "@/pages/Certifications.vue";
import College from "@/pages/College.vue";
import Contact from "@/pages/Contact.vue";
import Courses from "@/pages/Courses.vue";
import Events from "@/pages/Events.vue";
import Homepage from "@/pages/index.vue";

import { createPage, type IMetadata } from "@lauravivan/notion-portfolio";
import Honors from "@/pages/Honors.vue";
import Publications from "@/pages/Publications.vue";

const metadata: IMetadata = {
  user: {
    author: `Laura Vivan's Portfolio`,
    socialMedia: "@lauravivan",
  },
  pages: [
    createPage({
      id: "about",
      title: "About (me)",
      isHomepage: true,
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: Homepage,
    }),
    createPage({
      id: "articles",
      title: "My articles",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: Articles,
    }),
    createPage({
      id: "certifications",
      title: "Certifications",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: Certifications,
    }),
    createPage({
      id: "college",
      title: "Academic and Community Involvement",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: College,
    }),
    createPage({
      id: "contact",
      title: "Contact (me)",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: Contact,
    }),
    createPage({
      id: "courses",
      title: "Courses I took",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: Courses,
    }),
    createPage({
      id: "events",
      title: "Community & Events",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: Events,
    }),
    createPage({
      id: "freelance",
      title: "Freelance",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: Freelance,
    }),
    createPage({
      id: "honors-and-awards",
      title: "My honors and Awards",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: Honors,
    }),
    createPage({
      id: "publications",
      title: "My publications",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: Publications,
    }),
  ],
  favorites: [],
};

export default metadata;
