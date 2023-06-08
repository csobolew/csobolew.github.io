import { Card, Image, Group, Text, Button, Container, SimpleGrid, Badge, Title } from '@mantine/core';

const projectList = [
    {
        title: 'Multi-Store Search Site',
        image: 'https://placehold.jp/300x200.png',
        alt: 'Multi-Store Search Site',
        description: 'A website that searches various websites and combines the results to find the best deals on products.'
    },
];

const Projects = () => {
    const projectCards = projectList.map((project) => (
        <Card shadow='sm' padding='lg' radius='md' withBorder>
            <Card.Section component='a' href=''>
                <Image
                    src={project.image}
                    mah={500}
                    alt={project.alt}
                />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
                <Text weight={500} fz={19} size='md'>{project.title}</Text>
                <Badge color='yellow' size='lg'>
                    New!
                </Badge>
            </Group>
            <Text size='sm' color='dimmed'>
                {project.description}
            </Text>
            <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
                Learn More
            </Button>
        </Card>
    ));

    return (
        <section id='project'>
            <Title>Projects</Title>
            <Container size='xl'>
                <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1}]}>
                    {projectCards}
                </SimpleGrid>
            </Container>
        </section>
    )
};

export default Projects;