import React from 'react'
import styled from "styled-components";

const NoticeWrapper = styled.div`
  background: ${({ theme }) => theme.palette.yellow};
  padding: ${({ theme }) => theme.space[3]};
  border: 3px solid black;
  margin-bottom: ${({ theme }) => theme.space[4]};

  h3 {
    font-size: ${({ theme }) => theme.fontSize[100]};
  }

  p {
    margin: 0;
  }
`;

const Notice = ({ title, text }) => {
  return (
    <NoticeWrapper>
      {title && (
        <h3>{title}</h3>
      )}
      {text && (
        <p>{text}</p>
      )}
    </NoticeWrapper>
  )
}

export default Notice;
