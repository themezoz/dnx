// import paths from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'overview',
    subheader: 'Overview',
    path: '/',
    icon: 'mynaui:grid',
    active: true,
  },
  {
    id: 'task',
    subheader: 'Task',
    path: '#!',
    icon: 'ion:book-outline',
  },
  {
    id: 'mentors',
    subheader: 'Mentors',
    path: '#!',
    icon: 'mynaui:user-hexagon',
  },
  {
    id: 'messages',
    subheader: 'Messages',
    path: '#!',
    icon: 'mynaui:message-dots',
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: '#!',
    icon: 'ion:settings-outline',
  },
  {
    id: 'authentication',
    subheader: 'Authentication',
    icon: 'mynaui:lock-password',
    active: true,
    items: [
      {
        name: 'Login',
        pathName: 'login',
        path: '#!',
      },
      {
        name: 'Signup',
        pathName: 'signup',
        path: '#!',
      },
    ],
  },
];

export default sitemap;