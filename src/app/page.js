import InfinitieScroll from '@/components/InfinitieScroll';
import About from '@/components/shared/About';
import Contact from '@/components/shared/Contact';
import Header from '@/components/shared/Header';
import Projects from '@/components/shared/Projects';

function Page() {
  return (
    <>
      <Header />

      <InfinitieScroll />

      <Projects />

      <About />

      <Contact />
    </>
  );
}

export default Page;
