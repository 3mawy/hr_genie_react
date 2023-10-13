

const Modal = ({isOpen, onClose, children}) => {

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-999999 h-screen">
                    <div className="fixed inset-0 bg-black bg-opacity-50 h-screen" onClick={() => onClose()}></div>
                    <div
                        className="relative bg-white dark:bg-boxdark px-12 py-9 rounded shadow-lg  z-50 min-h-[20rem] md:min-w-[40rem] place-items-center grid">
                        {children}
                    </div>
                </div>
            )}
        </>);
};

export default Modal;
