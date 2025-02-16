import { useFormik } from "formik";
import globalStyle from "../../../Styles/Global.module.css";
import TitleContent from "../../Atoms/TitleContent/TitleContent";
import CartTotal from "../CartTotal/CartTotal";
import { validationSchema } from "../../../Schema/FormDelivery";

interface InputProps {
  Type: string;
  Name: string;
  PlaceHolder: string;
  Width: string;
}

const DeliverySec = () => {
  const { container } = globalStyle;
  const formic = useFormik({
    initialValues: {
      firstName: "",
      LastName: "",
      EmailAddress: "",
      Street: "",
      City: "",
      State: "",
      ZipCode: "",
      Country: "",
      Phone: "",
    },
    validationSchema,
    onSubmit: () => {
      console.log("Mosha");
    },
  });

  const InputRender = ({ Type, Name, PlaceHolder, Width }: InputProps) => {
    return (
      <input
        type={Type}
        name={Name}
        placeholder={PlaceHolder}
        className={`p-2 w-${Width} max-sm:w-80 border-[1px] border-[#ddd]`}
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
          <form action="" onSubmit={formic.handleSubmit}>
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
                Width="64"
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
          <CartTotal TitleBtn="PLACE ORDER" />
        </div>
      </div>
    </>
  );
};

export default DeliverySec;
