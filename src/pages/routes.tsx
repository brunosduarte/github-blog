import { createBrowserRouter } from 'react-router-dom'
import { Post } from '@/components/Post'
import { Home } from './Home'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/:id/', element: <Post /> },
])