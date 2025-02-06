import style from "../CopyRight/CopyRight.module.css";
const CopyRight = () => {
  const { Text } = style;
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <hr className="m-[3pc 11pc] w-[97pc] bg-[#eee] h-[-10px] max-sm:w-80 max-sm:m-auto" />
        <h1 className={Text}>
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </h1>
      </div>
    </>
  );
};

export default CopyRight;
