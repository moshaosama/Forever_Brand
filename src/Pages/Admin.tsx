import InputForm from "../Components/Atoms/Form/inputForm";

const Admin = () => {
  const InputList = [
    {
      Name: "Email Address",
      onChange: () => {},
      Type: "text",
    },
    {
      Name: "Password",
      onChange: () => {},
      Type: "password",
    },
  ];

  return (
    <>
      <div className="flex justify-center my-72">
        <div className=" p-5 rounded-md shadow-[#ddd] shadow-2xl">
          <div>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
          </div>
          <form action="" className="flex flex-col gap-4 my-4">
            {InputList?.map(
              (el: { Name: string; Type: string; onChange: () => void }) => {
                return (
                  <>
                    <div>
                      <p className="font-bold text-lg">{el.Name}</p>
                      <InputForm
                        Label={el.Name}
                        Name={el.Name}
                        onChange={el.onChange}
                        Type={el.Type}
                      />
                    </div>
                  </>
                );
              }
            )}
          </form>
          <div className="w-full bg-black cursor-pointer text-center p-2 rounded-md mt-6">
            <button className=" text-white">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
