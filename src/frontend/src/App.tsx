import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PredictionsPage from './pages/PredictionsPage';
import PredictionDetailPage from './pages/PredictionDetailPage';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const predictionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/predictions',
  component: PredictionsPage,
});

const predictionDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/predictions/$id',
  component: PredictionDetailPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  predictionsRoute,
  predictionDetailRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
