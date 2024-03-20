import './Modal.scss';

const Modal = ({ img, title, subTitle, modalClose }) => {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };
  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content ">
          <div className="modal-header  flex justify-around  ">
            <h4 className="modal-title font-semibold text-2xl">{title}</h4>
            <button
              type="button"
              className="border-[0.125rem] border-blue-300 rounded-xl px-2 hover:border-violet-500"
              onClick={modalClose}
            >close Modal</button>
          </div>
          <div className="modal-body">
            <div className="st-flex-center">
              <img src={img} />
            </div>
            <div className=' flex justify-center'>
            <p className="font-thin text-black  ">Tech Stack - <strong>{subTitle}</strong></p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
