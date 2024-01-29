export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  // Redirect to home page if user is logged in
  if (authStore.isLoggedIn && ['/auth/signin', '/auth/signup'].includes(to.path)) return navigateTo('/')
  // Redirect to login page if user is not logged in
  if (!authStore.isLoggedIn && !['/auth/signin', '/auth/signup'].includes(to.path)) return navigateTo('/auth/signin')
})
