export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    // TODO: add types
    async logIn(userInfo: any) {
      this.user = userInfo
    },
    async logOut() {
      this.user = null
    },
  },
  // For simplicity, I used the pinia-persisted-state in order to persist the store data.
  // However another option would have been using the useVue hooks inside the Pinia store's hydration method.
  persist: true,
})