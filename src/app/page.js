import About from '@/components/shared/About';
import Contact from '@/components/shared/Contact';
import Header from '@/components/shared/Header';
import Projects from '@/components/shared/Projects';
import InfinitieScroll from '@/components/ui/InfinitieScroll';

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
