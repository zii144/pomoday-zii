import * as React from 'react';
import { KEY_ESC } from '../helpers/utils';
import { StateContext } from './App';
import { useEventListener } from '../helpers/hooks';

const HELP_TEXT = ``;

export const HelpDialog = props => {
  const [state, setState] = React.useContext(StateContext);

  const closeHelp = () => {
    setState({
      ...state,
      showHelp: false,
    });
  };

  const processKey = e => {
    if (e.keyCode === KEY_ESC) {
      closeHelp();
    }
  };

  useEventListener('keyup', processKey);

  return (
    <div className="sm:overflow-hidden p-4 sm:p-8 text-center absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="flex flex-row">
        <div className={'block sm:hidden fixed bottom-0 right-0 m-5 z-50'}>
          <button
            onClick={closeHelp}
            className={
              'sm:hidden text-3xl bg-tomato text-white rounded-full shadow-lg w-16 h-16'
            }>
            ✕
          </button>
        </div>
        <div
          className={
            'block p-5 border border-control bg-background text-foreground rounded-lg shadow-xl'
          }>
          <div className={'text-left'}>
            嗨！完整的使用說明已移至{' '}
            <a
              className={'text-tomato'}
              href={'https://github.com/huytd/pomoday-v2/wiki'}
              target={'_blank'}
              rel={'nofollow'}>
              GitHub
            </a>{' '}
            Wiki。
          </div>
          <div>
            <a
              className={
                'inline-block rounded text-white px-5 py-2 bg-green mx-auto my-5'
              }
              href={'https://github.com/huytd/pomoday-v2/wiki'}
              target={'_blank'}
              rel={'nofollow'}>
              前往 Wiki
            </a>
          </div>
          <div className={'hidden sm:block text-left'}>
            按下 <code>ESC</code> 即可關閉此視窗。
          </div>
        </div>
      </div>
    </div>
  );
};
