import { createStyles, Card, Image, Group, Text, Button, Container, SimpleGrid, Title, Modal, List } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
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
                         'Angular framework, with collaboration on GitHub.\n\n' +
                         'Throughout the development process, I also directly interacted with a backend written in the Go language and a ' +
                         'database written in SQLite. ' +
                         'I wrote GitHub actions to automate continuous integration, and set up an Oracle compute instance to automatically deploy ' +
                         'both our front end and back end to the same server.\n\n' +
                         'I learned how to implement continuous integration and develop software with a group of other people using Git and GitHub. ' +
                         'I also learned how important it is to set styling and formatting standards before development starts, as things became somewhat messy ' +
                         'at some points in the project.',
        gitHubLink: 'https://github.com/skirill430/Quick-Shop',
        technologies: ['Angular', 'Golang', 'GitHub Actions', 'SQLite', 'API Functionality']
    },
    {
        title: 'Rust Operating System',
        image: 'RustOS.png',
        alt: 'Rust Operating System',
        description: 'A basic operating system designed using the Rust programming language, with text output to the screen.',
        longDescription: 'I came across a website for a course in basic operating system development and decided to try my hand at it, writing ' +
                         'a simple operating system using Rust as opposed to something like C or C++. I figured that Rust would be a good base point for this ' +
                         "due to it's focus on memory safety while maintaining access to low level operations like C and C++.\n\n" +
                         "At first I struggled to get things working, especially because when writing an operating system you can't rely on the standard library " +
                         'like you can with other problems. I found this project very interesting, as it taught me how operating system work and all of the various things ' +
                         'that an operating system is constantly handling in the background. ' +
                         'I hope to expand on this project some time in the future, attempting to add a custom GUI or more user interface and actions.',
        gitHubLink: 'https://github.com/csobolew/RustaceanOS',
        technologies: ['Rust', 'C', 'Operating Systems']
    },
    {
        title: 'Portfolio Site',
        image: 'Site.png',
        alt: 'Portfolio Site',
        description: "You're here! A portfolio website designed and built with React using Mantine, TypeScript, and SASS.",
        longDescription: "I decided to create a completely custom portfolio website from scratch, and you're currently viewing it! " +
                         'This site was written using React with TypeScript and SASS. I decided to use React for the site because I had little previous experience, ' +
                         'and, having written in Angular before, wanted to explore other frameworks. I learned a lot about JSX and the way that React handles code, ' +
                         'which is very different from the way Angular handles things. I liked the less rigid and more freeform structure of React as opposed to Angular, and I chose to use ' +
                         'Mantine for my component library.\n\n' +
                         "With this project, I also decided to use SASS as opposed to standard CSS, as I had read about it and it's advantages over CSS, and wanted to give it a shot. " +
                         'While I still struggled a bit with getting my CSS to work well on both desktop and mobile, being able to nest styles was very useful, and made things much simpler. ' +
                         'I added a light mode and dark mode button that also swaps the colors of various elements on the page by using Mantine along with CSS variables. ' +
                         "I learned a lot about how to develop sites from scratch using a framework and component library, along with how to add animations and reactive components/styling.",
        gitHubLink: 'https://github.com/csobolew/csobolew.github.io',
        technologies: ['ReactJS', 'Mantine', 'TypeScript', 'Syntactically Awesome Style Sheets (SASS)']
    },
    {
        title: 'Gameboy Emulator',
        image: 'GB.png',
        alt: 'Gameboy Emulator',
        description: 'A basic Gameboy Emulator with complete processor emulation (picture and audio processing are a WIP).',
        longDescription: 'I love retro games, and as a result I decided to learn how to write an emulator for one of my favorite consoles, the Nintendo Gameboy. ' +
                         'When first starting with emulation, I made a basic CHIP8 emulator, but afterwards decided to step it up and do the Gameboy. ' +
                         "This project was a big challenge, as it relies on good knowledge of the inner workings of the console and its processor, along with " +
                         'very good timing. I decided to write this program in C++ so that I would have access to direct memory management. ' +
                         "I managed to get all of the opcodes of the Gameboy's CPU working perfectly, and got my emulator to pass the various blargg CPU tests. " +
                         'I started to work on implementing the PPU (picture processing unit) and MMU (memory management unit) but never completed the entire project.\n\n' +
                         'This project taught me a lot about how game systems and computers function, and provided me with more experience in writing C++ code that directly interfaces ' +
                         'with memory. I struggled a lot with getting all of the opcodes to exactly match the original functionality, but it was worthwhile to see the program pass ' +
                         'the various tests afterwards. This project reminds me a lot of my time in Digital Design class, where we analyzed the inner workings and creation of CPUs.',
        gitHubLink: 'https://github.com/csobolew/GB-Emu',
        technologies: ['C++', 'Low level programming']
    }
];

interface projectType {
    title: string,
    image: string,
    alt: string,
    description: string,
    longDescription: string,
    gitHubLink: string,
    technologies: string[]
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
      const isMobile = useMediaQuery("(max-width: 50em)");
    return (
        <Element name='project'>
        <section id='project'>
            <Container size='xl'>
                <Title className='project'>Projects</Title>
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
                                caption={
                                <div>
                                <a href={data?.gitHubLink} target='_blank' rel='noreferrer'><IconBrandGithub style={{color: 'var(--button-color)'}} size='36px'></IconBrandGithub></a>
                                </div>
                                }
                            />
                            <div id='textmodaldiv' style={{paddingLeft: '20px', maxWidth: '70vh'}}>
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
                <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1}]}>
                    {projectCards}
                </SimpleGrid>
            </Container>
        </section>
        </Element>
    )
};

export default Projects;