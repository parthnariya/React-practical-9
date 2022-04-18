import * as Yup from "yup";
import { messages } from "../common/validationMessages";
const phoneRegExp = /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/;
export const validate = Yup.object({
  profilePicture: Yup.mixed()
    .required(messages.PROFILE_PICTURE_REQUIRED)
    .test(
      "fileSize",
      messages.PROFILE_PICTURE_SIZE,
      (value) => {
        // console.log(value.size)
        return !value || value.size <= 2000000}
    ).test("fileType", messages.PROFILE_PICTURE_TYPE, (value) => {
      return (
        !value ||
        (value !== null && ["image/jpg", "image/png","image/jpeg"].includes(value.type))
      );
    }),
  name: Yup.string()
    .min(15, messages.NAME_LENGTH)
    .required(messages.NAME_REQUIRED),
  email: Yup.string().email(messages.EMAIL_INVALID).required(messages.EMAIL_REQUIRED),
  phone: Yup.string()
    .matches(phoneRegExp, messages.PHONE_INVALID)
    .required(messages.EMAIL_REQUIRED),
  password: Yup.string()
    .min(6, messages.PASSWORD_LENGTH)
    .required(messages.PASSWORD_REQUIRED),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], messages.CONFIRMPASSWORD_MATCH)
    .required(messages.CONFIRMPASSWORD_REQUIRED),
});
