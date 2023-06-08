import { Container, Title, Card, Image, Group, Text, createStyles, Button } from '@mantine/core';

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

    return (
        <section id='research'>
            <Container size='xl'>
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
                                        <Button style={{marginLeft: 'auto', color: 'var(--link-color)', background: 'var(--banner-background)'}} fullWidth mt='md' radius='md'>
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
                                <div style={{paddingLeft: '2vh', paddingBottom: '2vh'}}>
                                    <Title mt='md' order={2}>Car Safety Prediction</Title>
                                    <div className='research-text'>
                                    <Text mt='sm'>
                                        Using PyTorch and OpenCV to create software that can automatically determine whether a vehicle in a predicted image is in a safe position.
                                    </Text>
                                    </div>
                                    <Button style={{color: 'var(--link-color)', background: 'var(--banner-background)'}} fullWidth mt='md' radius='md'>
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