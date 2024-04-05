import { Button, Toast, ToastBody } from "reactstrap";

const SuccessToast = (props: {
  toastIsOpen: boolean;
  setToastIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Toast
      className="bg-success text-white fixed-bottom ms-auto me-4 mb-4"
      isOpen={props.toastIsOpen}
      fade
    >
      <ToastBody className="d-flex justify-content-between">
        Produto adicionado ao carrinho.
        <Button
          close
          className="btn-close-white"
          onClick={() => props.setToastIsOpen(false)}
        ></Button>
      </ToastBody>
    </Toast>
  );
};

export default SuccessToast;
