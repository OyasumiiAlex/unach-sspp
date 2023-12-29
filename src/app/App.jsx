import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import CTheme from './components/theme/CTheme';
import { AuthProvider } from './contexts/JWTAuthContext';
import { SettingsProvider } from './contexts/SettingsContext';
import routes from './routes';
import '../fake-db';

const App = () => {
  const content = useRoutes(routes);

  return (
    <SettingsProvider>
      <AuthProvider>
        <CTheme>
          <CssBaseline />
          {content}
        </CTheme>
      </AuthProvider>
    </SettingsProvider>
  );
};

export default App;
