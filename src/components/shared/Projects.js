import { getPinnedRepos } from '@/lib/data-service';
import PinnedProjects from '../PinnedProjects';

async function Projects() {
  const pinnedRepos = await getPinnedRepos();

  return <PinnedProjects projects={pinnedRepos} />;
}

export default Projects;
