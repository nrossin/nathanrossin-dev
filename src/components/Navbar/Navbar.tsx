import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    useTheme
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { ColorModeContext } from '../../theme/ColorModeContext.tsx';

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({activeSection}) => {
    const appName = 'Nathan Rossin';

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const [mobileOpen, setMobileOpen] = useState(false);

    // Navigation buttons to be included in the NavBar
    const navItems = ['Home', 'Resume', 'Projects', 'Contact'];

    // Mobile-friendly menu toggle
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Helper function to scroll to a section
    const scrollTo = (item: string) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
            const yOffset = -64; // To account for the "sticky" navbar
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }

    // Mobile menu drawer
    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <Box>
                <Typography variant="h6" sx={{my: 2}}>
                    {appName}
                </Typography>
                <Divider />
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}}
                                            onClick={() => scrollTo(item)}
                            >
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Color Mode Toggle at the bottom of the drawer */}
            <Box sx={{mb: 2}}>
                <Divider sx={{mb: 1}} />
                <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
        </Box>

    );

    return (
        <>
            <AppBar position="sticky"
                    component="nav"
                    sx={{transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out, border-color 0.5s ease-in-out',}} // Animate the light/dark transition
            >
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    {/*Left: Logo and Title*/}
                    <Typography variant="h6" component="div">
                        Nathan Rossin
                    </Typography>

                    {/*Center: Desktop Links*/}
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Button key={item}
                                    sx={{
                                        color: theme.palette.primary.contrastText,
                                        fontWeight: activeSection === item.toLowerCase() ? 'bold' : 'normal',
                                        borderBottom: activeSection === item.toLowerCase() ? '2px solid' : 'none',
                                        borderColor: activeSection === item.toLowerCase() ? theme.palette.primary.contrastText : 'transparent'
                                    }}
                                    onClick={() => scrollTo(item)}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    {/*Mobile Menu Icon*/}
                    <Box sx={{display: {xs: 'flex', sm: 'none'}}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/*Right: Light / Dark toggle*/}
                    <Box sx={{display: {xs: 'none', sm: 'flex'}}}>
                        <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/*Mobile Drawer Menu*/}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240},
                }}>
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;