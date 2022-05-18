import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GuestRoute from "./components/Shared/GuestRoute/GuestRoute";
import Navigation from "./components/Shared/Navigation/Navigation";
import ProtectedRoute from "./components/Shared/ProtectedRoute/ProtectedRoute";
import SemiProtectedRoute from "./components/Shared/SemiProtectedRoute/SemiProtectedRoute";
import Activate from "./pages/Activate/Activate";
import Authenticate from "./pages/Authenticate/Authenticate";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<GuestRoute />}>
          <Route path="/" exact element={<Home />}></Route>
        </Route>

        <Route exact path="/authenticate" element={<GuestRoute />}>
          <Route exact path="/authenticate" element={<Authenticate />} />
        </Route>

        <Route path="/activate" element={<SemiProtectedRoute />}>
          <Route path="/activate" element={<Activate />} />
        </Route>

        <Route path="/rooms" element={<ProtectedRoute />}>
          <Route path="/rooms" element={<Rooms />} />
        </Route>





        {/* <Route path="authenticate" element={<Authenticate/>}></Route> */}

        {/* <GuestRoute path="authenticate">
          
        </GuestRoute> */}
{/* 
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

// const GuestRoute = ({children, ...rest}) => {
//   return (
//     <Route {...rest} render={({location}) => {
//       // eslint-disable-next-line no-unused-expressions
//       return (
//         isAuth ? <Navigate to={
//           {
//             pathname: '/rooms',
//             state: {from: location},
//           }
//         }/> : (children)
//       )
//     }}>

//     </Route>
//   );
// }

export default App;
