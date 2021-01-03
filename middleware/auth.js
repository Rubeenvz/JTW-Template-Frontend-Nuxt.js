export default function ({ store, redirect }) {
  if (!store.state.auth && !store.state.auth.loggedIn) {
    redirect('/')
  }
}
