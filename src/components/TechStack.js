import Image from 'next/image';

const techList = [
  {
    imageSrc: '/svg/javascript.svg',
    title: 'javascript',
    level: 'Expert',
    years: '2 years',
  },
  {
    imageSrc: '/svg/react.svg',
    title: 'react developer',
    level: 'Mid',
    years: '1 year',
  },
  {
    imageSrc: '/svg/nextjs.svg',
    title: 'nextJS developer',
    level: 'junior',
    years: '1 year',
  },
];

function TechStack() {
  return (
    <ul className='flex flex-col gap-5 mt-5'>
      {techList.map((tech) => (
        <TechItem
          key={tech.title}
          imageSrc={tech.imageSrc}
          title={tech.title}
          level={tech.level}
          years={tech.years}
        />
      ))}
    </ul>
  );
}

function TechItem({ imageSrc, title, level, years }) {
  return (
    <li className='flex gap-2 items-center w-full'>
      <div className='bg-zinc-800 p-2 w-max rounded-full overflow-hidden shadow-md'>
        <Image
          className='rounded-full'
          src={imageSrc}
          width={30}
          height={30}
          alt={title}
        />
      </div>
      <div className='flex flex-col text-sm font-semibold'>
        <span className='text-zinc-300 capitalize'>{title}</span>
        <span className='text-zinc-400 uppercase'>{level}</span>
      </div>

      <span className='flex-1 text-end text-zinc-400 font-medium text-sm xl:text-base'>
        {years} / Experience
      </span>
    </li>
  );
}

export default TechStack;
