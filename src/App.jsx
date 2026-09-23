import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import IndividualProjectPage from './pages/IndividualProjectPage'
import Layout from './layout'
import NotFoundPage from './pages/NotFoundPage'
import ResumePage from './pages/ResumePage'

const routes = [{
  path: '/',
  element: <Layout/>,
  errorElement: <NotFoundPage/>,
  children: [
    {
      path: '/portfolio',
      element: <HomePage/>
    },
    {
      path: '/portfolio/about',
      element: <AboutPage/>
    },
    {
      path: '/portfolio/projects',
      element: <ProjectsPage/>
    },
    {
      path: '/portfolio/resume',
      element: <ResumePage/>
    },
    {
      path: '/portfolio/projects/:name',
      element: <IndividualProjectPage/>
    }
  ]
}]
  

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router = {router}/>
    </>
    
  );
}

export default App
