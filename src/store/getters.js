export default {
  animalsCount: (state) => {
    return state.dogs.length + state.cats.length
  }
}
