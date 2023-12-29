import CSuspense from 'app/components/content/CSuspense';
import useSettings from 'app/hooks/useSettings';
import { MatxLayouts } from './index';

const MatxLayout = (props) => {
  const { settings } = useSettings();
  const Layout = MatxLayouts[settings.activeLayout];

  return (
    <CSuspense>
      <Layout {...props} />
    </CSuspense>
  );
};

export default MatxLayout;
