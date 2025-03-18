'use client';

import {
  BriefcaseBusiness,
  Hammer,
  MemoryStick,
  SquareTerminal,
  Swords,
} from 'lucide-react';
import AboutCard from './AboutCard';

const AboutContents = [
  {
    title: 'What can I build?',
    icon: <Hammer />,
    description:
      'Build fast and well-designed applications with a clean codebase. Always use modern JavaScript techniques to ensure everything runs smoothly and efficiently. From sleek UI/UX to pixel-perfect precision, every detail matters.',
  },
  {
    title: 'What excites me about coding?',
    icon: <SquareTerminal />,
    description:
      'The power of creating something from nothing.That’s what excites me the most. Spending hours debugging can be frustrating, but that moment when I finally solve the issue? Pure happiness. Looking at my projects, I feel proud of what I’ve built—the UI, the UX, the complex logic, and everything in between.',
  },
  {
    title: 'What inspires my work?',
    icon: <BriefcaseBusiness />,
    description:
      'To be honest, almost everything about web development (except TypeScript). From beautifully designed UI/UX to the thrill of debugging a code after hours—it’s all part of the adventure! Since 2023, discovering web development has been the best journey of my life. From writing my first lines of HTML and CSS to working with TailwindCSS, React, and Next.js.And of course, my dear love JavaScript! and now here I am, building real projects. Such an incredible ride!',
  },
  {
    title: 'How do I approach challenges?',
    icon: <Swords />,
    description:
      "When it comes to challenges, I first take a step back to analyze and visualize the situation. Reason through the problem, trying to uncover what's really going on like true detective! Once have a solid foundation, the real work begins: coding, debugging, and researching until achieve the desired outcome. If I ever fail (which, of course, has never happened), I simply restart the process, like an infinite while loop until the problem is solved :D",
  },
  {
    title: 'What technologies do I love?',
    icon: <MemoryStick />,
    description:
      'My beloved JavaScript and its endless ecosystem of packages. How can anyone live without JS? From fascinating frameworks like Vue and Next.js to both frontend and backend development, it’s everywhere. Not to mention React—my go-to library for every projects, with its cool components, hooks, and the whole ecosystem (tnx, Mark).',
  },
];

function AboutGrid() {
  return (
    <div className='mt-5 flex w-full flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-y-10'>
      {AboutContents.map((content, i) => (
        <AboutCard key={content.title} index={i} content={content} />
      ))}
    </div>
  );
}

export default AboutGrid;
