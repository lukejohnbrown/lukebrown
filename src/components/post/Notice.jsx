import React from "react"
import styled from "styled-components"

const NoticeWrapper = styled.div`
  background: ${({ theme }) => theme.palette.grey};
  border: 1px solid #ededed;
  padding: ${({ theme }) => theme.space[3]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  border-radius: 0.3em;

  h3 {
    font-size: ${({ theme }) => theme.fontSize[100]};
  }

  p {
    margin: 0;
  }
`

const Notice = ({ title, text }) => (
  <NoticeWrapper>
    {title && <h3>{title}</h3>}
    {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
  </NoticeWrapper>
)

export default Notice
