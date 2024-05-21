import { ChangeEventHandler, useState } from "react"
import { Box, Button, Text, theme, validateEmail } from "@fabio_pi_org/open-ui"
import './app.css'
import { InputForm } from "./components/Input";
import { useTranslation } from "react-i18next";


function App() {
  const { t, i18n } = useTranslation()
  const [val, setVal] = useState("")
  const [emailError, setEmailError] = useState(false);
  const [lngActive, setLngActive] = useState(i18n.language);

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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLngActive(lng)
  };


  return (
    <>
      <Languages t={t} changeLanguage={changeLanguage} activeLng={lngActive} />
      <div className="loginContainer">
        <Box className="box">
          <Text variant="h2" emphasis>{t("form.labels.registration")}</Text>
        </Box>
        <InputForm
          t={t}
          label={`${t("form.labels.phoneNumber.label")}`}
          theme={theme}
          type="text"
          placeholder={`${t("form.labels.phoneNumber.placeholder")}`}
        />
        <InputForm
          t={t}
          label={`${t("form.labels.address.label")}`}
          theme={theme}
          type="text"
          placeholder={`${t("form.labels.address.placeholder")}`}
        />
        <InputForm
          t={t}
          emailError={emailError}
          label={`${t("form.labels.email.label")}`}
          onChange={handleOnChange}
          theme={theme}
          type="text"
          placeholder={`${t("form.labels.email.placeholder")}`}
        />
        <InputForm
          t={t}
          label={`${t("form.labels.pw.label")}`}
          theme={theme}
          type="Password"
          placeholder={`${t("form.labels.pw.placeholder")}`}
        />
        <Box className="submit" >
          <Button size="sm" variant="solid" onClick={handleOnclick} >
            {t("buttons.submit")}
          </Button>
        </Box>
      </div>
    </>
  )
}

export default App

type LngProps = {
  changeLanguage: (x: string) => void
  t: (x: string) => string
  activeLng: string
}

const Languages = ({ changeLanguage, t, activeLng }: LngProps) => {
  console.log("🚀 ~ Languages ~ activeLng:", activeLng)
  return (
    <div className="lngBox">
      <Button 
        size="sm" 
        variant="ghost" 
        onClick={() => changeLanguage('en')}
        className={activeLng === 'en' ? "lngActive" : ""}
        >
        {t("buttons.en")}
      </Button>
      <Button 
        size="sm" 
        variant="ghost" 
        onClick={() => changeLanguage('it')}
        className={activeLng === 'it' ? "lngActive" : ""}>
        {t("buttons.it")}
      </Button>
    </div>)
}