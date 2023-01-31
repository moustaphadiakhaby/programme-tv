import Section from "./Section";
import { data } from "../App";

const Content = () => {
  return (
    <div className="content">
      {data.map((elem) => {
        return <Section {...elem} />;
      })}
    </div>
  );
};

export default Content;
