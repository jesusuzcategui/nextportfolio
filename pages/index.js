import Head from 'next/head';
import { Container } from 'reactstrap';
import Foot from '../components/Footer';

import Gallery from '../components/Gallery';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jesus Uzcategui | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='px-0'>
        <Gallery />
      </div>
      <Container>
        <h5 class="display-5">My Skills</h5>
        <p>Hello, I have been in this world of development for more than 8 years and throughout my life, I have learned and developed in different technologies which I present here.</p>
        <Skills />
        <h5 class="display-5">My Projects</h5>
        <p>These are some of my completed projects</p>
        <Projects />
      </Container>
      <Foot />
    </>
  )
}
