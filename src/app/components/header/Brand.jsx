//Codigo del titulo del logo
import { Box, styled } from '@mui/material';
import UnachLogo from 'app/components/cshared/UnachLogo'; 
import useSettings from 'app/hooks/useSettings';
import { Span } from '../typography/Typography';


const BrandRoot = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px 20px 15px 10px',
}));

const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 20,
  marginLeft: '20px',
  display: mode === 'compact' ? 'none' : 'block',
}));

const Brand = ({ children }) => {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <UnachLogo />
        <StyledSpan mode={mode} className="sidenavHoverShow">
          CSSyPP
        </StyledSpan>
      </Box>
    </BrandRoot>
  );
};

export default Brand;
