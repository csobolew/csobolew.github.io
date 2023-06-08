import { Container, Text, MediaQuery, Button, Anchor } from '@mantine/core';
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-scroll';
const Banner = () => {
    return(
        <section id="banner">
            <Container fluid>
            <div className="banner-content">

                <div style={{ marginBottom: 10 }}>
                    <Text>
                        <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>
                            <h1 className="title">Carson Sobolewski</h1>
                        </MediaQuery>
                    </Text>
                </div>

                <div style={{ marginBottom: 20 }}>
                    <Text size="xl">
                        I'm a <a>Computer Engineering</a> major at the University of Florida with a passion for <a>Computer Vision</a> and <a>Embedded Software</a>.
                    </Text>
                </div>

                <div className="buttons">
                    <Link to="project" smooth duration={500}>
                        <Button style={{background: 'var(--button-color)'}} rightIcon={<MdOutlineArrowDownward size={16} />} radius="lg" size="md">My Projects</Button>
                    </Link>

                    <Link to='about' smooth duration={500}>
                        <Button variant="default" radius="lg" size="md">More About Me</Button>
                    </Link>
                </div>

                </div>
            </Container>
        </section>
    )
};

export default Banner;