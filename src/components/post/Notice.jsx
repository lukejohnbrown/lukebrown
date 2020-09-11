import React from "react"
import styled from "styled-components"

const NoticeWrapper = styled.div`
  background: #2b2b2b;
  padding: ${({ theme }) => theme.space[3]};
  margin-bottom: ${({ theme }) => theme.space[4]};

  h3 {
    font-size: ${({ theme }) => theme.fontSize[100]};
  }

  p {
    margin: 0;
    color: white;
  }
`

const Notice = ({ title, text }) => (
  <NoticeWrapper>
    {title && <h3>{title}</h3>}
    {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
  </NoticeWrapper>
)

export default Notice
