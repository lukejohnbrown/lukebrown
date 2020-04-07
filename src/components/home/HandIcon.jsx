import React from 'react'
import styled from "styled-components";

const HandIconWrapper = styled.svg`
  width: 37px;
  height: 37px;
  margin: -5px 0 0 ${({ theme }) => theme.space[3]};
  animation-name: wave;
  animation-duration: 2.5s;
  animation-iteration-count: 1;
  transform-origin: 60% 30%;

  path {
    fill: ${({ theme }) => theme.palette.text};;
  }

  @media ${({ theme }) => theme.breakpoints.up.md} {
    margin-top: -6px;
    width: 40px;
    height: 40px;
    margin-left: ${({ theme }) => theme.space[3]};
  }
`

const HandIcon = () => {
  return (
    <HandIconWrapper
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M24.7718 18.3477C24.6676 17.8432 24.4085 17.3849 23.9987 17.0531C23.7114 16.7937 23.4282 16.6509 23.0685 16.5121L23.6254 15.8954C24.5543 14.8668 24.4725 13.2611 23.4439 12.3322C23.1567 12.0728 22.8331 11.8919 22.4353 11.7952C22.7572 11.1905 22.7996 10.4811 22.5707 9.82578L22.5668 9.74931C22.4805 9.59656 22.2576 9.05787 21.7252 8.65376C21.2772 8.32394 20.7186 8.15499 20.1317 8.18488C19.6615 8.20883 19.2373 8.34734 18.8574 8.60243C18.7229 8.25664 18.508 7.91303 18.2207 7.65359C17.7265 7.20729 17.0875 6.96579 16.4203 6.99978C15.7551 7.03366 15.142 7.33895 14.6957 7.83314L9.7876 13.1445C9.78566 13.1063 9.82184 13.0642 9.8199 13.026C10.1639 12.0655 9.91323 11.0204 9.13164 10.3127C8.88454 10.0895 8.60123 9.90849 8.28171 9.80594C7.96227 9.7053 7.6448 9.64289 7.29305 9.66081C6.97955 9.67678 6.6318 9.77307 6.36247 9.90369C5.74942 10.209 5.305 10.7031 5.06167 11.3441L1.86683 20.3L1.87073 20.3765C0.942777 23.6435 1.9001 27.0486 4.40936 29.3161C6.13707 30.8763 8.4177 31.7031 10.7652 31.5835C13.1146 31.4638 15.2613 30.4518 16.8578 28.682L24.2146 20.5356C24.697 19.961 24.9304 19.125 24.772 18.3473L24.7718 18.3477ZM23.0691 19.5728L16.2712 27.1407L15.7505 27.7173C14.4134 29.1979 12.5722 30.0372 10.6929 30.1329C8.81386 30.2286 6.89882 29.619 5.41608 28.2437C3.31875 26.3497 2.50399 23.4857 3.2687 20.7772L6.46353 11.8213C6.56621 11.542 6.75307 11.3351 6.98421 11.2447C7.09887 11.2005 7.25357 11.1524 7.37209 11.1464C7.4887 11.1404 7.6474 11.1707 7.76796 11.2048C7.88651 11.2371 8.00903 11.3094 8.13167 11.422C8.46114 11.7195 8.56142 12.1456 8.42463 12.5455C8.42463 12.5455 6.78285 17.2997 6.61178 17.7797C6.51114 18.0991 6.64167 18.3665 6.8768 18.3546C6.9934 18.3486 7.10793 18.2642 7.2567 18.0995L9.29948 15.8374L15.7273 8.71962C15.9124 8.51471 16.1816 8.38217 16.4549 8.36825C16.7283 8.35433 17.0095 8.45691 17.2145 8.64387C17.6263 9.01578 17.6602 9.68104 17.2903 10.1311L11.0096 17.0859C10.7502 17.3732 10.7742 17.8434 11.0614 18.1028C11.2262 18.2516 11.3849 18.2818 11.5799 18.2719C11.6965 18.266 11.8513 18.2197 11.9658 18.1353L12.0765 18.0128L19.4754 9.90449C19.6604 9.69958 19.9296 9.56704 20.203 9.55312C20.4381 9.54114 20.6772 9.60754 20.8802 9.75436C21.0832 9.90118 21.1715 10.0922 21.2578 10.2449C21.3924 10.5907 21.2957 10.9885 21.0363 11.2758L13.6434 19.4643C13.4947 19.629 13.4283 19.8681 13.4784 20.0611C13.4863 20.2178 13.5727 20.3706 13.6952 20.4812C13.86 20.63 14.0187 20.6602 14.2137 20.6503L14.2921 20.6463C14.4488 20.6383 14.6016 20.552 14.7524 20.4274L20.9949 13.5148C21.18 13.3099 21.4492 13.1773 21.7225 13.1634C21.9959 13.1495 22.2771 13.2521 22.4821 13.439C22.8939 13.8109 22.9278 14.4762 22.5578 14.9263L16.6106 21.4715L15.4205 22.7894C15.161 23.0767 15.185 23.5469 15.4723 23.8064C15.637 23.9551 15.7957 23.9854 15.9907 23.9755C16.1857 23.9655 16.3786 23.8771 16.4893 23.7546L21.5419 18.1596C21.727 17.9547 21.9962 17.8221 22.2695 17.8082C22.5429 17.7943 22.8241 17.8969 23.0291 18.0838C23.1938 18.2326 23.2821 18.4236 23.3304 18.6185C23.3904 18.9681 23.3299 19.3239 23.0685 19.5729L23.0691 19.5728Z"
          fill="#2F2F2F"
        />
        <path
          d="M30.0745 15.3315C29.8394 15.3435 29.6906 15.5082 29.7026 15.7434C29.8721 19.0714 28.7394 22.2683 26.5097 24.7374C26.3609 24.9022 26.3729 25.1373 26.5376 25.2861C26.62 25.3604 26.7386 25.3927 26.8169 25.3887C26.8953 25.3847 27.01 25.3406 27.0843 25.2582C29.4628 22.6245 30.6639 19.2265 30.4844 15.7036C30.4743 15.4665 30.2695 15.3216 30.0745 15.3316L30.0745 15.3315Z"
          fill="#2F2F2F"
        />
        <path
          d="M27.8436 15.4452C27.6084 15.4571 27.4597 15.6219 27.4716 15.857C27.6132 18.6364 26.6897 21.313 24.8741 23.4082C24.7254 23.5729 24.7374 23.8081 24.9021 23.9568C24.9845 24.0312 25.0648 24.0654 25.1814 24.0595C25.298 24.0536 25.3744 24.0113 25.4488 23.929C27.4132 21.6709 28.4051 18.7935 28.2536 15.8192C28.2414 15.5802 28.0386 15.4353 27.8436 15.4453L27.8436 15.4452Z"
          fill="#2F2F2F"
        />
        <path
          d="M7.72212 7.2456C7.83873 7.23966 7.91516 7.19744 7.98954 7.11507C10.2192 4.64606 13.2845 3.19436 16.6126 3.02484C16.8478 3.01286 16.9965 2.84813 16.9846 2.613C16.9726 2.37788 16.7696 2.23106 16.5727 2.24109C13.0497 2.42054 9.79141 3.96067 7.41302 6.59441C7.26425 6.75914 7.27623 6.99427 7.44096 7.14304C7.52323 7.21551 7.64379 7.24961 7.72217 7.24562L7.72212 7.2456Z"
          fill="#2F2F2F"
        />
        <path
          d="M16.6808 4.35528C13.7486 4.58322 11.0308 5.93864 9.06054 8.11846C8.91178 8.28319 8.92375 8.51832 9.08849 8.66709C9.17086 8.74147 9.28941 8.77376 9.36778 8.76977C9.44615 8.76578 9.56082 8.72161 9.6352 8.63924C11.4567 6.62224 13.9815 5.35713 16.7188 5.13915C16.9539 5.12717 17.1008 4.9242 17.0907 4.72731C17.1189 4.49014 16.914 4.30509 16.6808 4.3553L16.6808 4.35528Z"
          fill="#2F2F2F"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            x="0.257874"
            y="2.4281"
            width="30"
            height="30"
            transform="rotate(-2.9159 0.257874 2.4281)"
            fill="white"
          />
        </clipPath>
      </defs>
    </HandIconWrapper>
  )
}

export default HandIcon
