import { Container } from "react-bootstrap";
import { Footer, Header } from "@components/common";
import styles from "./styles.module.css";

const { container, wrapper } = styles;

function MainLayout() {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}></div>
      <Footer />
    </Container>
  );
}

export default MainLayout;
