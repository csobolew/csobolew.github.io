import { createStyles, Card, Image, Group, Text, Button, Container, SimpleGrid, Badge, Title } from '@mantine/core';

const projectList = [
    {
        title: 'Multi-Store Search Site',
        image: 'QuickShop.png',
        alt: 'Multi-Store Search Site',
        description: 'A website that searches various websites and combines the results to find the best deals on products.'
    },
    {
        title: 'Basic Rust Operating System',
        image: '',
        alt: 'Rust Operating System',
        description: 'A basic operating system designed using the Rust programming language, with text output to the screen.'
    },
    {
        title: 'Portfolio Site',
        image: '',
        alt: 'Portfolio Site',
        description: "You're here! A portfolio website designed and built with React using Mantine, TypeScript, and SASS."
    },
    {
        title: 'Gameboy Emulator',
        image: '',
        alt: 'Gameboy Emulator',
        description: 'A basic Gameboy Emulator with complete processor emulation (picture and audio processing are a WIP).'
    }
];

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

    const projectCards = projectList.map((project) => (
        <Card shadow='sm' padding='lg' radius='md' key={project.title} withBorder className={classes.card}>
            <Card.Section component='a' href=''>
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
            <Button style={{color: 'var(--link-color)', background: 'var(--banner-background)'}} fullWidth mt='md' radius='md'>
                Learn More
            </Button>
        </Card>
    ));

    return (
        <section id='project'>
            <Container size='xl'>
                <Title>Projects</Title>
                <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1}]}>
                    {projectCards}
                </SimpleGrid>
            </Container>
        </section>
    )
};

export default Projects;