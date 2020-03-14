import React, { Fragment } from 'react'
import styled from "styled-components";

const SPAIconWrapper = styled.svg`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  path {
    fill: ${({ theme }) => theme.palette.iconColor};
    border-color: ${({ theme }) => theme.palette.iconColor};
  }
`;

const SPAIcon = ({ width = 22, height = 23 }) => {
  return (
    <SPAIconWrapper width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M10.7402 15.0572C7.61962 15.0572 4.6827 14.6035 2.6833 13.8123C2.4413 13.7168 2.32219 13.4427 2.41671 13.1997C2.42995 13.1647 2.47249 13.0589 2.47249 12.9908C2.47249 12.7318 2.25979 12.521 1.99795 12.521C1.84764 12.521 1.71152 12.5985 1.62265 12.7337C1.54798 12.8471 1.42792 12.9237 1.29368 12.9426C1.15944 12.9615 1.02237 12.9218 0.919329 12.8329C0.394673 12.383 0.11676 11.8555 0.11676 11.3082C0.11676 8.87315 5.59008 7.56006 10.7401 7.56006C14.1281 7.56006 17.2165 8.07431 19.213 8.97046C19.3302 9.0234 19.421 9.12076 19.4644 9.24082C19.5079 9.36182 19.5004 9.49417 19.4446 9.60948C19.4351 9.62839 19.4266 9.66809 19.4266 9.69267C19.4266 9.79098 19.5013 9.87039 19.593 9.87039C19.6459 9.87039 19.6932 9.84581 19.7187 9.80422C19.7887 9.69078 19.9031 9.61137 20.0335 9.58679C20.164 9.56222 20.3001 9.59341 20.406 9.67376C21.2171 10.2844 21.3872 10.8998 21.3872 11.3073C21.3872 12.4237 20.2434 13.3813 18.0786 14.0769C16.1124 14.7094 13.507 15.0572 10.7402 15.0572H10.7402ZM3.41487 13.0759C5.2932 13.7366 7.93155 14.111 10.7402 14.111C13.4116 14.111 15.9139 13.7792 17.7875 13.177C19.4238 12.6514 20.4401 11.9349 20.4401 11.3081C20.4401 11.0784 20.2992 10.8619 20.1234 10.6804C19.9646 10.7683 19.7821 10.8156 19.5912 10.8156C18.9786 10.8156 18.4795 10.3117 18.4795 9.69256V9.68689C16.6106 8.94388 13.7576 8.50525 10.7384 8.50525C4.74403 8.50525 1.06224 10.1378 1.06224 11.3081C1.06224 11.4886 1.13881 11.6569 1.24279 11.8034C1.46494 11.6569 1.72679 11.5766 1.99904 11.5766C2.78177 11.5766 3.4189 12.2118 3.4189 12.9917C3.41796 13.0201 3.41701 13.0484 3.41512 13.0758L3.41487 13.0759Z" fill="#3D348B"/>
      <path d="M10.7189 22.1468H10.7066C9.61948 22.1194 8.68645 20.9453 8.00951 18.7513C7.39221 16.751 7.05286 14.1078 7.05286 11.3089C7.05286 7.53704 7.69946 4.01207 8.74025 2.10729C8.86314 1.88325 9.14202 1.79724 9.36984 1.91255C9.41332 1.93429 9.4672 1.94942 9.48706 1.95037C9.57686 1.95037 9.65154 1.87096 9.65154 1.77265C9.65154 1.71309 9.63074 1.6715 9.62035 1.66204C9.51447 1.57224 9.45397 1.44084 9.45397 1.30188C9.45397 1.16291 9.51447 1.03151 9.62035 0.941707C9.9758 0.639207 10.3426 0.492676 10.7405 0.492676C11.8428 0.492676 12.7862 1.65447 13.4686 3.85139C14.0878 5.84506 14.4281 8.49295 14.4281 11.3089C14.4281 15.6128 13.6595 19.3554 12.424 21.0748C12.3427 21.1882 12.2151 21.2591 12.0762 21.2705C11.9372 21.2809 11.8001 21.2298 11.7028 21.1305C11.6517 21.0786 11.5723 21.0474 11.4891 21.0474C11.2755 21.0474 11.1469 21.2289 11.1469 21.4047C11.1469 21.4368 11.163 21.503 11.1772 21.5616C11.2121 21.7044 11.179 21.8556 11.0864 21.9709C10.9966 22.0815 10.8614 22.1468 10.7187 22.1468L10.7189 22.1468ZM9.40207 2.89282C8.53237 4.73241 7.99922 7.90101 7.99922 11.3089C7.99922 14.0163 8.32442 16.56 8.91427 18.4725C9.35195 19.8915 9.84635 20.6666 10.2661 21.0002C10.4343 20.4794 10.9193 20.1022 11.4902 20.1022C11.6264 20.1022 11.7597 20.1239 11.8863 20.1655C12.8647 18.4659 13.4839 15.076 13.4839 11.3088C13.4839 8.58631 13.1578 6.03781 12.5669 4.13206C11.9496 2.14596 11.2189 1.43787 10.7406 1.43787C10.6924 1.43787 10.6319 1.4426 10.5572 1.46718C10.5827 1.56454 10.5969 1.66758 10.5969 1.77345C10.5969 2.39263 10.0987 2.89648 9.48521 2.89648C9.45779 2.89648 9.42943 2.89459 9.40202 2.8927L9.40207 2.89282Z" fill="#3D348B"/>
      <path d="M4.58051 19.4773C4.00765 19.4773 3.55107 19.3091 3.22492 18.9763C2.45355 18.1898 2.59628 16.6915 3.63896 14.6421C4.589 12.7751 6.18553 10.653 8.13484 8.66689C11.366 5.37448 14.8966 3.16235 16.9206 3.16235C17.4954 3.16235 17.952 3.33062 18.2781 3.66337C19.0495 4.44892 18.9058 5.94535 17.8641 7.98912C16.9169 9.8476 15.3202 11.9727 13.3692 13.9721C11.7763 15.5867 10.106 16.9613 8.53668 17.9491C7.42972 18.6467 5.8454 19.4777 4.58046 19.4777L4.58051 19.4773ZM16.9206 4.10744C15.1623 4.10744 11.8262 6.25424 8.8097 9.32834C4.55679 13.6616 3.08301 17.4825 3.89976 18.3136C4.04156 18.4582 4.27031 18.531 4.58039 18.531C6.32354 18.531 9.66045 16.3832 12.6939 13.3091C14.5789 11.3778 16.116 9.33498 17.0216 7.55967C17.9688 5.70213 17.9433 4.67068 17.6039 4.32486C17.4621 4.18117 17.2324 4.10744 16.9205 4.10744H16.9206Z" fill="#3D348B"/>
      <path d="M16.9205 19.4773C14.8966 19.4773 11.3659 17.2653 8.13473 13.9728C6.18266 11.9725 4.58604 9.84743 3.63885 7.98887C2.59711 5.94417 2.45344 4.44769 3.22481 3.66312C3.55096 3.33037 4.00754 3.16211 4.5804 3.16211C5.84524 3.16211 7.43043 3.99304 8.53662 4.68973C10.1049 5.67758 11.7753 7.05207 13.3672 8.66483C15.3174 10.6519 16.9139 12.774 17.864 14.641C18.9067 16.6905 19.0504 18.1887 18.2781 18.9752C17.9519 19.308 17.4953 19.4772 16.9206 19.4772L16.9205 19.4773ZM4.58047 4.10743C4.27042 4.10743 4.04164 4.18117 3.89985 4.32486C3.56049 4.67084 3.53496 5.70218 4.48215 7.55967C5.38682 9.3359 6.9249 11.3777 8.81177 13.311C11.8283 16.3842 15.1633 18.531 16.9217 18.531C17.2327 18.531 17.4624 18.4572 17.6042 18.3136C18.42 17.4817 16.9472 13.6616 12.6942 9.32834C9.65981 6.25518 6.32384 4.10743 4.58072 4.10743H4.58047Z" fill="#3D348B"/>
      <path d="M9.48566 2.89644C8.87311 2.89644 8.37396 2.3926 8.37396 1.77342C8.37396 1.15423 8.87214 0.650391 9.48566 0.650391C10.0982 0.650391 10.5974 1.15423 10.5974 1.77342C10.5964 2.3926 10.0982 2.89644 9.48566 2.89644ZM9.48566 1.59475C9.39396 1.59475 9.31929 1.67415 9.31929 1.77247C9.31929 1.87078 9.39396 1.95019 9.48566 1.95019C9.57736 1.95019 9.65204 1.87078 9.65204 1.77247C9.65109 1.6751 9.57641 1.59475 9.48566 1.59475Z" fill="#3D348B"/>
      <path d="M19.5921 10.8164C18.9796 10.8164 18.4804 10.3125 18.4804 9.69334C18.4804 9.07416 18.9786 8.57031 19.5921 8.57031C20.2047 8.57031 20.7038 9.07416 20.7038 9.69334C20.7038 10.3125 20.2056 10.8164 19.5921 10.8164ZM19.5921 9.51467C19.5004 9.51467 19.4257 9.59408 19.4257 9.69239C19.4257 9.7907 19.5004 9.87011 19.5921 9.87011C19.6838 9.87011 19.7585 9.7907 19.7585 9.69239C19.7585 9.59502 19.6838 9.51467 19.5921 9.51467Z" fill="#3D348B"/>
      <path d="M11.4893 22.7073C10.7794 22.7073 10.2018 22.1231 10.2018 21.4047C10.2018 20.6863 10.7794 20.1021 11.4893 20.1021C12.1869 20.1021 12.7768 20.6985 12.7768 21.4047C12.7768 22.1108 12.1869 22.7073 11.4893 22.7073ZM11.4893 21.0473C11.2757 21.0473 11.1471 21.2288 11.1471 21.4047C11.1471 21.5805 11.2747 21.762 11.4893 21.762C11.668 21.762 11.8315 21.5919 11.8315 21.4047C11.8315 21.2175 11.6689 21.0473 11.4893 21.0473Z" fill="#3D348B"/>
      <path d="M1.99915 14.406C1.22872 14.406 0.60199 13.7707 0.60199 12.9908C0.60199 12.2109 1.22872 11.5757 1.99915 11.5757C2.78188 11.5757 3.41901 12.2109 3.41901 12.9908C3.41807 13.7717 2.78188 14.406 1.99915 14.406ZM1.99915 12.522C1.75432 12.522 1.54729 12.7375 1.54729 12.9918C1.54729 13.2461 1.75431 13.4616 1.99915 13.4616C2.261 13.4616 2.47369 13.2508 2.47369 12.9918C2.47274 12.7328 2.26005 12.522 1.99915 12.522Z" fill="#3D348B"/>
      <path d="M10.7445 13.1379C9.75948 13.1379 8.9588 12.3192 8.9588 11.3124C8.9588 10.3312 9.77649 9.50122 10.7445 9.50122C11.7371 9.50122 12.5444 10.3133 12.5444 11.3124C12.5453 12.3182 11.738 13.1379 10.7445 13.1379ZM10.7445 10.4466C10.2889 10.4466 9.9041 10.8427 9.9041 11.3125C9.9041 11.7899 10.2888 12.1926 10.7445 12.1926C11.2077 12.1926 11.599 11.7898 11.599 11.3125C11.6 10.8427 11.2086 10.4466 10.7445 10.4466Z" fill="#3D348B"/>
      <path d="M2.00744 20.3445C1.88266 20.3445 1.76167 20.2934 1.6728 20.2055C1.58583 20.1176 1.53479 19.9966 1.53479 19.8718C1.53479 19.748 1.58584 19.626 1.6728 19.5372C1.76072 19.4493 1.88266 19.3992 2.00744 19.3992C2.13128 19.3992 2.25322 19.4493 2.34208 19.5372C2.42999 19.626 2.48009 19.747 2.48009 19.8718C2.48009 19.9957 2.42905 20.1176 2.34208 20.2055C2.25322 20.2934 2.13222 20.3445 2.00744 20.3445Z" fill="#3D348B"/>
      <path d="M5.31616 21.2893C5.19138 21.2893 5.07038 21.2383 4.98152 21.1503C4.89455 21.0624 4.84351 20.9414 4.84351 20.8166C4.84351 20.6928 4.89455 20.5709 4.98152 20.482C5.06943 20.3941 5.19138 20.344 5.31616 20.344C5.43999 20.344 5.56193 20.3941 5.6508 20.482C5.73871 20.5699 5.78881 20.6919 5.78881 20.8166C5.78881 20.9405 5.73776 21.0624 5.6508 21.1503C5.56194 21.2383 5.44094 21.2893 5.31616 21.2893Z" fill="#3D348B"/>
      <path d="M5.31616 2.38329C5.19138 2.38329 5.07038 2.33225 4.98152 2.24528C4.89455 2.15642 4.84351 2.03542 4.84351 1.91064C4.84351 1.78586 4.89455 1.66487 4.98152 1.576C5.06943 1.48809 5.19138 1.43799 5.31616 1.43799C5.43999 1.43799 5.56193 1.48904 5.6508 1.576C5.73777 1.66486 5.78881 1.78586 5.78881 1.91064C5.78881 2.03542 5.73776 2.15642 5.6508 2.24528C5.56194 2.33225 5.44094 2.38329 5.31616 2.38329Z" fill="#3D348B"/>
      <path d="M2.00744 3.32861C1.88266 3.32861 1.76167 3.27756 1.6728 3.19059C1.58583 3.10173 1.53479 2.98073 1.53479 2.85595C1.53479 2.73117 1.58584 2.61018 1.6728 2.52132C1.76166 2.43435 1.88266 2.3833 2.00744 2.3833C2.13128 2.3833 2.25322 2.43435 2.34208 2.52132C2.42999 2.61018 2.48009 2.73118 2.48009 2.85595C2.48009 2.98073 2.42905 3.10173 2.34208 3.19059C2.25322 3.2785 2.13222 3.32861 2.00744 3.32861Z" fill="#3D348B"/>
      <path d="M19.9686 5.69189C19.8438 5.69189 19.7228 5.64084 19.634 5.55387C19.547 5.46501 19.496 5.34401 19.496 5.21924C19.496 5.09446 19.5461 4.97346 19.634 4.8846C19.7219 4.79668 19.8438 4.74658 19.9686 4.74658C20.0925 4.74658 20.2144 4.79763 20.3023 4.8846C20.3902 4.97251 20.4413 5.09446 20.4413 5.21924C20.4413 5.34402 20.3902 5.46501 20.3023 5.55387C20.2144 5.64084 20.0934 5.69189 19.9686 5.69189Z" fill="black"/>
      <path d="M20.9137 17.5081C20.7889 17.5081 20.6679 17.457 20.5791 17.3691C20.4911 17.2812 20.441 17.1592 20.441 17.0354C20.441 16.9116 20.4911 16.7896 20.5791 16.7008C20.6679 16.6138 20.7889 16.5627 20.9137 16.5627C21.0385 16.5627 21.1595 16.6128 21.2474 16.7008C21.3353 16.7887 21.3863 16.9106 21.3863 17.0354C21.3863 17.1592 21.3353 17.2812 21.2474 17.3691C21.1595 17.457 21.0385 17.5081 20.9137 17.5081Z" fill="black"/>
      <path d="M16.6599 21.2893C16.5351 21.2893 16.4141 21.2383 16.3253 21.1503C16.2374 21.0624 16.1873 20.9405 16.1873 20.8166C16.1873 20.6928 16.2374 20.5709 16.3253 20.482C16.4141 20.395 16.5351 20.344 16.6599 20.344C16.7837 20.344 16.9057 20.3941 16.9936 20.482C17.0815 20.5699 17.1326 20.6919 17.1326 20.8166C17.1326 20.9405 17.0815 21.0624 16.9936 21.1503C16.9057 21.2383 16.7847 21.2893 16.6599 21.2893Z" fill="#3D348B"/>
      <path d="M19.9686 3.32861C19.8438 3.32861 19.7228 3.27756 19.634 3.19059C19.547 3.10173 19.496 2.98073 19.496 2.85595C19.496 2.73117 19.5461 2.61018 19.634 2.52132C19.7219 2.4334 19.8438 2.3833 19.9686 2.3833C20.0925 2.3833 20.2144 2.43435 20.3023 2.52132C20.3902 2.61018 20.4413 2.73118 20.4413 2.85595C20.4413 2.98073 20.3902 3.10173 20.3023 3.19059C20.2144 3.2785 20.0934 3.32861 19.9686 3.32861Z" fill="black"/>
    </SPAIconWrapper>
  )
}

export default SPAIcon;