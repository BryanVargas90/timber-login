import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingupForm from "./SingupForm.jsx";

export default function Singup() {

return(
    <Container>
        <Row>
            <Col>
            <SingupForm/>
            </Col>
        </Row>
    </Container>
   )
}