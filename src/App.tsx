import React, { Fragment, Suspense, useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Loading } from './components';
import { BODY_ONLY, HEADER_ONLY } from './constants';
import { BodyOnlyLayout, DefaultLayout, HeaderOnlyLayout } from './layouts';
import { mainRoutes } from './routes';
import { scrollTop } from './utils';

const App: React.FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    scrollTop();
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        {mainRoutes.map(route => {
          const { path, layout, ...props } = route;
          const Page = route.element;
          let Layout;
          switch (layout) {
            case null:
              Layout = Fragment;
              break;
            case HEADER_ONLY:
              Layout = HeaderOnlyLayout;
              break;
            case BODY_ONLY:
              Layout = BodyOnlyLayout;
              break;
            default:
              Layout = DefaultLayout;
          }
          const element = (
            <Layout path={path}>
              <Suspense fallback={<Loading />}>
                <Page />
              </Suspense>
            </Layout>
          );

          return <Route key={path} path={path} {...props} element={element} />;
        })}
      </Routes>
    </div>
  );
};

export default App;
