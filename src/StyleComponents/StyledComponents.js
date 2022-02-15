import styled from "styled-components";

export const Form = styled.form`
    height: 380px;
    width: 350px;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
`;

export const FloatLabel = styled.div`
    position: relative;
    padding-top: 13px;
`;

export const Label = styled.label`
    pointer-events: none;
    position: absolute;
    font-size: 15px;
    color: #adadad;
    background-color: #1b1d1e;
    top: 12%;
    left: 3%;
    margin-top: 20px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
`;

export const Input = styled.input`
    border: 1px solid #3f3f3f;
    outline: none;
    font-size: 13px;
    border-radius: 4px;
    height: 47px;
    width: 350px;
    background-color: transparent;
    color: #adadad;
    padding-left: 8px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;

    :focus {
        border: 1px solid #3447b5;
    }

    ::placeholder {
        color: transparent;
    }

    :focus:invalid + ${Label}, :not(:placeholder-shown) + ${Label} {
        color: red;
    }

    :focus:invalid {
        border: 0.5px solid red;
    }

    :invalid + ${Label}::before {
        content: "*";
    }

    :focus + ${Label}, :not(:placeholder-shown) + ${Label} {
        font-size: 13px;
        margin-top: 0;
        color: #5e81ff;
    }
`;

export const Div = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;

    div {
        width: 48%;
    }

    input {
        width: 100%;
    }

    label {
        left: 6%;
    }
`;

export const Button = styled.button`
    height: 35px;
    width: 350px;
    border: 1px #3447b5 solid;
    border-radius: 4px;
    background-color: #3447b5;
    color: white;
    cursor: pointer;

    :hover {
        background-color: #3447b5;
    }
`;
