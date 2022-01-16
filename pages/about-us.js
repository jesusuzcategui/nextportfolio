import Head from 'next/head';
import { Col, Container, Row } from 'reactstrap';
import Foot from '../components/Footer';

export default function aboutus() {
    return (
      <>
        <Head>
          <title>Jesus Uzcategui | About us</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <div className='my-5'>
                <Row>
                    <Col sm={12} md={2}>
                        <img src="/jesus.jpg" class="img-thumbnail" alt="Profile foto" />
                    </Col>
                    <Col sm={12} md={10}>
                        <h5 class="display-5">About us</h5>
                        <p>I am passionate and enthusiastic about learning and computing. Every day I try to learn something new or improve my knowledge. Attentive and objective, always looking for the best solution and open to listening or supporting others. I use the available resources to solve the different approaches or problems that the development of the shift could have.</p>
                        <p>For 6 years I started in the development world, affirming my skills for backend development and adapting to the most used environments in the labor market, in the same way, I focused a few years on the frontend and mobile development of hybrid applications.</p>
                    </Col>
                </Row>
            </div>
        </Container>
        <Foot />
      </>
    )
  }