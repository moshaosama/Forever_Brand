import globalStyle from "../../../Styles/Global.module.css";
import TitleContent from "../../Atoms/TitleContent/TitleContent";
import CartTotal from "../CartTotal/CartTotal";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/globalStore/store";
import { fetchCraeteDelivery } from "../../../Store/Reducer/Delivery/createDelivery";
import InputForm from "../../Atoms/Form/inputForm";

const DeliverySec = () => {
  const { container } = globalStyle;
  const dispatch = useDispatch<AppDispatch>();
  const [isPending, setPending] = useState(false);
  const today = new Date().toDateString();

  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Street: "",
    City: "",
    State: "",
    ZipCode: "",
    Country: "",
    Phone: "",
    Date: today,
  });

  const handleClick = async () => {
    setPending(true);
    await new Promise((resolver) => setTimeout(resolver, 3000));
    setPending(false);
    dispatch(fetchCraeteDelivery(form));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={`${container} max-sm:flex-col`}>
        <div className="max-sm:mx-5">
          <div className="my-10 flex justify-start">
            <TitleContent
              LeftTitle="DELIVERY"
              RightTitle="INFORMATION"
              Active={false}
            />
          </div>
          <form action="">
            <div className="flex gap-5">
              <InputForm
                Type="text"
                Label="FirstName"
                Name="FirstName"
                onChange={handleChange}
              />
              <InputForm
                Type="text"
                Name="LastName"
                Label="LastName"
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <InputForm
                Type="text"
                Label="Emailaddress"
                Name="EmailAddress"
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <InputForm
                Type="text"
                Label="Street"
                Name="Street"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-5">
              <InputForm
                Type="text"
                Label="City"
                Name="City"
                onChange={handleChange}
              />
              <InputForm
                Type="text"
                Label="State"
                Name="State"
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-5 my-2">
              <InputForm
                Type="number"
                Label="Zipcode"
                Name="ZipCode"
                onChange={handleChange}
              />
              <InputForm
                Type="text"
                Label="Country"
                Name="Country"
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <InputForm
                Type="text"
                Label="Phone"
                Name="Phone"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div>
          <CartTotal
            TitleBtn={isPending ? "Loading...." : "PLACE ORDER"}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default DeliverySec;
