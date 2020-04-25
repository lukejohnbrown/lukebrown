import React from "react"
import styled from "styled-components"

const DevelopIconWrapper = styled.svg`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  path {
    fill: ${({ theme }) => theme.palette.iconColor};
    border-color: ${({ theme }) => theme.palette.iconColor};
  }
`

const DevelopIcon = ({ width = 35, height = 30 }) => (
  <DevelopIconWrapper
    width={`${width}px`}
    height={`${height}px`}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.13159 5.13159H7.5987V7.5987H5.13159V5.13159Z" fill="#3D348B" />
    <path d="M10.0658 5.13159H12.5329V7.5987H10.0658V5.13159Z" fill="#3D348B" />
    <path
      d="M11.6601 15.3608L7.08826 19.9342L11.6601 24.5076L13.4056 22.7621L10.5761 19.9342L13.4056 17.1063L11.6601 15.3608Z"
      fill="#3D348B"
    />
    <path
      d="M16.5944 17.1063L19.4238 19.9343L16.5944 22.7622L18.3398 24.5077L22.9117 19.9343L18.3398 15.3608L16.5944 17.1063Z"
      fill="#3D348B"
    />
    <path
      d="M0.197388 29.8026H29.8026V0.197388H0.197388V29.8026ZM2.66449 27.3355V12.5329H27.3355V27.3355H2.66449ZM27.3355 2.66449V10.0658H2.66449V2.66449H27.3355Z"
      fill="#3D348B"
    />
  </DevelopIconWrapper>
)

export default DevelopIcon
