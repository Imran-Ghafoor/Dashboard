import { Container } from "react-bootstrap";
import { MdDashboard } from "react-icons/md";
const TopHeader = () => {
  return (
    <Container>
      <div className="topHeader d-flex justify-content-between pt-2 px-2 border-bottom align-items-center">
        <h5>Logo</h5>
        <div className="d-flex gap-1 align-items-center">
          <MdDashboard />
          Dashboard
        </div>
      </div>
    </Container>
  );
};

export default TopHeader;
