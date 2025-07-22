import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import FilmDetails from './pages/FilmDetails'; // yeni sayfayı import et

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'film-details/:id', // dinamik film detay rotası
        element: <FilmDetails />,
      }
    ]
  }
]);

export default router;
