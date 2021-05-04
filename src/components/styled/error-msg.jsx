import styled from "styled-components";

const ErrorMsg = styled.div`
    display: block;
    border-bottom: 4px dashed var(--error);
    border-radius: 8px;
    padding: 1rem;
    width: 400px;
    color: white; 
    background-color: rgba(var(--errorrgba) , 0.5);
    //background-color: rgba(var(--color), 0.8);

    font-weight: bold;

`
export default ErrorMsg;