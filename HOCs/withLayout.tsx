import React from 'react';
import Layout from '../components/Layout';

const withLayout = <P extends object>(Component: React.ComponentType<P>) => {
  const WrappedComponent = (props: P) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );

  // Set displayName for better debugging in React DevTools and to satisfy ESLint
  WrappedComponent.displayName = `withLayout(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};

export default withLayout;