import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--callout-bold: Poppins;
--font-roboto: Roboto;
--font-lexend: Lexend;
--font-inter: Inter;
--font-sf-pro: 'SF Pro';
--caption-2: 'SF Pro Text';
--font-jura: Jura;
--font-comfortaa: Comfortaa;

/* font sizes */
--font-size-sm: 14px;
--font-size-xl: 20px;
--callout-bold-size: 16px;
--font-size-11xl: 30px;
--font-size-xs: 12px;
--font-size-5xl: 24px;
--font-size-13xl: 32px;
--font-size-smi: 13px;
--font-size-3xs: 10px;
--font-size-mini: 15px;
--font-size-lg: 18px;
--caption-2-size: 11px;
--body-bold-size: 17px;
--font-size-3xl: 22px;
--font-size-6xl: 25px;
--font-size-16xl: 35px;

/* Colors */
--primary-0: #fff;
--color-whitesmoke-100: #f9f9f9;
--color-whitesmoke-200: #f6f3f2;
--color-whitesmoke-300: #ededed;
--color-whitesmoke-400: #ececec;
--color-gray-100: #8f7b6c;
--color-gray-200: #2b2b2e;
--primary-900: #1a1a1a;
--color-gray-300: #0c0c0c;
--color-gray-400: #0a0a0a;
--color-gray-500: rgba(255, 255, 255, 0.9);
--fill-primary: rgba(120, 120, 128, 0.36);
--color-gray-600: rgba(0, 0, 0, 0.5);
--color-darkslategray-100: #494949;
--gray-gray-3: #48484a;
--gray-gray-4: #3a3a3c;
--color-darkslategray-200: #11303d;
--color-sienna-100: #6d422a;
--color-sienna-200: rgba(109, 66, 42, 0.17);
--color-sienna-300: rgba(109, 66, 42, 0.13);
--color-sienna-400: rgba(109, 66, 42, 0.21);
--color-dimgray-100: #626262;
--separator-non-opaque: rgba(84, 84, 88, 0.65);
--color-black: #000;
--primary-100: #e6e6e6;
--color-gainsboro-100: rgba(224, 215, 210, 0.29);
--color-ghostwhite-100: #f1f4ff;
--label-secondary: rgba(235, 235, 245, 0.6);
--label-tertiary: rgba(235, 235, 245, 0.3);
--color-darkgray-100: #b2b2b2;
--color-darkgray-200: #aeaeae;
--primary-400: #999;
--color-slategray: #7d8392;
--color-firebrick: rgba(192, 20, 20, 0.53);
--accent-color: #64d2ff;
--accent-yellow: #ffd60a;
--accent-green: #30d158;
--accent-red: #ff453a;
--color-red: #ff0606;
--color-mediumspringgreen: #3adc7b;

/* Gaps */
--gap-3xs: 10px;
--gap-10xs: 3px;
--gap-mini: 15px;
--gap-7xl: 26px;
--gap-xl: 20px;
--gap-11xl: 30px;
--gap-10xl: 29px;
--gap-18xl: 37px;
--gap-3xl: 22px;
--gap-xl-3: 20.3px;
--gap-9xs: 4px;
--gap-19xl: 38px;
--gap-35xl: 54px;
--gap-smi: 13px;
--gap-2xs-8: 10.8px;
--gap-8xl-5: 27.5px;
--gap-10xs-4: 2.4px;
--gap-mini-7: 14.7px;
--gap-7xs: 6px;
--gap-2xl: 21px;
--gap-14xl: 33px;
--gap-28xl: 47px;
--gap-6xs: 7px;
--gap-20xl: 39px;
--gap-lg-5: 18.5px;
--gap-683xl-6: 702.6px;
--gap-5xs-5: 7.5px;
--gap-4xs: 9px;
--gap-mid: 17px;
--gap-12xs-5: 0.5px;
--gap-base: 16px;
--gap-5xl: 24px;
--gap-63xl: 82px;
--gap-7xs-2: 5.2px;
--gap-9xs-5: 3.5px;
--gap-5xs: 8px;
--gap-lgi: 19px;
--gap-4xl: 23px;
--gap-9xl: 28px;
--gap-8xs: 5px;
--gap-xs: 12px;
--gap-sm: 14px;
--gap-5xs-3: 7.3px;
--gap-26xl-9: 45.9px;

/* Paddings */
--padding-6xs: 7px;
--padding-sm: 14px;
--padding-52xl: 71px;
--padding-3xs: 10px;
--padding-lg: 18px;
--padding-xl: 20px;
--padding-mini: 15px;
--padding-mid: 17px;
--padding-base: 16px;
--padding-smi: 13px;
--padding-16xl: 35px;
--padding-13xl: 32px;
--padding-14xl: 33px;
--padding-9xl: 28px;
--padding-7xl: 26px;
--padding-7xs: 6px;
--padding-2xs: 11px;
--padding-8xs: 5px;
--padding-5xs: 8px;
--padding-4xs: 9px;
--padding-9xs: 4px;
--padding-xs: 12px;
--padding-4xl: 23px;
--padding-12xs: 1px;
--padding-19xl: 38px;
--padding-33xl: 52px;
--padding-11xs: 2px;
--padding-8xl: 27px;
--padding-15xl: 34px;
--padding-base-6: 15.6px;
--padding-40xl: 59px;
--padding-4xl-5: 23.5px;
--padding-8xs-3: 4.3px;
--padding-5xl-6: 24.6px;
--padding-111xl: 130px;
--padding-10xs: 3px;
--padding-12xl: 31px;
--padding-41xl: 60px;
--padding-45xl: 64px;
--padding-3xl: 22px;
--padding-lg-7: 18.7px;
--padding-28xl: 47px;
--padding-lgi: 19px;
--padding-90xl: 109px;
--padding-12xs-5: 0.5px;
--padding-sm-5: 13.5px;
--padding-104xl: 123px;
--padding-2xl: 21px;
--padding-38xl: 57px;
--padding-base-5: 16.5px;
--padding-29xl: 48px;
--padding-49xl: 68px;
--padding-48xl: 67px;
--padding-46xl: 65px;

/* Border radiuses */
--br-3xs: 10px;
--br-7xs: 6px;
--br-5xl: 24px;
--br-81xl: 100px;
--br-mini: 15px;
--br-12xl: 31px;
--br-29xl: 48px;
--br-5xs: 8px;
--br-4xl: 23px;
--br-101xl: 120px;
--br-11xs: 2px;
--br-xs: 12px;
--br-2xs: 11px;
--br-9xs: 4px;

/* Effects */
--material-regular: blur(50px);
}
`;
