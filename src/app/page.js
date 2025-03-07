import AboutGrid from '@/components/AboutGrid';
import AppNav from '@/components/AppNav';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import InfinitieScroll from '@/components/InfinitieScroll';
import ProjectsGrid from '@/components/ProjectsGrid';
import SocialLinks from '@/components/SocialLinks';
import StayUpToDateForm from '@/components/StayUpToDateForm';
import TechStack from '@/components/TechStack';
import { CpuIcon, Download } from 'lucide-react';
import Image from 'next/image';

function Page() {
  return (
    <>
      <div className='px-14 lg:px-24 py-8'>
        <AppNav />

        <Avatar>
          <Image src='/images/me.jpg' fill alt='Yunes picture' />
        </Avatar>

        <section className='mt-6 flex flex-col gap-6 max-w-2xl'>
          <h1 className='text-2xl md:text-5xl font-bold text-zinc-100'>
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className='text-zinc-400 tracking-wide'>
            I’m Yunes, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>

          <SocialLinks />
        </section>

        <InfinitieScroll />

        <section className='flex flex-col items-center lg:grid lg:grid-cols-2 gap-5'>
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

              <Button
                icon={<Download className='size-5' />}
                className='mt-5 w-full'
              >
                Download CV
              </Button>
            </div>
          </div>
        </section>

        <section className='w-full flex flex-col mt-28'>
          <h2 className='text-2xl md:text-4xl text-zinc-200 font-bold after:bg-emerald-500 after:content-[""] after:absolute after:w-26 after:h-0.5 after:left-0 after:bottom-0 relative'>
            About me
          </h2>
          <AboutGrid />
        </section>

        <section className='w-full flex flex-col mt-28'>
          <h2 className='text-2xl md:text-4xl text-zinc-200 font-bold after:bg-emerald-500 after:content-[""] after:absolute after:w-26 after:h-0.5 after:left-0 after:bottom-0 relative'>
            Contact me
          </h2>

          <p className='text-zinc-400 text-lg tracking-wider'>
            Are you interested in working with me?{' '}
            <span className='text-zinc-100'>Let&apos;s talk!</span>
          </p>

          <ContactForm />
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Page;
