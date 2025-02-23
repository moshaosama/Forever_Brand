import ContentLoader from "react-content-loader";
import style from "./Skeleton.module.css";
const Skeleton = () => {
  const { skeleton } = style;
  return (
    <div className="mx-44 grid grid-cols-4 gap-10">
      {Array(20)
        .fill(0)
        .map((index: number) => {
          return (
            <div key={index} className={skeleton}>
              <ContentLoader viewBox="0 0 500 280" height={280} width={500}>
                <rect x="3" y="3" rx="10" ry="10" width="270" height="180" />
                <rect x="6" y="190" rx="0" ry="0" width="260" height="20" />
                <rect x="4" y="215" rx="0" ry="0" width="100" height="20" />
              </ContentLoader>
            </div>
          );
        })}
    </div>
  );
};

export default Skeleton;
