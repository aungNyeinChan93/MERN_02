import { createBrowserRouter } from 'react-router';
import MasterLayout from './layouts/MasterLayout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import WorkoutPage from './pages/Workout/WorkoutPage';
import WorkoutCreatePage from './pages/Workout/WorkoutCreatePage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MasterLayout,
        children: [
            { index: true, Component: HomePage },
            { path: '/about', Component: AboutPage },
            { path: '/workouts', Component: WorkoutPage },
            { path: '/workouts/create', Component: WorkoutCreatePage },
        ]
    }
]);


export default router;

