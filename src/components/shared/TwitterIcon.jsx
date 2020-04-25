import React from "react"
import styled from "styled-components"

const TwitterIconWrapper = styled.svg`
  path {
    fill: ${({ theme }) => theme.palette.contrastColor};
    border-color: ${({ theme }) => theme.palette.iconColor};
  }
`

const TwitterIcon = ({ width = 21, height = 18 }) => (
  <TwitterIconWrapper
    width={`${width}px`}
    height={`${height}px`}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.0015 2.82447C19.2654 3.15064 18.4755 3.37185 17.6457 3.47061C18.493 2.96319 19.1417 2.15836 19.4491 1.20228C18.6542 1.67218 17.7769 2.01339 16.842 2.19836C16.0935 1.39976 15.0286 0.902344 13.8476 0.902344C11.5818 0.902344 9.74463 2.7395 9.74463 5.00408C9.74463 5.32525 9.78087 5.63894 9.85087 5.93891C6.44152 5.76767 3.41836 4.13424 1.39499 1.65218C1.0413 2.25708 0.840088 2.96192 0.840088 3.7143C0.840088 5.1378 1.56496 6.39381 2.66476 7.12865C1.99238 7.10617 1.35999 6.9212 0.806362 6.61375V6.66499C0.806362 8.65211 2.2211 10.3105 4.09698 10.688C3.75329 10.7805 3.39087 10.8317 3.01594 10.8317C2.751 10.8317 2.49479 10.8055 2.24358 10.7555C2.76597 12.3864 4.28071 13.5724 6.07538 13.605C4.67188 14.7048 2.90221 15.3584 0.980088 15.3584C0.648911 15.3584 0.322702 15.3384 0.00152588 15.3021C1.81744 16.4682 3.97329 17.1481 6.29035 17.1481C13.8377 17.1481 17.9632 10.8967 17.9632 5.47525L17.9494 4.94411C18.7555 4.36917 19.4528 3.64682 20.0015 2.82447Z"
      fill="#2F2F2F"
    />
  </TwitterIconWrapper>
)

export default TwitterIcon
