import Freelance from "@/pages/Freelance.vue";
import Articles from "@/pages/Articles.vue";
import Certifications from "@/pages/Certifications.vue";
import College from "@/pages/College.vue";
import Contact from "@/pages/Contact.vue";
import Courses from "@/pages/Courses.vue";
import Events from "@/pages/Events.vue";
import Homepage from "@/pages/About.vue";

import { createPage, type IMetadata } from "@lauravivan/notion-portfolio";
import Honors from "@/pages/Honors.vue";
import Publications from "@/pages/Publications.vue";
import Projects from "@/pages/Projects.vue";
import Github from "@/pages/Github.vue";
import NotionPortfolio from "@/pages/NotionPortfolio.vue";

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
      component: Homepage,
    }),
    createPage({
      id: "articles",
      title: "My articles",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: Articles,
    }),
    createPage({
      id: "certifications",
      title: "Certifications",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: Certifications,
    }),
    createPage({
      id: "college",
      title: "Academic and Community Involvement",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: College,
    }),
    createPage({
      id: "contact",
      title: "Contact (me)",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: Contact,
    }),
    createPage({
      id: "courses",
      title: "Courses I took",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: Courses,
    }),
    createPage({
      id: "events",
      title: "Community & Events",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: Events,
    }),
    createPage({
      id: "freelance",
      title: "Freelance",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: Freelance,
    }),
    createPage({
      id: "honors-and-awards",
      title: "My honors and Awards",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: Honors,
    }),
    createPage({
      id: "publications",
      title: "Publications",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: Publications,
    }),
    createPage({
      id: "projects",
      title: "My projects",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: Projects,
    }),
    createPage({
      id: "github",
      title: "My GitHub repos",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: Github,
    }),
  ],
  favorites: [],
};

metadata.favorites.push(metadata.pages[0]);
metadata.favorites.push(metadata.pages[4]);
metadata.favorites.push(metadata.pages[3]);
metadata.favorites.push(metadata.pages[10]);

metadata.pages.push(
  createPage({
    id: "notion-portfolio",
    title: "Notion Portfolio",
    bannerAuthor: "Danis Lou",
    bannerLink:
      "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    component: NotionPortfolio,
    parentPage: metadata.pages[10],
  })
);

export default metadata;
