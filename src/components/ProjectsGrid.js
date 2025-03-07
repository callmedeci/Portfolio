import ProjectsCard from './ProjectsCard';

const projects = [
  {
    date: 'March 7, 2025',
    title: 'Foodie Finder: Discover New Recipes',
    description:
      'A web app that helps users discover and save delicious recipes from around the world.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    date: 'February 20, 2025',
    title: 'TaskMaster: Your Productivity Partner',
    description:
      'A sleek and intuitive to-do list app that keeps you organized and on track.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    date: 'January 15, 2025',
    title: 'DevConnect: A Hub for Developers',
    description:
      'An online platform where developers can share knowledge, collaborate, and connect.',
    liveLink: '#',
    sourceLink: '#',
  },
];

function ProjectsGrid() {
  return (
    <div className='flex flex-col gap-5 w-full'>
      {projects.map((project) => (
        <ProjectsCard
          key={project.title}
          date={project.date}
          title={project.title}
          description={project.description}
          liveLink={project.liveLink}
          sourceLink={project.sourceLink}
        />
      ))}
    </div>
  );
}

export default ProjectsGrid;
