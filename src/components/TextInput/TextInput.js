import React from "react";
import StyledInputBox from "./TextInput.styled";

export const TextInput = (props) =>{
    const {placeholder, isDisabled, isInvalid, isFullWidth,isReadOnly} = props;
    return(
        <StyledInputBox type="text" placeholder={placeholder} fullWidth={isFullWidth} disabled={isDisabled} invalid={isInvalid} readonly={isReadOnly}
        />
    )
}       