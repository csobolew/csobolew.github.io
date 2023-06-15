import { createStyles, Card, Image, Group, Text, Button, Container, SimpleGrid, Title, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IconBrandGithub } from '@tabler/icons-react';
const projectList = [
    {
        title: 'Multi-Store Search Site',
        image: 'QuickShop.png',
        alt: 'Multi-Store Search Site',
        description: 'A website that searches various websites and combines the results to find the best deals on products.',
        longDescription: 'This is a website I developed with a group of other students at UF, which searches Walmart and Target ' +
                         'for products, with built in sorting, accounts, and shopping list features. We developed the site using the ' +
                         'Angular framework, with collaboration on GitHub.',
        gitHubLink: 'https://github.com/skirill430/Quick-Shop'
    },
    {
        title: 'Rust Operating System',
        image: 'RustOS.png',
        alt: 'Rust Operating System',
        description: 'A basic operating system designed using the Rust programming language, with text output to the screen.',
        longDescription: '',
        gitHubLink: ''
    },
    {
        title: 'Portfolio Site',
        image: 'Site.png',
        alt: 'Portfolio Site',
        description: "You're here! A portfolio website designed and built with React using Mantine, TypeScript, and SASS.",
        longDescription: '',
        gitHubLink: ''
    },
    {
        title: 'Gameboy Emulator',
        image: 'GB.png',
        alt: 'Gameboy Emulator',
        description: 'A basic Gameboy Emulator with complete processor emulation (picture and audio processing are a WIP).',
        longDescription: '',
        gitHubLink: ''
    }
];

interface projectType {
    title: string,
    image: string,
    alt: string,
    description: string,
    longDescription: string,
    gitHubLink: string
}

const Projects = () => {


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

    const projectCards = projectList.map((project) => (
        <Card shadow='sm' padding='lg' radius='md' key={project.title} withBorder className={classes.card}>
            <Card.Section>
                <Image
                    src={project.image}
                    height={200}
                    alt={project.alt}
                    withPlaceholder
                />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
                <Text weight={500} fz={19} size='md'>{project.title}</Text>
            </Group>
            <Text size='sm' color='dimmed'>
                {project.description}
            </Text>
            <Button style={{color: 'var(--link-color)', background: 'var(--banner-background)'}} fullWidth mt='md' radius='md' onClick={() => {
                open();
                setData(project);
                }}>
                Learn More
            </Button>
        </Card>
    ));

    const { state } = useLocation();
    const { targetId } = state || {};

    useEffect(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({behavior: 'smooth'});
        }
      }, [targetId]);

    return (
        <Element name='project'>
        <section id='project'>
            <Container size='xl'>
                <Title className='project'>Projects</Title>
                <Modal opened={opened} onClose={close} size='80%' padding='0' transitionProps={{ transition: 'fade', duration: 200 }}>
                    <Container size='100%'>
                        <Title order={2}>{data?.title}</Title>
                        <div style={{display:'flex'}}>
                            <Image
                                src={data?.image}
                                height='30vh'
                                width='auto'
                                alt={data?.alt}
                                withPlaceholder
                                caption={
                                <div>
                                <a href={data?.gitHubLink} target='_blank' rel='noreferrer'><IconBrandGithub style={{color: 'var(--button-color)'}} size='36px'></IconBrandGithub></a>
                                </div>
                                }
                            />
                            <div style={{paddingLeft: '20px'}}>
                                <Text weight={500} fz={19} size='md'>Description</Text>
                                <Text size='md'>
                                {data?.longDescription}
                                </Text>
                            </div>
                        </div>

                    </Container>
                </Modal>
                <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1}]}>
                    {projectCards}
                </SimpleGrid>
            </Container>
        </section>
        </Element>
    )
};

export default Projects;