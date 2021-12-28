/** @jsx TreeCat.createElement **/
// eslint-disable-next-line no-unused-vars
import * as TreeCat from '@guysherman/treecat';
import { Build } from './Build';

export const MainScreen = () => {
  const mainBuild = {
    branch: 'main',
    message: 'PCG-1028: Make sure that this long message gets truncated',
    state: 'passed',
    blocked: false,
  };

  return (
    <box>
      <Build branch={mainBuild.branch} message={mainBuild.message} state={mainBuild.state} selected={true} index={1} />
    </box>
  );
};
