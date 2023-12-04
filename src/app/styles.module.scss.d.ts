export type Styles = {
  errorWrapper: string;
  mainVisual: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
