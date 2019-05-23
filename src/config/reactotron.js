// eslint-disable-next-line
import Reactotron, { trackGlobalErrors, openInEditor, asyncStorage } from "reactotron-react-native"

const tron = Reactotron.configure()
  .useReactNative()
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(asyncStorage())
  .connect()

// eslint-disable-next-line
console.tron = tron.log

console.trom = tron.log
