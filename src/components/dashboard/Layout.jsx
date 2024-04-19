import { useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import Navlinks from "./Navlinks";
import Header from "./Header";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <Row className="mainLayout ">
          <Col md={2} className="sidebar d-none d-md-block border-end px-3">
            <div className="mt-4">
              <div>
                <h5>ImranScripts</h5>
              </div>
              <Navlinks />
            </div>
          </Col>
          <Col md={10} className=" content px-3 ">
            <Header setShowSidebar={setShowSidebar} />
            {children}
          </Col>
        </Row>

        <Offcanvas
          show={showSidebar}
          onHide={() => setShowSidebar(false)}
          responsive="lg"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navlinks from={"smallScreen"} />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Layout;
