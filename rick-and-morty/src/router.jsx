import { createBrowserRouter } from 'react-router'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import CharactersPage from './pages/CharactersPage.jsx'
import NotFoundPage from './pages/NotFound.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutPage from './pages/AboutPage.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage />},
      { path: "characters", element: <CharactersPage />},
      { path: "*", element: <NotFoundPage />}
    ],
    errorElement: <ErrorPage />
  },
])

export default router