import CartTable from "@/components/CartTable";
import CartTotal from "@/components/CartTotal";
import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <h1>Carrinho</h1>
        <CartTable />
        <CartTotal />
      </Container>
    </>
  );
};

export default Cart;
