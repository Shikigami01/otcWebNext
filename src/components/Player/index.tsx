'use client';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

type Props = {
  id: number;
  isListen: boolean;
};

export const Player: React.FC<Props> = ({ id, isListen }) => {
  const src = `/audio/${String(id).padStart(4, '0')}.m4a`;

  return (
    <>
      {isListen && (
        <AudioPlayer
          src={src}
          volume={0.2}
          showJumpControls={false}
          autoPlayAfterSrcChange={false}
          customAdditionalControls={[]}
        />
      )}
    </>
  );
};
