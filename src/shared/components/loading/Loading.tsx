import ReactDOM from 'react-dom';

export const Loading = () => {
  const modalRoot = document.getElementById('modal');

  return modalRoot
    ? ReactDOM.createPortal(
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            background: '#132440',
          }}
        >
          <img src="/images/logo.png" alt="" style={{ width: '10%', height: 'auto' }} />
        </div>,
        modalRoot,
      )
    : null;
};
