import ReactDOM from 'react-dom';

export const Loading = () => {
  const modalRoot = document.getElementById('modal');

  return modalRoot
    ? ReactDOM.createPortal(
        <div className="fixed w-[100%] h-[100%] inset-0 z-absulute flex items-center justify-center bg-white">
          <div className="flex flex-col items-center justify-center gap-[10px]">
            {/* <IconSpinner /> */}
            <span className="text-[15px] tracking-[-2%] text-text-black font-medium">Loading</span>
          </div>
        </div>,
        modalRoot,
      )
    : null;
};
