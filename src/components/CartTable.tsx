import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "reactstrap";
import { useCart } from "../hooks/useCart";
import { ProductType } from "../services/products";

type CartEntry = {
  product: ProductType;
  quantity: number;
};

const CartTableRow = (props: { entry: CartEntry }) => {
  const { addProduct, removeProduct } = useCart();

  return (
    <tr>
      <td>
        <Row className="align-items-center">
          <Col xs={4} md={2} lg={1}>
            <Image
              src={props.entry.product.imageUrl}
              alt={props.entry.product.name}
              height={60}
              width={70}
              style={{
                height: "auto",
              }}
            />
          </Col>
          <Col className="p-4" xs={8} md={10} lg={11}>
            {props.entry.product.name}
          </Col>
        </Row>
      </td>
      <td>R$ {props.entry.product.price}</td>
      <td>{props.entry.quantity}</td>
      <td>R$ {props.entry.product.price * props.entry.quantity}</td>
      <td>
        <Button
          color="primary"
          size="sm"
          onClick={() => addProduct(props.entry.product)}
        >
          +
        </Button>{" "}
        <Button
          color="danger"
          size="sm"
          onClick={() => removeProduct(props.entry.product.id)}
        >
          –
        </Button>
      </td>
    </tr>
  );
};

export default function CartTable() {
  const [cartEntries, setCartEntries] = useState<CartEntry[]>([]);
  const { cart } = useCart();

  useEffect(() => {
    const entriesList = cart.reduce((list, product) => {
      const entryIndex = list.findIndex(
        (entry) => entry.product.id === product.id
      );

      if (entryIndex === -1) {
        return [
          ...list,
          {
            product,
            quantity: 1,
          },
        ];
      }

      list[entryIndex].quantity++;
      return list;
    }, [] as CartEntry[]);

    entriesList.sort((a, b) => a.product.id - b.product.id);
    setCartEntries(entriesList);
  }, [cart]);

  return (
    <Table responsive className="align-middle">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Qtd.</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartEntries.map((entry) => (
          <CartTableRow key={entry.product.id} entry={entry} />
        ))}
      </tbody>
    </Table>
  );
}
