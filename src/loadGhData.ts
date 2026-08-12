import type { PageInfo } from "@lauravivan/notion-portfolio";
import { GH_REPOS_URL } from "./constants";
import metadata from "./metadata";

const loadGhData = async (): Promise<PageInfo[]> => {
  let repos: PageInfo[] = [];

  try {
    const res = await fetch(GH_REPOS_URL);
    const resJSON = await res.json();

    for (let repo of resJSON) {
      if ("name" in repo && typeof repo.name === "string") {
        if (!Object.keys(metadata.pages).includes(repo.name)) {
          const pInfo = {
            ...metadata.pages.repo,
            id: repo.name,
            title: repo.name,
            path: `/github/${repo.name}`,
            databaseInfo: {
              Created: {
                icon: "clock",
                value: new Date(repo.created_at).toDateString(),
              },
            },
          };

          metadata.pages = {
            ...metadata.pages,
            [repo.name]: pInfo,
          };

          metadata.pages.github.pages.push(repo.name);

          repos.push(pInfo);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }

  return repos;
};

export default loadGhData;
