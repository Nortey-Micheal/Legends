import { StrictMode,lazy,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.ts'

//Lazy load pages
const App = lazy(() => import("./pages/App.tsx"));
const NoPageFound = lazy(() => import("./pages/404nopage.tsx"));
const ProfilePage = lazy(() => import("./pages/profilePage.tsx"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoPageFound />
  },
  {
    path: '/profile/:profileId',
    element: <ProfilePage />,
    errorElement: <NoPageFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
    </StrictMode>
  </Provider>,
)
