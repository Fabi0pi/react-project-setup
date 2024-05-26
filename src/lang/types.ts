export type Locale = 'en' | 'it';

interface Label {
  label: string;
  placeholder: string;
}

interface FormLabels {
  registration: string;
  phoneNumber: Label;
  address: Label;
  email: Label;
  pw: Label;
}

interface FormErrors {
  email: string;
  password: string;
  general: string;
}

interface Form {
  labels: FormLabels;
  errors: FormErrors;
}

interface Global {}

interface Labels {
  welcome: string;
}

interface Buttons {
  submit: string;
  en: string;
  it: string;
}

interface LanguageData {
  global: Global;
  form: Form;
  labels: Labels;
  buttons: Buttons;
}

export interface Messages {
  en: LanguageData;
  it: LanguageData;
}