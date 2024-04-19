import Button from "react-bootstrap/Button";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import Stats from "../../Pages/Stats";
const Hero = () => {
  return (
    <div className="landing-page px-2">
      <h1>Hadi E-learning</h1>
      <i>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the
      </i>
      <Link className="_Link" to={"/stats"}>
        <Button className=" d-flex gap-1 align-items-center myBtn mt-3">
          <MdDashboard />
          Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
