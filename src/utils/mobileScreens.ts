
interface IuiScreenSize {
    mobile: string;
    mobileLandscape: string;
    smallTablet: string;
    tablet: string;
    bigTablet: string;
    laptop13in: string;
    laptop15in: string;
}

export const uiSize: IuiScreenSize = {
    mobile: `(max-width: 450px)`,
    mobileLandscape: `(max-width: 650px)`,
    smallTablet: `(max-width: 900px)`,
    tablet: `(max-width: 1024px)`,
    bigTablet: `(max-width: 1200px)`,
    laptop13in: `(max-width: 1440px)`,
    laptop15in: `(max-width: 1920px)`,
};