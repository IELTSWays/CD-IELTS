import { useEffect, useRef, useReducer, useCallback, useState } from "react";

// mtu
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
// mtu

const getTime = (seconds: number) =>
  !seconds ? "00:00" : new Date(seconds * 1000).toISOString().slice(14, 19);

export const AudioPlayer = ({ songs, onPlayStatusChange }: any) => {

  const [showVolume, setShowVolume] = useState(false);

  const player = useRef<any>(null);
  const [playerState, setPlayerState] = useReducer(
    (state: any, action: any) => ({
      ...state,
      ...action
    }),
    {
      songs: [...songs],
      isPlaying: false,
      current: 0,
      progress: 0,
      volume: 50,
      prevVolume: 100
    }
  );

  const pause = () => {
    player.current.pause();
    setPlayerState({ isPlaying: false });
    onPlayStatusChange(false);
  };

  const play = () => {
    player.current.play();
    setPlayerState({ isPlaying: true });
    onPlayStatusChange(true);
  };

  const pausePlay = () => {
    if (playerState.isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const playNext = useCallback(() => {
    const next =
      playerState.current < playerState.songs.length
        ? playerState.current + 1
        : 0;

    setPlayerState({ current: next });
    player.current.addEventListener("canplay", () => play(), { once: true });
  }, [playerState]);

  const playPrevious = () => {
    const prev =
      playerState.current > 0
        ? playerState.current - 1
        : playerState.songs.length - 1;

    setPlayerState({ current: prev });
    player.current.addEventListener("canplay", () => play(), { once: true });
  };

  const handleSeek = (event: any) => {
    const { value } = event.target;
    setPlayerState({ progress: value });
    player.current.currentTime = (value / 100) * player.current.duration;
  };

  const handleVolumeChange = (event: any) => {
    const newVolume = event.target.value;
    setPlayerState({ volume: newVolume });
    player.current.volume = newVolume / 100;
  };

  const handlePlaylistPlay = (index: any) => {
    if (playerState.current === index) {
      pausePlay();
    } else {
      setPlayerState({ current: index });
      player.current.addEventListener("canplay", () => play(), { once: true });
    }
  };

  const toggleMute = () => {
    if (playerState.volume === 0) {
      setPlayerState({ volume: playerState.prevVolume });
      player.current.volume = playerState.prevVolume / 100;
    } else {
      setPlayerState({ volume: 0, prevVolume: playerState.volume });
      player.current.volume = 0;
    }
  };

  useEffect(() => {
    if (!player.current) return;

    const updateProgress = (event: any)  => {
      const progress = Math.floor(
        (event.target.currentTime / event.target.duration) * 100
      );

      if (progress === 100) {
        playNext();
      } else {
        setPlayerState({ progress });
      }
    };

    player.current.addEventListener("timeupdate", updateProgress);

    return () => { };
  }, [player, playNext, setPlayerState]);

  useEffect(() => {
    play()
  }, [])

  return (
    <>
      <>
        <audio
          ref={player}
          src={playerState.songs.at(playerState.current)?.audio}
        />
      </>

      <div className='ielts-footer-btn' onClick={pausePlay}>
        {playerState.isPlaying ? (
          <PauseIcon color="action" fontSize="small" />
        ) : (
          <PlayArrowIcon color="action" fontSize="small" />
        )}
      </div>

      <div className='ielts-footer-btn relative'>
        <span className="d-flex" onClick={() => setShowVolume(!showVolume)}>
          {playerState.volume == 0 && <VolumeMuteIcon color="action" fontSize="small" />}
          {playerState.volume > 0 && playerState.volume < 50 && <VolumeDownIcon color="action" fontSize="small" />}
          {playerState.volume >= 50 && <VolumeUpIcon color="action" fontSize="small" />}
        </span>
        {showVolume &&
          <Box sx={{ width: 150 }} className="volume-controller">
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <Slider aria-label="Volume" value={playerState.volume} defaultValue={50} onChange={handleVolumeChange} />
            </Stack>
          </Box>
        }
      </div>

      {/* <ul className="songs">
        {playerState.songs.map((song, index) => (
          <li
            key={song.name}
            className={
              playerState.current === index && "song--current"
            }
          >
            <cite className="title">
              <a href={song.attribution} className="link">
                "{song.name}"
              </a>
            </cite>
            <span className="artist">by {song.artist}</span>
            <button
              className="action"
              onClick={() => handlePlaylistPlay(index)}
            >
              {playerState.current === index && playerState.isPlaying ? (
                <div>Pause</div>
              ) : (
                <div>PLAY</div>
              )}
            </button>
          </li>
        ))}
      </ul> */}
    </>
  );
};
