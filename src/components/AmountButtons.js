import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ stock, amount, increase, decrease }) => {
  return (
    <Wrapper className='amount-btn'>
      <div className='amount-btn' type='btn' onClick={decrease}>
        <FaMinus />
      </div>
      <h2 className='amount'>{amount}</h2>
      <div className='amount-btn' type='btn' onClick={increase}>
        <FaPlus />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
