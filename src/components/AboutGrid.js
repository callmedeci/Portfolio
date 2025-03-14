'use client';

import AboutCard from './AboutCard';

const AboutContents = [
  {
    title: 'What can I build?',
    description:
      'Build fast and well-designed applications with a clean codebase. Always use modern JavaScript techniques to ensure everything runs smoothly and efficiently. From sleek UI/UX to pixel-perfect precision, every detail matters. At the end of the day, it’s all about creating something that looks good, feels great, and works flawlessly.',
  },
  {
    title: 'What excites me about coding?',
    description:
      'The power of creating something from nothing.That’s what excites me the most. Spending hours debugging can be frustrating, but that moment when I finally solve the issue? Pure happiness. Looking at my projects, I feel proud of what I’ve built—the UI, the UX, the complex logic, and everything in between. It’s a sense of true satisfaction.',
  },
  {
    title: 'What technologies do I love?',
    description:
      'My beloved JavaScript and its endless ecosystem of packages. How can anyone live without JS? From fascinating frameworks like Vue and Next.js to both frontend and backend development, it’s everywhere. Not to mention React—my go-to library for every projects, with its cool components, hooks, and the whole ecosystem (tnx, Mark). Of course, I have a special place in my heart for open-source projects, just like the legendary Telegram.',
  },
  {
    title: 'What inspires my work?',
    description:
      'To be honest, almost everything about web development (except TypeScript). From beautifully designed UI/UX to the thrill of debugging a code after hours—it’s all part of the adventure! Since 2023, discovering web development has been the best journey of my life. From writing my first lines of HTML and CSS to working with TailwindCSS, React, and Next.js.And of course, my dear love JavaScript! and now here I am, building real projects. Such an incredible ride!',
  },
  {
    title: 'How do I approach challenges?',
    description:
      "When it comes to challenges, I first take a step back to analyze and visualize the situation. Reason through the problem, trying to uncover what's really going on like true detective! Once have a solid foundation, the real work begins: coding, debugging, and researching until achieve the desired outcome. If I ever fail (which, of course, has never happened), I simply restart the process, like an infinite while loop until the problem is solved.",
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
