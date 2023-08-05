import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@/pages/MainPage';
import PostsPage from '@/pages/PostsPage';
import AboutPage from '@/pages/AboutPage';
import SinglePostPage from '@/pages/SinglePostPage';

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/posts/:id',
        component: SinglePostPage
    },
    {
        path: '/about',
        component: AboutPage
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;