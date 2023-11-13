export type Styles = {
  rhap_container: string;
  'rhap_controls-section': string;
  'rhap_main-controls-button': string;
  'rhap_progress-indicator': string;
  rhap_time: string;
  'rhap_volume-button': string;
  'rhap_volume-indicator': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
