import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref>
        <p className="navbar-brand">Início</p>
      </Link>
      <Nav className="flex-row gap-2 " navbar>
        <Link href="/products">
          <p className="nav-link me-2">Produtos</p>
        </Link>
        <Link href="/cart">
          <p className="nav-link">Carrinho</p>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
