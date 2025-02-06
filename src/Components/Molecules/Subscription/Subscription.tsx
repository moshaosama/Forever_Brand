const Subscription = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl font-semibold max-sm:text-md">
          Subscribe now & get 20% off
        </h1>
        <p className="text-gray-400 max-sm:text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form action="">
          <p className="flex items-center max-sm:mx-6">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-2 h-12 w-[30pc] max-sm:w-full border-gray-400 border-[1px]"
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
