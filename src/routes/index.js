const ROUTES_PARAMS = {
  ID: ':id'
}

const API_ROUTES = {
  ROOT: '/',
  REGISTER: '/register',
  LOGIN: '/login',
  TASKS: '/tasks',
  TASKS_BY_ID: `/tasks/${ROUTES_PARAMS.ID}`
}

module.exports = {
  API_ROUTES,
}