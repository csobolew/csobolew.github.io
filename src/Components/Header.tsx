import { Text, ActionIcon, Anchor, ColorScheme, Drawer, Title, Burger, Transition } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface HeaderProps {
    dark: Boolean;
    colorScheme: ColorScheme;
    toggleColorScheme: (value?: ColorScheme) => void;
}


const Header = (props: HeaderProps) => {
    const navigate = useNavigate();
    const [opened, setOpened] = React.useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
    return (
        <header>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="theme-color"
                        content={props.dark ? "#1a1b1e" : "#ffffff"}
                    />
                </Helmet>
            </HelmetProvider>

            <div className="content-title">
                <div style={{ display: "flex" }}>
                    <Text
                        variant="gradient"
                        gradient={
                            props.dark
                                ? { from: "yellow", to: "yellow", deg: 45 }
                                : { from: "cyan", to: "cyan", deg: 45 }
                                
                        }
                        sx={{ fontFamily: "Greycliff CF, sans-serif"}}
                        ta="left"
                        fz="1.3rem"
                        fw={700}
                        component="a"
                        href="/#/"
                    >
                        Carson Sobolewski
                    </Text>
                </div>
                <div className="navbar">
                    <div className="navbar-item">
                        <Text inherit onClick={() => {
                            navigate("/", { state: { targetId: 'project' } });
                        }}>Projects</Text>
                    </div>
                    <div className="navbar-item">
                        <Text inherit onClick={() => {
                                navigate("/", { state: { targetId: 'research' } });
                        }}>Research</Text>
                    </div>
                    <div className="navbar-item">
                        <Anchor href="/#/about" inherit>About Me</Anchor>
                    </div>
                    <div className="navbar-item">
                        <ActionIcon
                            variant="outline"
                            color={props.dark ? "yellow" : "cyan"}
                            onClick={() => props.toggleColorScheme()}
                            title="Toggle Color Scheme"
                            style={{ marginLeft: "auto" }}
                        >
                            {props.dark ? (
                                <IconSun size="20px" />
                            ) : (
                                <IconMoonStars size="20px" />
                            )}
                        </ActionIcon>
                    </div>
                </div>
            </div>

            <div className="content-mobile">
                        <Text
                            variant="gradient"
                            gradient={
                                props.dark
                                    ? { from: "yellow", to: "yellow", deg: 45 }
                                    : { from: "cyan", to: "cyan", deg: 45 }
                                    
                            }
                            sx={{ fontFamily: "Greycliff CF, sans-serif"}}
                            ta="left"
                            fz="1.3rem"
                            fw={700}
                            component="a"
                            href=""
                        >
                            Carson Sobolewski
                        </Text>
                        <ActionIcon
                            variant="outline"
                            color={props.dark ? "yellow" : "cyan"}
                            onClick={() => props.toggleColorScheme()}
                            title="Toggle Color Scheme"
                            style={{ marginLeft: "auto"}}
                        >
                            {props.dark ? (
                                <IconSun size="20px" />
                            ) : (
                                <IconMoonStars size="20px" />
                            )}
                    </ActionIcon>
                <div className="burger-button">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        title={title}
                        size="sm"
                    />
                </div>

                <Drawer
                    transitionProps={{transition: "rotate-right", duration: 250, timingFunction: 'ease'}}
                    overlayProps={{opacity: 0.55}}
                    closeButtonProps={{'aria-label': "Close drawer"}}
                    position="right"
                    title="Menu"
                    padding="xl"
                    opened={opened}
                    onClose={() => setOpened(false)}
                >
                    <div className="menu">
                        <div className="menu-items">
                            <div className="menu-item"><Text component='a' inherit href="/#/" onClick={() => {setOpened(false)}}><Title order={2}>Home</Title></Text></div>
                            <div className="menu-item"><Text inherit onClick={() => {navigate("/", { state: { targetId: 'project' } }); setOpened(false);}}><Title order={2}>Projects</Title></Text></div>
                            <div className="menu-item"><Text inherit onClick={() => {navigate("/", { state: { targetId: 'research' } }); setOpened(false);}}><Title order={2}>Research</Title></Text></div>
                            <div className="menu-item"><Text component='a' inherit href="/#/about" onClick={() => {setOpened(false)}}><Title order={2}>About Me</Title></Text></div>
                        </div>
                    </div>
                </Drawer>
            </div>
        </header>
    );
};

export default Header;
