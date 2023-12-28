import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root_layout';
import Login from './pages/Login_page';
import Registerprof1 from './pages/registerProf';
import PostJob from './pages/post_job';
import LandingPage from './pages/Landing_page';
import Product from "./pages/payment_page";
import BlogPage from './pages/Blog';
import Pageone from './pages/pageone';
import ForgotPass from "./pages/reset_passwrd"
import VerifyOTPForm from "./pages/reset_pswrd2"
import UpdatePasswordForm from "./pages/pswrdchange"
import TempPayment from "./pages/TempPayment"
import GetIdeaPage from "./pages/IndivisualIdea"
import CreateProfileForm from "./pages/Profile-page"
import MainProfilePage from "./pages/main_profile"
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Root />, children: [
        { index: true, element: <Pageone /> },
        { path: '/jobs', element: <LandingPage /> },
        { path: '/post-job', element: <PostJob /> },
        { path: '/temp-payment', element: <TempPayment /> },
        { path: "/product", element: <Product /> },
        { path: '/blogPage', element: <BlogPage /> },
        { path: "/get-idea/:id", element: <GetIdeaPage /> },
        { path: '/profile', element: <MainProfilePage /> },
        { path: '/profile-page', element: <CreateProfileForm /> }
      ]
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Registerprof1 /> },
    { path: '/forgot-pswrd', element: <ForgotPass /> },
    { path: "/verify-otp", element: <VerifyOTPForm /> },
    { path: "/update-password", element: <UpdatePasswordForm /> }

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
