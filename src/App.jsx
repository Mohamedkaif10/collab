import './App.css'
import "./pages/Create_form"
// import Create_form from './pages/Create_form'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Projects from './pages/Projects';
// import StdntProject from './pages/Project_visit';
import Root from './components/Root_layout';
import Second from './pages/secondProf';
// import Welcomeprofpage from './pages/wellCome';
// import Successful_pass_reset from './pages/success';
// import Reset_page from './pages/resetPassword';
import Registerprof1 from './pages/registerProf';
// import New_password from './pages/newPassword';
// import Forgot_pass from './pages/forgotPassword';
// import First from './pages/first';
import PostJob from './pages/post_job';
// import PostJob2 from './pages/post_job_2';
import LandingPage from './pages/Landing_page';
import  Product from "./pages/payment_page";
import BlogPage from './pages/Blog';
import Pageone from './pages/pageone';
import Profile from './pages/Profile';
import ForgotPass from "./pages/reset_passwrd"
import VerifyOTPForm from "./pages/reset_pswrd2"
import UpdatePasswordForm from "./pages/pswrdchange"
import TempPayment from "./pages/TempPayment"
function App() {
  const router = createBrowserRouter([
  {path:'/',element:<Root/>,children:[
    {index:true,element:<Pageone/>},
    { path:'jobs', element: <LandingPage /> },
    {path:'/job1',element:<PostJob/>},
   {path:'temp-payment',element:<TempPayment/>},
    {path:"/product",element:<Product/>},
    {path:'/blogPage',element:<BlogPage/>},
    {path:'/profile',element:<Profile/>}
  ]},
  {path:"/second",element:<Second/>},
    { path: "/register", element: <Registerprof1 /> },
    {path:'/forgot-pswrd',element:<ForgotPass/>},
    {path:"/verify-otp",element:<VerifyOTPForm/>},
    {path:"/update-password",element:<UpdatePasswordForm/>}
    // { path: "/second", element: <Second /> },
    // { path: "/forgotPass", element: <Forgot_pass /> },
    // { path: "/newPass", element: <New_password /> },
    // { path: "/resetPage", element: <Reset_page /> },
    // { path: "/welcome", element: <Welcomeprofpage /> },
    // { path: "/successPass", element: <Successful_pass_reset /> },
    // { path: "projects", element: <Projects /> },
    // {
    //   path: "/", element: <Root />, children: [
    //     { path: "create_form", element: <Create_form /> },
    //     { path: "stdntForm", element: <StdntProject /> }
    //   ]
    // }

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
