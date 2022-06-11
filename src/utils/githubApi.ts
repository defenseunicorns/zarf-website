/* eslint-disable */
import { Octokit } from 'octokit';

export interface GithubStats {
  stars: number;
  pullRequests: number;
  contributors: number;
}

const octokit = new Octokit();

async function iterableItemCount(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iterator: AsyncIterableIterator<any>,
): Promise<number> {
  let count = 0;
  for await (const { data: items } of iterator) {
    count += items.length;
  }
  return count;
}

async function getNumContributors(): Promise<number> {
  return iterableItemCount(
    octokit.paginate.iterator(octokit.rest.repos.listContributors, {
      owner: 'defenseunicorns',
      repo: 'zarf',
      per_page: 100,
      anon: 'true',
    }),
  );
}

async function getNumStars(): Promise<number> {
  return (
    await octokit.rest.repos.get({ owner: 'defenseunicorns', repo: 'zarf' })
  ).data.stargazers_count;
  // return iterableItemCount(
  //   octokit.paginate.iterator(octokit.rest.activity.listStargazersForRepo, {
  //     owner: 'defenseunicorns',
  //     repo: 'zarf',
  //     per_page: 100,
  //   }),
  // );
}

async function getNumPullRequests(): Promise<number> {
  return iterableItemCount(
    octokit.paginate.iterator(octokit.rest.pulls.list, {
      owner: 'defenseunicorns',
      repo: 'zarf',
      per_page: 100,
      state: 'all',
    }),
  );
}

export async function getGithubStats(): Promise<GithubStats> {
  const [contributors, stars, pullRequests] = await Promise.all([
    getNumContributors(),
    getNumStars(),
    getNumPullRequests(),
  ]);
  return {
    contributors,
    stars,
    pullRequests,
  };
}
