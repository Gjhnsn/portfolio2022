
interface IuiScreenSize {
    smallMobile: string;
    mobile: string;
    mobileLandscape: string;
    smallTablet: string;
    tablet: string;
    projectLayout: string;
    bigTablet: string;
    laptop13in: string;
    laptop13inHeight: string;
    laptop15in: string;
}

export const uiSize: IuiScreenSize = {
    smallMobile: `(max-width: 375px)`,
    mobile: `(max-width: 450px)`,
    mobileLandscape: `(max-width: 650px)`,
    smallTablet: `(max-width: 900px)`,
    tablet: `(max-width: 1024px)`,
    projectLayout: `(max-width: 1100px)`,
    bigTablet: `(max-width: 1280px)`,
    laptop13in: `(max-width: 1440px)`,
    laptop13inHeight: `(max-height: 800px)`,
    laptop15in: `(min-width: 1920px)`,
};