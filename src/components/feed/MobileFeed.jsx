import MobileFeedData from "./MobileFeedData";
import data from "../../mock-data";

const MobileFeed = () => {
  return (
    <div className="lg:hidden">
      {data.map((el) => (
        <MobileFeedData key={el.id} data={el} />
      ))}
    </div>
  );
};

export default MobileFeed;
