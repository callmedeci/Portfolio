import AboutGrid from '@/components/AboutGrid';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import ContactForm from '@/components/ContactForm';
import InfinitieScroll from '@/components/InfinitieScroll';
import ProjectsGrid from '@/components/ProjectsGrid';
import SocialLinks from '@/components/SocialLinks';
import StayUpToDateForm from '@/components/StayUpToDateForm';
import TechStack from '@/components/TechStack';
import { CpuIcon, Download, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <>
      <section className='mt-6 flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto text-center'>
        <div className='flex items-center gap-2'>
          <Avatar>
            <Image src='/images/me.jpg' fill alt='Yunes picture' />
          </Avatar>

          <h2 className='text-xl md:text-3xl font-bold text-zinc-50 max-w-60 text-start -skew-x-6'>
            Yunes Maghsoudie
          </h2>
        </div>

        <h1 className='text-2xl md:text-5xl font-bold text-zinc-100 text-center'>
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className='text-zinc-400 tracking-wide'>
          I’m Yunes, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        <SocialLinks />
      </section>

      <InfinitieScroll />

      <section
        id='projects'
        className='flex flex-col items-center lg:grid lg:grid-cols-2 gap-5'
      >
        <ProjectsGrid />

        <div className='flex flex-col gap-5 h-full w-full'>
          <StayUpToDateForm />

          <div className='ring ring-zinc-700/50 p-6 rounded-2xl shadow-sm'>
            <div className='flex items-center gap-1'>
              <CpuIcon className='text-zinc-400 size-6' />
              <h4 className='text-lg font-semibold text-zinc-200 tracking-wide'>
                Main languages
              </h4>
            </div>

            <TechStack />

            <div className='flex w-full gap-2 justify-between mt-5'>
              <Button icon={<Download className='size-5' />} className='flex-1'>
                Download CV
              </Button>
              <Button
                icon={<MoreHorizontal className='size-5' />}
                className='flex-1 gap-1'
              >
                <Link href='/projects'>More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='w-full flex flex-col mt-28'>
        <h2 className='text-2xl md:text-4xl text-zinc-200 font-bold after:bg-emerald-500 after:content-[""] after:absolute after:w-26 after:h-0.5 after:left-0 after:bottom-0 relative'>
          About me
        </h2>
        <AboutGrid />
      </section>

      <section id='contact' className='w-full flex flex-col mt-28'>
        <h2 className='text-2xl md:text-4xl text-zinc-200 font-bold after:bg-emerald-500 after:content-[""] after:absolute after:w-26 after:h-0.5 after:left-0 after:bottom-0 relative'>
          Contact me
        </h2>

        <p className='text-zinc-400 text-lg tracking-wider'>
          Are you interested in working with me?{' '}
          <span className='text-zinc-100'>Let&apos;s talk!</span>
        </p>

        <ContactForm />
      </section>
    </>
  );
}

export default Page;
