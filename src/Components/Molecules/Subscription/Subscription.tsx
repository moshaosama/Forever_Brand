import style from "./Subscription.module.css";

const Subscription = () => {
  const { Subscription_container, Header, Input } = style;
  return (
    <>
      <div className={Subscription_container}>
        <h1 className={`${Header}`}>Subscribe now & get 20% off</h1>
        <p className="text-gray-400 max-sm:text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form action="">
          <p className="flex items-center max-sm:mx-6">
            <input
              type="text"
              placeholder="Enter your email"
              className={`${Input}`}
            />
            <button className="bg-black h-12 w-52 text-white">
              {"Subscribe".toLowerCase()}
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Subscription;
