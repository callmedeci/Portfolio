import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

async function Page({ params }) {
  const { projectName } = await params;

  const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
    owner: 'callmedeci',
    repo: projectName,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  console.log(data.homepage);
  console.log(data.html_url);
  console.log(data.languages_url);
  console.log(data.name);
  console.log(data.topics);
  console.log(data.updated_at);
  console.log(data.created_at);

  return <div>%GETTING READY FOR THIS PAGE%</div>;
}

export default Page;
