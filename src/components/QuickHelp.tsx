import * as React from 'react';
import { KEY_ESC } from '../helpers/utils';
import { StateContext } from './App';
import marked from 'marked';
import { useEventListener } from '../helpers/hooks';

const QUICK_HELP_TEXT = [
  "<img src='https://pomoday-cdn.now.sh/logo.png' style='border: none; box-shadow: none; width: 50%; margin: 10px auto;' /><p style='margin: 5px 0;'>歡迎使用 Pomoday，一款以鍵盤操作為核心的任務管理工具，幫助你維持高效率！</p><p style='margin: 5px 0;'>一起開始體驗吧！</p>",
  '**#1：** 按任意鍵開啟指令輸入框。\n![](https://pomoday-cdn.now.sh/quickhelp/quickhelp-01.gif)',
  '**#2：** 輸入 `t` 或 `task` 建立新的任務。\n![](https://pomoday-cdn.now.sh/quickhelp/quickhelp-02.gif)',
  '**#3：** 使用 `b` 或 `begin` 指令啟動計時，`st` 或 `stop` 結束計時。\n![](https://pomoday-cdn.now.sh/quickhelp/quickhelp-03.gif)',
  '**#4：** 用 `fl` 或 `flag` 標記重要任務，也可以用 `d` 或 `delete` 刪除。\n![](https://pomoday-cdn.now.sh/quickhelp/quickhelp-04.gif)',
  '🎉 你已學會所有基本操作！隨時輸入 `help` 了解更多。現在按下 `ESC` 關閉提示，開始實際操作吧！',
];

export const QuickHelp = props => {
  const [state, setState] = React.useContext(StateContext);
  const [page, setPage] = React.useState(0);

  const nextPage = () => {
    if (page < QUICK_HELP_TEXT.length - 1) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const closeHelp = () => {
    setState({
      ...state,
      showQuickHelp: false,
    });
  };

  const processKey = e => {
    if (e.keyCode === KEY_ESC) {
      closeHelp();
    }
    if (
      e.key === 'j' ||
      e.key === 'l' ||
      e.key === 'ArrowDown' ||
      e.key === 'ArrowLeft'
    ) {
      nextPage();
    }
    if (
      e.key === 'k' ||
      e.key === 'h' ||
      e.key === 'ArrowUp' ||
      e.key === 'ArrowRight'
    ) {
      prevPage();
    }
  };

  useEventListener('keyup', processKey);

  return (
    <div className="el-backdrop overflow-hidden absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="bg-background relative rounded-lg shadow-lg p-5 w-auto m-10 sm:m-0 sm:w-3/12 h-auto">
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
          className={'markdown-content relative flex flex-col el-quickhelp'}
          dangerouslySetInnerHTML={{ __html: marked(QUICK_HELP_TEXT[page]) }}
        />
        <div
          className={
            'border-t hidden sm:block border-control pt-3 text-xs text-stall-dim'
          }>
          按 <b>J</b>/<b>K</b> 或 <b>UP</b>/<b>DOWN</b> 切換頁面，<b>ESC</b>{' '}
          關閉提示。
        </div>
        <div className={'border-t sm:hidden border-control pt-3 text-xs'}>
          <div className={'flex flex-row'}>
            {page < QUICK_HELP_TEXT.length - 1 ? (
              <>
                <button
                  onClick={prevPage}
                  className={'flex-1 bg-stall-light py-2 mx-1 rounded-lg'}>
                  &lt; 上一頁
                </button>
                <button
                  onClick={nextPage}
                  className={'flex-1 bg-stall-light py-2 mx-1 rounded-lg'}>
                  下一頁 &gt;
                </button>
              </>
            ) : (
              <button
                onClick={closeHelp}
                className={'flex-1 bg-stall-light py-2 mx-1 rounded-lg'}>
                關閉
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
