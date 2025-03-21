import { notFound } from 'next/navigation';
import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

// GET
export async function getRepos() {
  try {
    const { data: repos } = await octokit.request(
      'GET /users/{username}/repos',
      {
        username: 'callmedeci',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': 'Next.js App',
        },
      },
    );

    if (!repos.length) throw new Error('Failed to fetch repositories');

    const reposWithHomepageURL = repos.filter(
      (repo) => repo.homepage && repo.description,
    );

    return reposWithHomepageURL;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getRepo(repoName) {
  try {
    const { data: repo } = await octokit.request('GET /repos/{owner}/{repo}', {
      repo: repoName,
      owner: 'callmedeci',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'Next.js App',
      },
    });

    if (!repo) throw new Error('Failed to fetch repository');

    return repo;
  } catch (err) {
    notFound();
  }
}

export async function getPinnedRepos() {
  try {
    const res = await fetch('https://pinned.berrysauce.dev/get/callmedeci');
    if (!res) throw new Error('Failed to fetch pinned repositories');
    const pinned = await res.json();

    const pinnedRepos = await Promise.all(
      pinned.map((repo) =>
        octokit.request('GET /repos/{owner}/{repo}', {
          owner: repo.author,
          repo: repo.name,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }),
      ),
    );

    if (!pinnedRepos) throw new Error('Failed to fetch pinned repositories');

    return pinnedRepos.map((repo) => repo.data);
  } catch (err) {
    console.error(err.message);
  }
}

export async function getRepoContent(repoName, contentPath) {
  try {
    const { data: repo } = await octokit.request(
      'GET /repos/{owner}/{repo}/contents/{path}',
      {
        repo: repoName,
        path: contentPath,
        owner: 'callmedeci',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': 'Next.js App',
        },
      },
    );

    if (!repo) throw new Error('Failed to fetch repository content');

    const decodedContent = atob(repo.content);

    return decodedContent;
  } catch (err) {
    console.error(err.message);
  }
}

// PARSE GITHUB MARKDOWN TO HTML
export async function parseMarkdown(markdown) {
  try {
    const { data: html } = await octokit.request('POST /markdown', {
      text: markdown,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'Next.js App',
      },
    });

    if (!html) throw new Error('Failed to parse markdown!');

    return html;
  } catch (err) {
    console.error(err.message);
  }
}
