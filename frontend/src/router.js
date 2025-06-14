import { createBrowserRouter } from 'react-router';
import MasterLayout from './layouts/MasterLayout';
import HomePage from './pages/Home/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MasterLayout,
        children: [
            { index: true, Component: HomePage }
        ]
    }
]);


export default router;

