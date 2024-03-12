import React from "react";
import cx from "clsx";
import { useEffect, useRef, useReducer, useCallback } from "react";
import "./AudioPlayerFull.css";

import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const getTime = (seconds) =>
  !seconds ? "00:00" : new Date(seconds * 1000).toISOString().slice(14, 19);

export const AudioPlayerFull = ({ songs }) => {
  const player = useRef(null);
  const [playerState, setPlayerState] = useReducer(
    (state, action) => ({
      ...state,
      ...action
    }),
    {
      songs: [...songs],
      isPlaying: false,
      current: 0,
      progress: 0,
      volume: 100,
      prevVolume: 100
    }
  );

  const pause = () => {
    player.current.pause();
    setPlayerState({ isPlaying: false });
  };

  const play = () => {
    player.current.play();
    setPlayerState({ isPlaying: true });
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

  const handleSeek = (event) => {
    const { value } = event.target;
    setPlayerState({ progress: value });
    player.current.currentTime = (value / 100) * player.current.duration;
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setPlayerState({ volume: newVolume });
    player.current.volume = newVolume / 100;
  };

  const handlePlaylistPlay = (index) => {
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

    const updateProgress = (event) => {
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

  return (
    <>
      <div className="player" id="AudioPlayerFull">
        <audio
          ref={player}
          src={playerState.songs.at(playerState.current)?.audio}
        />
        {playerState.songs.at(playerState.current) && (
          <div className="song">
            <cite className="title">
              <a
                href={playerState.songs.at(playerState.current).attribution}
                className="link"
              >
                "{playerState.songs.at(playerState.current).name}"
              </a>
            </cite>
            <span className="artist">
              by {playerState.songs.at(playerState.current).artist}
            </span>
          </div>
        )}

        <button className="prev" onClick={playPrevious}>
          <SkipPreviousIcon color="action" fontSize="medium" />
        </button>

        <button className="play" onClick={pausePlay}>
          {playerState.isPlaying ? (
            <PauseIcon color="action" fontSize="medium" />
          ) : (
            <PlayArrowIcon color="action" fontSize="medium" />
          )}
        </button>

        <button className="next" onClick={playNext}>
          <SkipNextIcon color="action" fontSize="medium" />
        </button>

        <span className="time">
          {getTime(player.current?.currentTime)}&nbsp;/&nbsp;
          {getTime(player.current?.duration)}
        </span>

        <input
          type="range"
          className="progress"
          min="0"
          max="100"
          onChange={handleSeek}
          value={playerState.progress || 0}
        />

        <div className="volume">
          <button onClick={toggleMute}>
            {/* {playerState.volume === 0 ? (
              <div title="Unmute" />
            ) : playerState.volume > 50 ? (
              <VolumeMuteIcon color="action" fontSize="medium"/>
            ) : (
              <div title="Mute" />
            )} */}
            {playerState.volume == 0 && <VolumeMuteIcon color="action" fontSize="medium" />}
            {playerState.volume > 0 && playerState.volume < 50 && <VolumeDownIcon color="action" fontSize="medium" />}
            {playerState.volume >= 50 && <VolumeUpIcon color="action" fontSize="medium" />}
          </button>
          <input
            type="range"
            className="volume-slider"
            min="0"
            max="100"
            onChange={handleVolumeChange}
            value={playerState.volume}
          />
        </div>
      </div>
      {/* <ul className="songs">
        {playerState.songs.map((song, index) => (
          <li
            key={song.name}
            className={cx(
              "song",
              playerState.current === index && "song--current"
            )}
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
                <div title="Pause" />
              ) : (
                <div title="Play" />
              )}
            </button>
          </li>
        ))}
      </ul> */}
    </>
  );
};
