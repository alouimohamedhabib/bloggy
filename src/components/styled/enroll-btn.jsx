import styled from 'styled-components';

const EnrollBtn = styled.button`
padding: 6px 13px 7px;
min-width: 75px;
border: 2px solid #002333;
box-sizing: border-box;
color: #002333;
text-decoration: none;
font-weight: bold;
background: transparent;
box-shadow: 10px 10px 1px #002333;  
span {
    transition: all 300ms;
    margin-left: 10px;
}
&:hover{
    span {
        transform: scale(1.7);
        display: inline-block;
    }
}
`;
export default EnrollBtn;