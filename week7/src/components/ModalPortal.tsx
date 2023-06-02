import ReactDOM from "react-dom";

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById("modal");
  return el && ReactDOM.createPortal(children, el);
};

export default ModalPortal;
