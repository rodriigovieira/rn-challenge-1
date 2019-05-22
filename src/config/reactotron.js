// eslint-disable-next-line
import Reactotron, { trackGlobalErrors, openInEditor, asyncStorage } from "reactotron-react-native"

Reactotron.configure()
  .useReactNative()
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(asyncStorage())
  .connect()
