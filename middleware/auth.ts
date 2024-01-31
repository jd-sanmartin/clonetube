/**
 * Nuxt route middleware for authentication.
 *
 * This middleware function checks the authentication status of the user and performs redirections based on the user's status and the route they are trying to access.
 *
 * If the user is logged in and tries to access the sign in or sign up pages, they are redirected to the home page.
 * If the user is not logged in and tries to access any other page, they are redirected to the sign in page.
 *
 * @param {RouteLocationNormalized} to - The target route location object.
 * @returns {NavigationGuardNextCallback} A navigation guard callback that performs the redirection.
 */
export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  // Redirect to home page if user is logged in
  if (authStore.isLoggedIn && ['/auth/signin', '/auth/signup'].includes(to.path)) return navigateTo('/')
  // Redirect to login page if user is not logged in
  if (!authStore.isLoggedIn && !['/auth/signin', '/auth/signup'].includes(to.path)) return navigateTo('/auth/signin')
})
