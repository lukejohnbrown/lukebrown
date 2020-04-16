import React from 'react';
import styled from "styled-components";

const YouTubeIconWrapper = styled.svg`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: block;

  path {
    fill: ${({ theme }) => theme.palette.darkGrey};
    transition: all 150ms;
  }

  &:hover,
  &:focus {
    path {
      fill: #FF0000;
    }
  }
`;

const YouTubeIcon = ({ width = 22, height = 16 }) => {
  return (
    <YouTubeIconWrapper width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2769 0H3.72308C1.66719 0 0 1.7514 0 3.91111V12.0889C0 14.2486 1.66719 16 3.72308 16H18.2769C20.3328 16 22 14.2486 22 12.0889V3.91111C22 1.7514 20.3328 0 18.2769 0ZM15.3088 8.1568L8.70878 11.7124C8.6559 11.7401 8.59376 11.7387 8.54352 11.7068C8.49328 11.6749 8.46155 11.6179 8.46155 11.5554V4.4443C8.46155 4.3818 8.49328 4.32486 8.54352 4.29291C8.59376 4.26097 8.6559 4.25958 8.70878 4.28736L15.3088 7.84291C15.3656 7.87347 15.4013 7.93458 15.4013 8.00125C15.4013 8.06791 15.3656 8.12902 15.3088 8.15958V8.1568Z" fill="#7C7C7C"/>
    </YouTubeIconWrapper>
  )
}

export default YouTubeIcon;
