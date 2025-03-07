import AboutCard from './AboutCard';

const AboutContents = [
  {
    title: 'What Can I do?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    className: 'translate-x-5 lg:translate-x-0 lg:-translate-y-5',
  },
  {
    title: 'What Is my hobbies?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    className: '-translate-x-5 lg:translate-x-0',
  },
  {
    title: 'Main languages?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    className: 'translate-x-5 lg:translate-x-0 lg:-translate-y-10',
  },
  {
    title: 'Where to find me?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    className: '-translate-x-5  lg:-translate-x-0 lg:-translate-y-5',
  },
];

function AboutGrid() {
  return (
    <div className='mt-5 w-full lg:grid lg:grid-cols-2 gap-5'>
      {AboutContents.map((content) => (
        <AboutCard
          key={content.title}
          title={content.title}
          className={content.className}
          description={content.description}
        />
      ))}
    </div>
  );
}

export default AboutGrid;
