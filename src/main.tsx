import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import NoPagaeFound from './pages/404nopage.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import ProfilePage from './pages/profilePage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoPagaeFound />
  },
  {
    path: '/profile/:profileId',
    element: <ProfilePage />,
    errorElement: <NoPagaeFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </Provider>,
)
