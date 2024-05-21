import { Box, Input, OpenThemeConfig, Text } from "@fabio_pi_org/open-ui";
import { ChangeEventHandler, memo } from "react";
import '../app.css'

type Prosp = {
    onChange?: ChangeEventHandler<HTMLInputElement>
    emailError?: boolean
    theme: OpenThemeConfig
    label: string
    type: string
    placeholder?: string
    className?: string
    t: (label: string) => string
}

export const InputForm = memo(({ onChange, emailError, theme, label, type, placeholder, className, t }: Prosp) => {
    return (
        <Box className={"box" || className}>
            <div className={"label" || className}>
                <Text variant="span">{label}</Text>
            </div>
            <Input type={type} placeholder={placeholder} onChange={onChange} />
            {emailError &&
                <Box className="box-error">
                    <Text variant="span" style={{ color: `${theme.colors.error}` }}>{t("form.errors.email")}</Text>
                </Box>
            }
        </Box>
    );
});