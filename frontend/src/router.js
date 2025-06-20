import { createBrowserRouter } from 'react-router';
import MasterLayout from './layouts/MasterLayout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import WorkoutPage from './pages/Workout/WorkoutPage';
import WorkoutCreatePage from './pages/Workout/WorkoutCreatePage';
import AuthLayout from './layouts/AuthLayout';
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';
import { authLoader } from './helpers/loaders/authLoader';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MasterLayout,
        loader: authLoader, // !auth return to login
        children: [
            { index: true, Component: HomePage },
            { path: '/about', Component: AboutPage },
            { path: '/workouts', Component: WorkoutPage },
            { path: '/workouts/create', Component: WorkoutCreatePage },
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            { path: 'register', Component: RegisterPage },
            { path: 'login', Component: LoginPage },
        ]
    }
]);


export default router;

