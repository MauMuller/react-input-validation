import {
  MoneyProps,
  PasswordProps,
  PhoneProps,
  ComumProps,
  MaskTypes,
} from "../../types";

export const defaultProps = <T,>(keyMask: keyof MaskTypes<T>) => {
  const explictMask = false;
  const name = "" as keyof T;

  const comumProps: ComumProps<T> = {
    explictMask,
    name,
  };
  const moneyProps: MoneyProps<T> = { ...comumProps, explictSimbol: "R$" };
  const passwordProps: PasswordProps<T> = { ...comumProps, hideValue: true };

  const phoneProps: PhoneProps<T> = {
    ...comumProps,
    showDDD: false,
    showPrefix: false,
    typePhone: "phoneMovel",
  };

  switch (keyMask) {
    case "cep":
    case "cnpj":
    case "cpf":
      return comumProps;

    case "money":
      return moneyProps;

    case "password":
      return passwordProps;

    case "phone":
      return phoneProps;
  }
};
