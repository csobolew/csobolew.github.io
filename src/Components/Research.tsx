import { Container, Title, Card, Image, Group, Text, createStyles, Button, Modal, List, SimpleGrid } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import { useMediaQuery, useDisclosure} from '@mantine/hooks';
import { useState } from 'react';

const researchList = [
    {
        title: 'PCB Reverse Engineering',
        image: 'points.jpg',
        alt: 'PCB Reverse Engineering',
        longDescription: 'In this research project with the Florida Institute for National Security, I work on creating a pipeline for the automatic recreation of ' +
                         'KiCad PCB design files from raw data obtained from X-ray tomography of existing boards. The aim of this project is to completely automate ' +
                         'the process of reverse engineering printed circuit boards without existing design files. This could prove especially useful for adding onto or customizing ' +
                         'systems that rely on legacy boards.\n\n' +
                         'My code is written in Python, using libraries such as OpenCV, pandas, and pillow. Because of the irregular nature of x-ray images and the inconsistency ' +
                         'of our data, my code automatically rotates and aligns images, and calculates various values to eliminate outliers and properly recreate images. ' +
                         'In addition, I have written code that automatically detects the center line and widths of various traces from raw labeled data of the outlines of a polygon. ' +
                         "Current results aren't perfect, but are getting closer and closer to accurately recreating the exact board represented in x-ray tomography images." +
                         'We aim to publish this paper later this year.',
        technologies: ['Python', 'Computer Vision', 'Data Analysis', 'OpenCV', 'KiCad']
    },
    {
        title: 'Car Safety Prediction',
        image: '0ori.png',
        alt: 'Car Safety Prediction',
        longDescription: 'For this project, the aim is to take top-down images of a car from a simulator and train AI to classify whether the car is in a safe position. ' +
                         'We generate future images from a series of existing images, and then use the predicted images with the classifier to determine predictions for whether the ' +
                         'car is likely to stay on the road within a given time frame. ' +
                         'For my contribution, I trained a classifier for the predicted images using transfer learning that has 99% accuracy. I achieved this by automatically analyzing and ' +
                         'cropping images based on where the car is located.\n\n' +
                         'In addition, I have begun work on a classifier that identifies whether a car is safe in a given frame from a 32 point latent vector as opposed to the full image.' +
                         'We hope to publish this paper later this year in a conference in the artificial intelligence field.',
        technologies: ['Python', 'PyTorch', 'OpenCV', 'Computer Vision']
    }
]

interface projectType {
    title: string,
    image: string,
    alt: string,
    longDescription: string,
    technologies: string[]
}

const Research = () => {
    const useStyles = createStyles((theme) => ({
        card: {
          transition: 'transform 150ms ease, box-shadow 150ms ease',
      
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: theme.shadows.md,
          },
        },
      }));

    const { classes } = useStyles();
    const [opened, { open, close }] = useDisclosure(false);
    const [data, setData] = useState<projectType | null>(null);
    const { state } = useLocation();
    const { targetId } = state || {};

    useEffect(() => {
        const el = document.getElementById(targetId);
        if (el) {
        el.scrollIntoView({behavior: 'smooth'});
        }
    }, [targetId]);   
    const isMobile = useMediaQuery("(max-width: 50em)");
    return (
        <section id='research'>
            <Container size='xl'>
            <Modal opened={opened} onClose={close} size='80%' fullScreen={isMobile} padding='0' transitionProps={{ transition: 'fade', duration: 200 }}>
                    <Container size='100%'>
                        <Title order={2}>{data?.title}</Title>
                        <div id='modaldiv'>
                            <Image
                                src={data?.image}
                                id='modalimage'
                                height='30vh'
                                alt={data?.alt}
                                withPlaceholder
                                radius='md'
                            />
                            <div id='textmodaldiv' style={{paddingLeft: '20px', maxWidth: '100vh'}}>
                                <Text weight={500} fz={19} size='md'>Description</Text>
                                <Text size='md'>
                                {data?.longDescription}
                                </Text>
                                <br/>
                                <Text weight={500} fz={19} size='md'>Technologies Used</Text>
                                <List>
                                    <SimpleGrid cols={2}>
                                            {data?.technologies.map(technology => (
                                                <List.Item>
                                                    <Text size='md'>
                                                        {technology}
                                                    </Text>
                                                </List.Item>
                                            ))}
                                    </SimpleGrid>
                                </List>
                            </div>
                        </div>

                    </Container>
                </Modal>
                <Title>Research</Title>
                <div className='card-group'>
                    <Card shadow='lg' padding='lg' radius='md' withBorder className={classes.card}>
                        <Card.Section>
                            <Group position='apart' align='normal'>
                                <div style={{paddingLeft: '2vh', paddingRight: '2vh'}}>
                                    <Title mt='md' order={2}>PCB Reverse Engineering</Title>
                                    <div className='research-text'>
                                        <Text mt='sm'>
                                            Using Python and OpenCV to automatically recreate KiCad design files from data obtained using x-ray tomography on PCBs.
                                        </Text>
                                        <Button style={{marginLeft: 'auto', color: 'var(--link-color)', background: 'var(--banner-background)'}} fullWidth mt='md' radius='md' onClick={() => {
                                        open();
                                        setData(researchList[0]);
                                        }}>
                                        Learn More
                                        </Button>
                                    </div>
                                </div>
                                <Image className='research-image' radius='md' style={{paddingTop: 0}} src='points.jpg'/>
                            </Group>
                        </Card.Section>
                    </Card>
                </div>
                <div style={{paddingTop: '2rem'}} className='card-group'>
                    <Card shadow='lg' padding='lg' radius='md' withBorder className={classes.card}>
                        <Card.Section>
                            <Group position='left' align='normal'>
                                <Image className='research-image' radius='md' style={{paddingTop: 0}} src='0ori.png'/>
                                <div style={{paddingLeft: '2vh', paddingBottom: '2vh', paddingRight: '2vh'}}>
                                    <Title mt='md' order={2}>Car Safety Prediction</Title>
                                    <div className='research-text'>
                                    <Text mt='sm'>
                                        Using PyTorch and OpenCV to create software that can automatically determine whether a vehicle in a predicted image is in a safe position.
                                    </Text>
                                    </div>
                                    <Button style={{color: 'var(--link-color)', background: 'var(--banner-background)'}} fullWidth mt='md' radius='md' onClick={() => {
                                    open();
                                    setData(researchList[1]);
                                    }}>
                                    Learn More
                                    </Button>
                                </div>
                            </Group>
                        </Card.Section>
                    </Card>
                </div>
            </Container>
        </section>
    )
}

export default Research;