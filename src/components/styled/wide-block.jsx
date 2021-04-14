import styled from "styled-components";

const WideBlock = styled.div`
    border: 1px solid var(--darkblue);
    margin: 0 0 2em 0;
    padding: 2rem;
    display: block ;
    box-shadow: 10px 15px 1px var(--darkblue); 
    position: relative; 
    min-height: 300px;
    h2{
        font-weight: bold;
    }
    .rating {
        position: absolute;
        right: 5px;
        top:5px;
        background: var(--darkblue);
        color: #ffffff;
        padding: 5px 15px;
    }
`

export default WideBlock;