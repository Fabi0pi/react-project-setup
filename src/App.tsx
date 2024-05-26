import { ChangeEventHandler, useState } from "react"
import { Box, Button, Text, theme, validateEmail } from "@fabio_pi_org/open-ui"
import './app.css'
import { InputForm } from "./components/Input";
import { IntlProvider } from "react-intl";
import { useIntl } from "./lang/useIntl";
import { Locale } from "./lang/types";


function App() {
  const {locale, setLocale, messages} = useIntl()
  const [val, setVal] = useState("")
  const [emailError, setEmailError] = useState(false);
  const [lngActive, setLngActive] = useState(locale);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value
    setVal(value)
    if (!value || validateEmail(value)) setEmailError(false);
  }

  const handleOnclick = () => {
    if (!validateEmail(val)) {
      setEmailError(true);
      return;
    }
  }

  const changeLanguage = (lng: Locale) => {
    setLngActive(lng)
    setLocale(lng)
  };


  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale="en">
      <Languages changeLanguage={changeLanguage} activeLng={lngActive} />
      <div className="loginContainer">
        <Box className="box">
          <Text variant="h2" emphasis>{messages.form.labels.registration}</Text>
        </Box>
        <InputForm
          label={messages.form.labels.phoneNumber.label}
          theme={theme}
          type="text"
          placeholder={messages.form.labels.phoneNumber.placeholder}
        />
        <InputForm
          label={messages.form.labels.address.placeholder}
          theme={theme}
          type="text"
          placeholder={messages.form.labels.address.placeholder}
        />
        <InputForm
          emailError={emailError}
          errorMessage={messages.form.errors.email}
          label={messages.form.labels.email.label}
          onChange={handleOnChange}
          theme={theme}
          type="text"
          placeholder={messages.form.labels.email.placeholder}
        />
        <InputForm
          label={messages.form.labels.pw.label}
          theme={theme}
          type="Password"
          placeholder={messages.form.labels.pw.placeholder}
        />
        <Box className="submit" >
          <Button size="sm" variant="solid" onClick={handleOnclick} >
            {messages.buttons.submit}
          </Button>
        </Box>
      </div>
    </IntlProvider>
  )
}

export default App

type LngProps = {
  changeLanguage: (x: Locale) => void
  activeLng: string
}

const Languages = ({ changeLanguage, activeLng }: LngProps) => {
  return (
    <div className="lngBox">
      <Button 
        size="sm" 
        variant="ghost" 
        onClick={() => changeLanguage('en')}
        className={activeLng === 'en' ? "lngActive" : ""}
        >
        Eng
      </Button>
      <Button 
        size="sm" 
        variant="ghost" 
        onClick={() => changeLanguage('it')}
        className={activeLng === 'it' ? "lngActive" : ""}>
        Ita
      </Button>
    </div>)
}