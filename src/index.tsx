/** @jsx TreeCat.createElement **/
import * as TreeCat from 'treecat'
import { MainScreen } from './views/MainScreen'

const main = async () => {
  const rootScreen: TreeCat.blessed.Widgets.Screen = TreeCat.createRootScreen()
  rootScreen.program.on(
    'keypress',
    (_ch: string, key: TreeCat.blessed.Widgets.Events.IKeyEventArg) => {
      if (key.full === 'C-c') {
        process.exit(0)
      }
    }
  )

  TreeCat.render(<MainScreen />, rootScreen)
}

main().catch((e) => {
  console.log('Fatal Error', { e })
  process.exit(-1)
})
