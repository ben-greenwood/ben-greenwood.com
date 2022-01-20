import '../styles/globals.css'
import '../public/css/satoshi.css'

import { KBarProvider } from "kbar";

import CommandBar from '../components/CommandBar'
import { actions } from '../utils/command_actions'

function MyApp({ Component, pageProps }) {
  return (
    <KBarProvider actions={actions}>
      <CommandBar/>
      <Component {...pageProps} />
    </KBarProvider>
  )
}

export default MyApp
