import { MdDashboard } from "react-icons/md";

const Heading = ({ title, icon }) => {
  return (
    <>
      <div className=" d-flex justify-content-start align-items-center display-6 gap-1">
        <MdDashboard /> Dashboard
      </div>
      <div className="mx-5 mt-1">
        <i>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          blanditiis rem ea ad est nulla alias aut repellat! Incidunt
        </i>
      </div>
    </>
  );
};

export default Heading;
