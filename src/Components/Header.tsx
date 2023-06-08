import { Text, ActionIcon, ColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Link } from "react-scroll";

interface HeaderProps {
    dark: Boolean;
    colorScheme: ColorScheme;
    toggleColorScheme: (value?: ColorScheme) => void;
}

const Header = (props: HeaderProps) => {
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
                        href=""
                    >
                        Carson Sobolewski
                    </Text>
                </div>
                <div className="navbar">
                    <div className="navbar-item">
                        <Link to="projects" smooth duration={500}>Projects</Link>
                    </div>
                    <div className="navbar-item">
                        <Link to="research" smooth duration={500}>Research</Link>
                    </div>
                    <div className="navbar-item">
                        <Link to="about" smooth duration={500}>About Me</Link>
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
                                <IconSun size="1.1rem" />
                            ) : (
                                <IconMoonStars size="1.1rem" />
                            )}
                        </ActionIcon>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
