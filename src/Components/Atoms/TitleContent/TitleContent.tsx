import { TitleContentProps } from "../../../Types/TitleContent/TitleContentTypes";
import { HR } from "../Hero/Hero";

const TitleContent = ({ LeftTitle, RightTitle }: TitleContentProps) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 ">
        <p className="text-[rgba(107,114,128,1)] font-semibold text-3xl">
          {LeftTitle}
        </p>
        <p className="text-[rgba(65,65,65,1)] font-semibold text-3xl">
          {RightTitle}
        </p>
        <HR />
      </div>
      <div className="my-2">
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
    </>
  );
};

export default TitleContent;
