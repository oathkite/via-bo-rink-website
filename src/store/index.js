export const state = () => ({
  isSoundOn: false
})

export const getters = {
  isSoundOn: state => state.isSoundOn
}

export const mutations = {
  toggleSound (state) {
      state.isSoundOn = !state.isSoundOn
  }
}
