import * as yup from "yup";

const FormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Adınızı girmek zorundasınız!"),
  lastName: yup
    .string()
    .required("Soyadınızı girmek zorundasınız!"),
  age: yup
    .number()
    .required("Yaşınızı girmek zorundasınız!")
    .positive("Yaşınız pozitif bir sayı olmalıdır!")
    .integer(),
  identityNumber: yup
    .string()
    .required("TC kimlik numaranızı girmek zorundasınız!"),
  complaintDetail: yup
    .string()
    .min(20, "Şikayet detayı en az 20 karakter olmalıdır!")
    .required("Şikayet detayını girmek zorundasınız!"),
  complaintTitle: yup
    .string()
    .min(5, "Şikayetin konusu en az 5 karakter olmalıdır!")
    .required("Şikayet konusunu girmek zorundasınız!"),
  address: yup
    .string()
    .min(10, "Adresiniz en az 10 karakter olmalıdır!")
    .required("Adresinizi girmek zorundasınız!"),
  email: yup
    .string()
    .email("Doğru bir email adresini girmediniz!")
    .required("Emailinizi girmek zorundasınız!"),
});

export default FormSchema;
