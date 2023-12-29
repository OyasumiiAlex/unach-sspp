//File DEMOS options where there's three options
import {
    Box,
    Button,
    Card,
    Drawer,
    Icon,
    IconButton,
    styled,
    ThemeProvider,
    Tooltip,
    useTheme
  } from '@mui/material';
  import useSettings from 'app/hooks/useSettings';
  import { Fragment, useState } from 'react';
  import { themeShadows } from '../theme/themeColors'; 
  import { H5, Span } from '../typography/Typography';
  import BadgeSelected from './BadgeSelected'; 
  
  const Label = styled(Span)(({ theme }) => ({
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    marginBottom: '2.5rem',
    letterSpacing: '1.5px',
    padding: '.25rem .5rem',
    transform: 'rotate(90deg)',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.dark,
    '&:hover, &.open': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  }));
  
  const CCustomaizer = styled('div')(({ theme }) => ({
    top: 0,
    right: 0,
    zIndex: 50,
    width: 320,
    display: 'flex',
    height: '100vh',
    position: 'fixed',
    flexDirection: 'column',
    boxShadow: themeShadows[12],
    background: theme.palette.background.default,
    '& .helpText': { margin: '0px .5rem 1rem' }
  }));
  
  const LayoutBox = styled(BadgeSelected)(() => ({
    width: '100%',
    height: '152px !important',
    cursor: 'pointer',
    marginTop: '12px',
    marginBottom: '12px',
    '& .layout-name': { display: 'none' },
    '&:hover .layout-name': {
      zIndex: 12,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.3)'
    }
  }));
  
  const Controller = styled('div')(() => ({
    minHeight: 50,
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    padding: '14px 20px',
    boxShadow: themeShadows[6],
    justifyContent: 'space-between'
  }));
  
  const IMG = styled('img')(() => ({ width: '100%' }));
  
  const CCustomizer = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [tabIndex] = useState(0);
    const { settings, updateSettings } = useSettings();
    const secondary = theme.palette.text.secondary;
  
    const tooglePanel = () => setOpen(!open);
  
    let activeTheme = { ...settings.themes[settings.activeTheme] };
  
    return (
      <Fragment>
        <Tooltip title="Theme Settings" placement="left">
          <Label className="open" onClick={tooglePanel}>
            Temas
          </Label>
        </Tooltip>
        <ThemeProvider theme={activeTheme}>
          <Drawer open={open} anchor="right" variant="temporary" onClose={tooglePanel} ModalProps={{ keepMounted: true }}>
            <CCustomaizer>
              <Controller>
                {/*Icono de theme*/}
                <Box display="flex">
                  <Icon className="icon" color="primary">settings</Icon>
                  <H5 sx={{ ml: 1, fontSize: '1rem' }}> Elige un tema</H5>
                </Box>
                <IconButton onClick={tooglePanel}>
                  <Icon className="icon">close</Icon>
                </IconButton>
              </Controller>
              {tabIndex === 0 && (
                <Box sx={{ mb: 4, mx: 3 }}>
                  <Box sx={{ color: secondary }}>Layouts</Box>
                  <Box display="flex" flexDirection="column">
                    {demoLayouts.map((layout) => (
                      <LayoutBox key={layout.name} color="secondary" badgeContent={'Pro'} invisible={!layout.isPro}>
                        <Card elevation={4} sx={{ position: 'relative' }} onClick={() => updateSettings(layout.options)}>
                          <Box sx={{ overflow: 'hidden' }} className="layout-name">
                            <Button variant="contained" color="secondary">
                              {layout.name}
                            </Button>
                          </Box>
                          <IMG src={layout.thumbnail} alt={layout.name} />
                        </Card>
                      </LayoutBox>
                    ))}
                  </Box>
                </Box>
              )}
            </CCustomaizer>
          </Drawer>
        </ThemeProvider>
      </Fragment>
    );
  };
  //Slidebar Demos options Light, Dark and compact
  const demoLayouts = [
    //To see the palette colors check the /themeColors.js file
    {
      isPro: false,
      name: 'Tema Claro',
      thumbnail: '/assets/images/screenshots/layout1-customizer.png',
      options: {
        activeTheme: 'blue',
        activeLayout: 'layout1',
        layout1Settings: {
          topbar: { theme: 'goldLight', fixed: true },
          leftSidebar: { mode: 'full', theme: 'blue', bgOpacity: 0.98 }
        },
        footer: { theme: 'goldLight' }
      }
    },
    {
      isPro: false,
      name: 'Compacto',
      thumbnail: '/assets/images/screenshots/layout5-customizer.png',
      options: {
        activeTheme: 'blue',
        activeLayout: 'layout1',
        layout1Settings: {
          topbar: { theme: 'whiteBlue', fixed: true },
          leftSidebar: { mode: 'compact', theme: 'slateDark1', bgOpacity: 0.92 }
        }
      }
    },
    {
      isPro: false,
      name: 'Tema Oscuro',
      thumbnail: '/assets/images/screenshots/layout1-blue-customizer.png',
      options: {
        activeTheme: 'blue',
        activeLayout: 'layout1',
        layout1Settings: {
          topbar: { theme: 'blueDark', fixed: true },
          leftSidebar: { mode: 'full', theme: 'slateDark1', bgOpacity: 0.92 }
        }
      }
    }
  ];
  
  export default CCustomizer;