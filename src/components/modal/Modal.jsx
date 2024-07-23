
import { BiSolidBadgeCheck } from "react-icons/bi";
import "./modal.css"
import { useEffect } from "react";

const Modal = ({ setOpen }) => {
  useEffect(()=>{
    setTimeout(()=>{
      setOpen(false)
    },1000)
  },[])
  return (
    <div className="modal">
      <div onClick={() => setOpen(false)} className="overlay"></div>
      <div className="modal-content">
        <h2>Congratulation. we have receive your request, we will reach out to you </h2>
        <BiSolidBadgeCheck color="#005652" size={45} />
      </div>
    </div>
  );
};

export default Modal;
