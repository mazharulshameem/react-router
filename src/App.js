import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import Friends from "./Components/Friends/Friends";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        { path: "about", element: <About></About> },
        {
          path: "friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>,
        },
        {
          path: '/friend/:friendID',
          loader: async({params}) =>{
           return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`);
          },
          element :<FriendDetails></FriendDetails>
        },
        { path: "products", element: <Products></Products> },
      ],
    },
    { path: "*", element: <div>Page not be found:404</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
