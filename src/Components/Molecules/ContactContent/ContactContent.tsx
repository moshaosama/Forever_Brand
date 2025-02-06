import TitleContent from "../../Atoms/TitleContent/TitleContent";
import { assets } from "../../../assets/frontend_assets/assets";
import style from "./ContactContent.module.css";

const ContactContent = () => {
  const { Contact_container, Header, Paragraph, Buttom } = style;

  const ContactList = (Text1: string, Text2: string) => {
    const List = [Text1, Text2];
    return List.map((text, index) => (
      <p className={Paragraph} key={index}>
        {text}
      </p>
    ));
  };

  const List = [
    {
      Item: ContactList("54709 Willms Station", "Suite 350, Washington, USA"),
    },
    {
      Item: ContactList("Tel: (415) 555-0132", "Email: admin@forever.com"),
    },
  ];

  const ContactListRender = () => {
    return List.map((el, index) => {
      return <div key={index}>{el.Item}</div>;
    });
  };
  return (
    <>
      <div className="my-12">
        <TitleContent LeftTitle="CONTACT" RightTitle="US" Active={false} />
      </div>
      <div className={Contact_container}>
        <img
          src={assets.contact_img}
          alt="conatct.png"
          className="w-[30pc] max-sm:w-[22pc]"
        />
        <div className="flex flex-col gap-8">
          <h1 className={Header}>Our Store</h1>
          <ContactListRender />

          <h1 className={Header}>
            Careers at Forever
            {/* Don't Repeat Yourself Careers at Forever */}
          </h1>
          <p className={Paragraph}>
            Learn more about our teams and job openings.
            {/* Don't Repeat Yourself Careers at Forever */}
          </p>
          <button className={`${Buttom} transition-all duration-700 `}>
            Explore Jops
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
