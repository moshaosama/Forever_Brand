import globalStyle from "../../../Styles/Global.module.css";
import TitleContent from "../../Atoms/TitleContent/TitleContent";
import CartTotal from "../CartTotal/CartTotal";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/globalStore/store";
import { fetchCraeteDelivery } from "../../../Store/Reducer/Delivery/createDelivery";

const DeliverySec = () => {
  const { container } = globalStyle;
  const dispatch = useDispatch<AppDispatch>();

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
  });

  type InputProps = {
    Type: string;
    Name: keyof typeof form;
    PlaceHolder: string;
    Width: string;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const InputRender = ({ Type, Name, PlaceHolder, Width }: InputProps) => {
    return (
      <input
        type={Type}
        name={Name}
        placeholder={PlaceHolder}
        className={`p-2 w-${Width} max-sm:w-80 border-[1px] border-[#ddd]`}
        value={form[Name]}
        onChange={handleChange}
      />
    );
  };
  return (
    <>
      <div className={container}>
        <div>
          <div className="my-10 flex justify-start">
            <TitleContent
              LeftTitle="DELIVERY"
              RightTitle="INFORMATION"
              Active={false}
            />
          </div>
          <form action="">
            <div className="flex gap-5">
              <InputRender
                Type="text"
                PlaceHolder="Firstname"
                Name="FirstName"
                Width="64"
              />
              <InputRender
                Type="text"
                PlaceHolder="Lastname"
                Name="LastName"
                Width="69"
              />
            </div>
            <div className="my-2">
              <InputRender
                Type="text"
                PlaceHolder="Emailaddress"
                Name="EmailAddress"
                Width="[33.24pc]"
              />
            </div>
            <div className="my-2">
              <InputRender
                Type="text"
                PlaceHolder="Street"
                Name="Street"
                Width="[33.24pc]"
              />
            </div>
            <div className="flex gap-5">
              <InputRender
                Type="text"
                PlaceHolder="City"
                Name="City"
                Width="64"
              />
              <InputRender
                Type="text"
                PlaceHolder="State"
                Name="State"
                Width="64"
              />
            </div>

            <div className="flex gap-5 my-2">
              <InputRender
                Type="number"
                PlaceHolder="Zipcode"
                Name="ZipCode"
                Width="64"
              />
              <InputRender
                Type="text"
                PlaceHolder="Country"
                Name="Country"
                Width="64"
              />
            </div>
            <div className="my-2">
              <InputRender
                Type="text"
                PlaceHolder="Phone"
                Name="Phone"
                Width="[33.24pc]"
              />
            </div>
          </form>
        </div>
        <div>
          <CartTotal
            TitleBtn="PLACE ORDER"
            onClick={() => {
              dispatch(fetchCraeteDelivery(form));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DeliverySec;
