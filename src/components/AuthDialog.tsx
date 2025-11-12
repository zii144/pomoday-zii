import * as React from 'react';
import { StateContext } from './App';
import { KEY_ESC } from '../helpers/utils';
import { authenticateUser } from '../helpers/api';
import { useEventListener } from '../helpers/hooks';

enum UIAuthState {
  WAIT,
  LOADING,
}

export const AuthDialog = props => {
  const [state, setState] = React.useContext(StateContext);
  const [uiState, setUIState] = React.useState({
    status: UIAuthState.WAIT,
    errorMessage: '',
  });
  const usernameRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const serverRef = React.useRef(null);

  React.useEffect(() => {
    if (usernameRef && usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const doLogin = () => {
    const username =
      usernameRef && usernameRef.current && usernameRef.current.value;
    const password =
      passwordRef && passwordRef.current && passwordRef.current.value;
    const server = serverRef && serverRef.current && serverRef.current.value;
    if (username && password && server) {
      setUIState({
        status: UIAuthState.LOADING,
        errorMessage: '',
      });
      authenticateUser(username, password, server)
        .then(authToken => {
          setState({
            ...state,
            authToken: authToken,
            userName: username,
            userWantToLogin: false,
            serverUrl: server,
          });
        })
        .catch(() => {
          setUIState({
            status: UIAuthState.WAIT,
            errorMessage:
              '登入失敗。請確認使用者名稱、密碼與伺服器資訊後再試一次。',
          });
        });
    } else {
      setUIState({
        status: UIAuthState.WAIT,
        errorMessage: '請完整填寫上方所有欄位。',
      });
    }
  };

  const closeDialog = () => {
    setState({
      ...state,
      userWantToLogin: false,
    });
  };

  const processKey = e => {
    if (e.keyCode === KEY_ESC) {
      closeDialog();
    }
  };

  useEventListener('keyup', processKey);

  return (
    <div className="bg-background text-foreground p-5 text-left absolute top-0 left-0 right-0 bottom-0">
      <div className={'block sm:hidden fixed bottom-0 right-0 m-5 z-50'}>
        <button
          onClick={closeDialog}
          className={
            'sm:hidden text-3xl bg-tomato text-white rounded-full shadow-lg w-16 h-16'
          }>
          ✕
        </button>
      </div>
      {uiState.status === UIAuthState.WAIT ? (
        <>
          <div className={'p-3'}>請在此輸入登入資訊：</div>
          <div className={'p-3 inline-block'}>
            <div className={'my-2 flex flex-row'}>
              <span className={'w-4/12'}>使用者名稱：</span>
              <input
                tabIndex={1}
                ref={usernameRef}
                className={'border border-stall-dim flex-1 ml-2'}
                type={'text'}
              />
            </div>
            <div className={'my-2 flex flex-row'}>
              <span className={'w-4/12'}>密碼：</span>
              <input
                tabIndex={2}
                ref={passwordRef}
                className={'border border-stall-dim flex-1 ml-2'}
                type={'password'}
              />
            </div>
            <div className={'my-2 flex flex-row'}>
              <span className={'w-4/12'}>伺服器：</span>
              <input
                tabIndex={3}
                ref={serverRef}
                className={'border border-stall-dim flex-1 ml-2'}
                type={'text'}
                defaultValue={process.env.API_URL || ''}
              />
            </div>
            <div className={'my-2 float-right'}>
              <button
                tabIndex={4}
                onClick={doLogin}
                className={
                  'px-5 py-1 bg-green text-white focus:opacity-75 hover:opacity-75'
                }>
                登入
              </button>
            </div>
          </div>
          <div className={'p-3 text-tomato'}>{uiState.errorMessage}</div>
          <div className={'p-3'}>
            登入後系統會自動與伺服器同步你的資料。
            <br />
            按下 <code>ESC</code> 取消登入並關閉視窗。
          </div>
        </>
      ) : null}
      {uiState.status === UIAuthState.LOADING ? (
        <div className={'p-3'}>正在連線伺服器...</div>
      ) : null}
    </div>
  );
};
