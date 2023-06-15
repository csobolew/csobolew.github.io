import { Container, Group, Text, List, SimpleGrid, Image, ThemeIcon, createStyles } from '@mantine/core'
import { IconAlignBoxLeftMiddle, IconChevronRight } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
    inner: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: '5vh',
      paddingBottom: 'auto',
    },

    content: {
      maxWidth: 480,
      marginRight: '5vh',
  
      [theme.fn.smallerThan("md")]: {
        maxWidth: "100%",
        marginRight: 0,
      },
    },
  
    title: {
      fontSize: 44,
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan("xs")]: {
        fontSize: 28,
      },
    },
  
    image: {
      flex: 1,
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
    buttons: {
        flex: 1,
        justifyContent: 'center',
        [theme.fn.largerThan("md")]: {
            display:"none",
        },
    },
    icons: {
        margin: '5px'
    },
    icondiv: {
        [theme.fn.smallerThan("md")]: {
            marginLeft: '10px',
        },
    },
  
    highlight: {
      position: "relative",
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      borderRadius: theme.radius.sm,
      padding: "4px 12px",
    },
  }));


const MoreAboutMe = () => {
const { classes } = useStyles();
 return (
    <>
    <section>
    <Container id="aboutPage">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Group>
                <Text
                  color=""
                  component="a"
                  fz={25}
                  fw="bold"
                >
                  About Me
                </Text>
              </Group>

              <Text
                color=""
                mt="md"
                fw={500}
                fz="xl"
              >
                Hi! My name is Carson Sobolewski and I'm a Computer Engineering student in the Honors program
                at the University of Florida. I love to tinker around with technology and build things,
                and currently am very passionate about both embedded development and computer vision research.
                I am an undergraduate researcher in both the Florida Institute for National Security and the Trustworthy
                Engineered Autonomy lab at UF.{" "}
              </Text>
              <br />
              <Text
                color=""
                mt="md"
                fw={500}
                fz="xl"
              >
                I have completed a wide variety of projects on topics that I find interesting, particularly in hardware emulation
                and low level code. Feel free to look at my GitHub and grab my resume using the colored buttons.
              </Text>
              <div className={classes.buttons}>
                    <a href='https://github.com/csobolew'><IconBrandGithub style={{color: 'var(--button-color)'}} size='36px'> </IconBrandGithub></a>
                    <a href='Resume.pdf'><IconAlignBoxLeftMiddle style={{color: 'var(--button-color)'}} size='36px'> </IconAlignBoxLeftMiddle></a>
                </div>
              <Text
                color=""
                mt="md"
                fw={500}
                fz="xl"
              >
                My current main focus is undertaking computer vision and artificial intelligence projects using PyTorch.
              </Text>
              <br />
              <Text
                mt="md"
                fw={500}
                fz="lg"
              >
                Here are a few technologies I’ve been working with recently:
              </Text>

              <List
                mt={30}
                size="sm"
                icon={
                  <ThemeIcon size={20} bg="#0A1A2F">
                    <IconChevronRight size={15} />
                  </ThemeIcon>
                }
              >
                <SimpleGrid cols={2} spacing="sm">
                  <List.Item>
                    <Text
                      color=""
                      fw={500}
                      fz="lg"
                    >
                      Rust
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      color=""
                      fw={500}
                      fz="lg"
                    >
                      Python
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      color=""
                      fw={500}
                      fz="lg"
                    >
                      Angular
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      color=""
                      fw={500}
                      fz="lg"
                    >
                      React
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      color=""
                      fw={500}
                      fz="lg"
                    >
                      C++
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      color=""
                      fw={500}
                      fz="lg"
                    >
                      PyTorch
                    </Text>
                  </List.Item>
                </SimpleGrid>
              </List>
            </div>
            <Image
              src="/Profile.jpg"
              alt="ProfilePicture"
              className={classes.image}
              radius='xl'
              placeholder
              caption={
                <div className={classes.icondiv}>
                    <a href='https://github.com/csobolew' target='_blank' rel='noreferrer'><IconBrandGithub style={{color: 'var(--button-color)'}} size='36px'></IconBrandGithub></a>
                    <a href='Resume.pdf' target='_blank'><IconAlignBoxLeftMiddle style={{color: 'var(--button-color)'}} size='36px'></IconAlignBoxLeftMiddle></a>
                </div>
                }>
            </Image>
        </div>
        
        </Container>
        </section>
    </>
 )
}
export default MoreAboutMe;