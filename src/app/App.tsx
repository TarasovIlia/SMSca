import type { Component } from 'solid-js'

import { Route, Router } from '@solidjs/router'

import { AuthPage } from '~/pages/auth'
import { HomePage } from '~/pages/home'

const App: Component = () => (
  <Router>
    <Route path='/' component={AuthPage} />
    <Route path='/home' component={HomePage} />
  </Router>
)

export default App
