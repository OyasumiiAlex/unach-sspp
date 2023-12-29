//Componente Suspense
import { Suspense } from 'react';
import Loading from 'app/components/content/Loading';

const CSuspense = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default CSuspense;