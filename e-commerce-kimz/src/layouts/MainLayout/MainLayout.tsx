import { Container } from "react-bootstrap";
import Header from "../../components/common/Header/Header";
import styles from "./styles.module.css";

const { container, wrapper } = styles;

function MainLayout() {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}></div>
    </Container>
  );
}

export default MainLayout;
