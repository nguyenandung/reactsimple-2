import { lazy } from 'react';
import { BODY_ONLY } from 'src/constants';

const mainRoutes: Array<any> = [
  {
    path: '/',
    index: true,
    element: lazy(() => import('../pages/Home'))
  },
  {
    path: '/blogs',
    index: true,
    element: lazy(() => import('../pages/Blogs'))
  },
  {
    path: '/blogs/:id/*',
    index: true,
    element: lazy(() => import('../pages/BlogDetails'))
  },
  {
    path: '/contacts',
    index: true,
    element: lazy(() => import('../pages/Contacts'))
  },
  {
    path: '*',
    element: lazy(() => import('../pages/NotFound')),
    layout: BODY_ONLY
  }
];

export default mainRoutes;
