export type Styles = {
  artwork: string;
  contents: string;
  date: string;
  player: string;
  title: string;
  wrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
