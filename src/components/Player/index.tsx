import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

type Props = {
  id: number;
};

export const Player: React.FC<Props> = ({ id }) => {
  const src = `/audio/${String(id).padStart(4, "0")}.mp3`;

  return (
    <AudioPlayer
      src={src}
      onPlay={(e) => console.log("onPlay")}
      volume={0.2}
      showJumpControls={false}
      autoPlayAfterSrcChange={false}
      customAdditionalControls={[]}
    />
  );
};
