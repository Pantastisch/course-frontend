import './index.css'

import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import LoginView from './views/LoginView.tsx';
import MainView from './views/MainView.tsx';
import ProfileView from './views/ProfileView.tsx';
import { Provider } from 'react-redux'
import RegisterView from './views/RegisterView.tsx';
import store from './store'

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainView />,
        },
        {
            path: "/profile",
            element: <ProfileView />,
        },
        {
            path: "/register",
            element: <RegisterView />,
        },
        {
            path: "/login",
            element: <LoginView />,
        },
        {
            path: "/logout",
            element: <div>Logout</div>,
        },
        {
            path: "*",
            element: <div>404</div>,
        },
    ]);

    return (
        <Provider store={store}>
            <div className='bg-amber-300 h-screen'>
                <RouterProvider router={router} />
            </div>
        </Provider>
    );

}

export default App;