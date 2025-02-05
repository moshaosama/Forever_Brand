import style from "../CopyRight/CopyRight.module.css";
const CopyRight = () => {
  const { Text } = style;
  return (
    <>
      <div>
        <hr
          style={{
            margin: "1pc 11pc",
            backgroundColor: "#eee",
            height: "-10px",
          }}
        />
        <h1 className={Text}>
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </h1>
      </div>
    </>
  );
};

export default CopyRight;
