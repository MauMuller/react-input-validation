type TypesFunction<K> = (value: K) => void;

type TypesMaskReturn = [
  value: string,
  setValue: TypesFunction<string>,
  isValid: boolean | object,
  setKey: TypesFunction<string>
];

type TypesPhones = "phoneMovel" | "phoneFixo";

type TypesValidation =
  | "cpf"
  | "cnpj"
  | "cep"
  | "money"
  | "phone"
  | "fullphone"
  | "password";

type TypesPropertiesArray = [number, string?];
interface TypesDigits {
  specialChars?: TypesPropertiesArray;
  numbers?: TypesPropertiesArray;
  words?: TypesPropertiesArray;
}

interface TypesBasicsProperties {
  inicialValue?: string;
  useExplictMask?: boolean;
}

interface TypesPhoneMask extends TypesBasicsProperties {
  typePhone?: TypesPhones;
  incrementDDDAndPrefix?: boolean;
}

interface TypesPasswordMask extends TypesBasicsProperties {
  typePhone?: TypesPhones;
  incrementDDDAndPrefix?: boolean;
}
interface TypesInicialObject {
  value: string;
  isValid: boolean | object;
  keyDown: boolean;
}
interface TypesMasks {
  cpf?: TypesBasicsProperties;
  cnpj?: TypesBasicsProperties;
  cep?: TypesBasicsProperties;
  money?: TypesBasicsProperties;
  phone?: TypesPhoneMask;
  password?: TypesPasswordMask;
}

interface TypeChangeState {
  formatedValue?: string;
  formatedValidate?: boolean | object;
  formatedKeyDown?: boolean;
}
interface TypesMaskObject {
  maskName: string;
  properties: TypesBasicsProperties;
}

type TypesHooks = [
  value: string,
  setValue: Function,
  isValid: boolean,
  setKey: Function
];

export {};

export {
  TypesFunction,
  TypesMaskReturn,
  TypesBasicsProperties,
  TypesPhoneMask,
  TypesInicialObject,
  TypeChangeState,
  TypesMasks,
  TypesHooks,
  TypesPhones,
  TypesMaskObject,
  TypesDigits,
  TypesValidation,
};
