import './App.css'
import "./pages/Create_form"
import Create_form from './pages/Create_form'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Projects from './pages/Projects';
import StdntProject from './pages/Project_visit';
import Root from './components/Root_layout';
function App() {
  const router = createBrowserRouter([
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
