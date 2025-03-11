'use client';

import AboutCard from './AboutCard';

const AboutContents = [
  {
    title: 'What Can I do?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
  },
  {
    title: 'What Is my hobbies?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
  },
  {
    title: 'Main languages?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
  },
  {
    title: 'Where to find me?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
  },
  {
    title: 'Where do I live?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
  },
  {
    title: 'How do I do?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
  },
];

function AboutGrid() {
  return (
    <div className='mt-5 w-full lg:grid lg:grid-cols-2 flex flex-col gap-5 lg:gap-y-10'>
      {AboutContents.map((content, i) => (
        <AboutCard key={content.title} index={i} content={content} />
      ))}
    </div>
  );
}

export default AboutGrid;
