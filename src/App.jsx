import './App.css'
import "./pages/Create_form"
import Create_form from './pages/Create_form'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Projects from './pages/Projects';
import StdntProject from './pages/Project_visit';
import Root from './components/Root_layout';
import Second from './pages/secondProf';
import Welcomeprofpage from './pages/wellCome';
import Successful_pass_reset from './pages/success';
import Reset_page from './pages/resetPassword';
import Registerprof1 from './pages/registerProf';
import New_password from './pages/newPassword';
import Forgot_pass from './pages/forgotPassword';
import First from './pages/first';
function App() {
  const router = createBrowserRouter([

    {path:"/home",element:<First/>},
    {path:"/register",element:<Registerprof1/>},
    {path: "/second", element : <Second/> },
    {path:"/forgotPass",element:<Forgot_pass/>},
    {path:"/newPass",element:<New_password/>},
    {path:"/resetPage",element:<Reset_page/>},
    {path:"/welcome",element:<Welcomeprofpage/>},
    {path:"/successPass",element:<Successful_pass_reset/>},
    {path:"/",element:<Root/>,children:[
      {index:true,element:<Create_form/>},
      {path:"/projects",element:<Projects/>},
      {path:"/stdntForm",element:<StdntProject/>}
    ]}
  
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
