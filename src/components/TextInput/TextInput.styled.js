import styled, { css } from "styled-components";
import * as All from "../../variable";

const StyledInputBox = styled.input`
        box-shadow: inset 0 1px 0 0 #eaeaeb,inset 0 0 0 1px #f4f4f5;
        padding: 10px;
    ${props =>
        props.invalid
            ? css`
            background: ${All.ColorRed40D};
        `
            : css`
            background: tranparent;
        `
    }
    ${props =>
        props.fullWidth
            ? css`
            width:100%;
        `
            : css`
            width: auto;
        `
    }
`

export default StyledInputBox;