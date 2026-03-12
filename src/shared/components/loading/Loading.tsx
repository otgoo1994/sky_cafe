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
          {/* <p>Loading</p> */}
          {/* <Lottie animationData={loadingJson} loop={true} autoplay={true} /> */}
          <img src="/images/logo.png" alt="" style={{ width: '40%', height: 'auto' }} />
        </div>,
        modalRoot,
      )
    : null;
};
