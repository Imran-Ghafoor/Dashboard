import Layout from "../components/dashboard/Layout";
import { LineGraph } from "../components/dashboard/LineChart";
import Heading from "../components/landingPage/Heading";

const Stats = () => {
  return (
    <Layout bgColor={"  bg-warning "}>
      {/* <Heading /> */}
      <LineGraph />
    </Layout>
  );
};

export default Stats;
