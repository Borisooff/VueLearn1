import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@/pages/MainPage';
import PostsPage from '@/pages/PostsPage';
import AboutPage from '@/pages/AboutPage';
import SinglePostPage from '@/pages/SinglePostPage';
import PostPageWithStore from '@/pages/PostPageWithStore';

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
    {
        path: '/store',
        component: PostPageWithStore
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;