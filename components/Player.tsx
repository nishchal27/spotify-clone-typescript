"use client";

import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongById from "@/hooks/useGetSongById";

import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    >
      {/* a little trick is used here: we're using key in child component b'coz we're using playlist and 
      we'll enable user skip to the next song. by using this trick we are ensuring that the player component
      is practically destroyed before loading the new song. that b'coz the hook we are using to play the song 
      unfortunately doesn't support dynamic and modular url changes, so this "key" trick will reset the entire hook
      which is going to be used inside this player component.
      # the "key" in component will destroy the element whenever it(key) will change */}
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;
