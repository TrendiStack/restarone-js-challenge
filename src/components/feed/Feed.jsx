import MobileFeed from "./MobileFeed";
import DesktopFeed from "./DesktopFeed";

const Feed = ({ setUserNum }) => {
  return (
    <div>
      <MobileFeed />
      <DesktopFeed setUserNum={setUserNum} />
    </div>
  );
};

export default Feed;
