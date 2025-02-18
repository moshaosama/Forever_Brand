import AllCollection from "../Components/Molecules/AllCollections/AllCollection";
import Filtering from "../Components/Molecules/Filtering/Filtering";

const Collections = () => {
  return (
    <>
      <div className="flex items-start">
        <Filtering />
        <AllCollection />
      </div>
    </>
  );
};

export default Collections;
