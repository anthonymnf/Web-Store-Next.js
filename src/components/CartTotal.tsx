import { Card, CardBody } from "reactstrap";
import { useCart } from "../hooks/useCart";

const CartTotal = () => {
  const { cart } = useCart();

  return (
    <Card className="ms-auto" style={{ maxWidth: "20rem" }}>
      <CardBody className="d-flex justify-content-between">
        <strong>Total:</strong>
        <span>
          R$ {cart.reduce((total, product) => total + product.price, 0)}
        </span>
      </CardBody>
    </Card>
  );
};

export default CartTotal;
