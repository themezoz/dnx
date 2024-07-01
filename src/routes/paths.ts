export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'auth',
  errorRoot: 'error',
};

export default {
  dashboard: `/${rootPaths.pageRoot}/dashboard`,
  task: `/${rootPaths.pageRoot}/task`,
  mentors: `/${rootPaths.pageRoot}/mentors`,
  messages: `/${rootPaths.pageRoot}/messages`,
  settings: `/${rootPaths.pageRoot}/settings`,

  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/signup`,
  forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
  404: `/${rootPaths.errorRoot}/404`,
};
