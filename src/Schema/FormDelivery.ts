import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name Required"),
  LastName: Yup.string().required("Last Name Required"),
  EmailAddress: Yup.string().required("Email Address Required").email(),
  Street: Yup.string().required("Street Required"),
  City: Yup.string().required("City Required"),
  State: Yup.string().required("State Required"),
  ZipCode: Yup.string().required("Zip Code Required"),
  Country: Yup.string().required("Country Required"),
  Phone: Yup.string().required("Phone Required"),
});
