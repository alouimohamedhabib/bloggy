import styled from "styled-components";

const InputStyled = styled.input`
    border: 2px solid var(--darkblue);
    display: block;
    box-shadow: 10px 10px 1px var(--darkblue);
    padding: 10px;
    margin-bottom: 10px;
    transition: all 300ms;
    &.has-error {
        box-shadow: 10px 10px 1px var(--error);
        &:focus {
            box-shadow: 10px 10px 1px var(--error);

        }
    }
`;

export default InputStyled;