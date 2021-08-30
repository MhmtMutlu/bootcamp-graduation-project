import * as yup from "yup";

export const FirstStep = yup.object().shape({
  firstName: yup
    .string()
    .required("Adınızı girmek zorundasınız!"),
  lastName: yup
    .string()
    .required("Soyadınızı girmek zorundasınız!"),
  identityNumber: yup
    .string()
    .min(11, "TC kimlik numarası en az 11 karakter olmalıdır!")
    .max(12, "TC kimlik numarası en fazla 11 karakter olmalıdır!")
    .required("TC kimlik numaranızı girmek zorundasınız!"),
  age: yup
    .number()
    .required("Yaşınızı girmek zorundasınız!")
    .positive("Yaşınız pozitif bir sayı olmalıdır!")
    .integer()
});

export const SecondStep = yup.object().shape({
  complaintDetail: yup
    .string()
    .min(20, "Şikayet detayı en az 20 karakter olmalıdır!")
    .required("Şikayet detayını girmek zorundasınız!"),
});

export const ThirtStep = yup.object().shape({
  complaintTitle: yup
    .string()
    .min(5, "Şikayetin konusu en az 5 karakter olmalıdır!")
    .required("Şikayet konusunu girmek zorundasınız!"),
});

export const FourthStep = yup.object().shape({
  address: yup
    .string()
    .min(10, "Adresiniz en az 10 karakter olmalıdır!")
    .required("Adresinizi girmek zorundasınız!"),
  email: yup
    .string()
    .email("Doğru bir email adresini girmediniz!")
    .required("Emailinizi girmek zorundasınız!"),
});

export const LoginSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Kullanıcı adınızı girmek zorundasınız!"),
  password: yup
    .string()
    .required("Şifrenizi girmek zorundasınız!")
});

export const DetailSchema = yup.object().shape({
  adminResponse: yup
    .string()
    .min(5, "Şikayet yanıtı en az 5 karakter olmalıdır!")
    .required("Şikayet yatınızı girmek zorundasınız!"),
});

export const QuerySchema = yup.object().shape({
  id: yup
    .string()
    .min(20, "Sorgu numaranız en az 20 karakter olmalıdır!")
    .max(21, "Sorgu numaranız en çok 20 karakter olmalıdır!")
    .required("Şikayet sorgu numaranızı girmek zorundasınız!")
})