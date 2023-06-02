import { Badge, Button, Text, ActionIcon, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import React from 'react'
import { useState } from 'react';

interface HeaderProps {
    dark: Boolean;
    colorScheme: ColorScheme;
    toggleColorScheme: (value?:ColorScheme) => void;
}

const Header = (props : HeaderProps) => {
    return(
        <header>
            <div className="content-title">
                <div style={{ display: "flex" }}>
                <Text
                variant="gradient"
                gradient={props.dark ? {from: 'yellow', to: 'yellow', deg: 45} : {from: 'cyan', to:'cyan', deg: 45}}
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="left"
                fz="xl"
                fw={700}
                >Carson Sobolewski</Text>  
                </div>
                <div className="navbar">
                    <div className="navbar-item">
                        <ActionIcon
                        variant="outline"
                        color={props.dark ? 'yellow' : 'cyan'}
                        onClick={() => props.toggleColorScheme()}
                        title="Toggle Color Scheme"
                        style={{ marginLeft: "auto"
                        }}
                        >
                        {props.dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
                        </ActionIcon>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;