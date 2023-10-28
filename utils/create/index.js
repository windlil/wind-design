import chalk from 'chalk'
import { createComponent } from '../createComponent/create.js'
import { createPage } from '../createTestVue/createPage.js'

const componentsPath = './packages/components/src'

function create() {
  const commands = process.argv.splice(2)

  if (commands.length === 0) {
    console.log(chalk.red('缺少必要参数'))
    return
  }
  for (const item of commands) {
    createComponent(componentsPath, item)
  }
  createPage(commands)
}

create()