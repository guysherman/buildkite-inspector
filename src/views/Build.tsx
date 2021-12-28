/** @jsx TreeCat.createElement **/
// eslint-disable-next-line no-unused-vars
import * as TreeCat from 'treecat'
import { Fragment, FC } from 'treecat'

interface BuildProps {
  branch: string;
  message: string;
  state: string;
  selected: boolean;
  index: number;
}

const PADDING = 1
const MESSAGE_LENGTH = 40
const TRUNCATED_MESSAGE_LENGTH = MESSAGE_LENGTH - 3
const MESSAGE_CELL_LENGTH = MESSAGE_LENGTH + 2 * PADDING

const BRANCH_LENGTH = 10
const TRUNCATED_BRANCH_LENGTH = BRANCH_LENGTH - 3
const BRANCH_CELL_LENGTH = BRANCH_LENGTH + 2 * PADDING

const center = (text: string, cellWidth: number) => {
  const s = cellWidth - text.length
  const padding = Array(((s / 2) | 0) + 1).join(' ')
  return padding + text + padding
}


export const Build: FC<BuildProps> = (props: BuildProps) => {
  const { branch, message, state, selected, index } = props

  let color = 'red'
  switch (state) {
    case 'passed':
    case 'finished':
      color = 'green'
      break
    case 'running':
      color = 'yellow'
      break
    case 'failed':
    case 'canceled':
    case 'canceling':
      color = 'red'
      break
    default:
      color = 'brightBlack'
  }

  const branchText = branch.length > BRANCH_LENGTH ? `${branch.substr(0, TRUNCATED_BRANCH_LENGTH)}...` : branch
  const messageText = message.length > MESSAGE_LENGTH ? `${message.substr(0, TRUNCATED_MESSAGE_LENGTH)}...` : message

  return (
      <Fragment>
        <text top={index} left={0} width={1} style={{ fg: 'black', bg: color }}>{'\uE0B0'}</text>
        <text top={index} left={1} width={BRANCH_CELL_LENGTH} style={{ fg: 'black', bg: color }} >{ center(`\uE0A0 ${branchText}`, BRANCH_CELL_LENGTH) }</text>
        <text top={index} left={14} width={MESSAGE_CELL_LENGTH} style={{ fg: color, bg: 'black' }} >{ center(messageText, MESSAGE_CELL_LENGTH) }</text>

      </Fragment>
  )
}
