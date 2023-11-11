export type archiveListType = {
  id: number;
  releaseDate: string;
  title: string;
  isListen: boolean;
  trackList: trackListType[];
};

export type trackListType = {
  trackName: string;
  isOriginalSongFlag: boolean;
  originalSongName: string;
};
