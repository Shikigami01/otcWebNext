export type archiveList = {
  id: number;
  modelNumber: string;
  imageUrl: string;
  releaseDate: string;
  title: string;
  listenLink: string;
  isListenLinkFlag: boolean;
  trackList: trackList;
};

export type trackList = [
  { trackName: string; isOriginalSongFlag: boolean; originalSongName: string },
];
