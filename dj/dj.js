function createSong(name, artist, favorite = false, hasBeenPlayed = false) {
  return {
    name,
    artist,
    favorite,
    hasBeenPlayed,
  };
}

function playSong(song) {
  song.hasBeenPlayed = true;
  return song;
}

function makePlaylist(name, songs) {
  return { name, songs };
}

function addSongToPlaylist(playlist, song) {
  playlist.songs.push(song);
  return playlist;
}

function playSongs(playlist, specifiedSongs) {
  // updates all songs when specifiedSongs is not included
  // updates favorites only when specified songs === 'favorites only'
  playlist.songs.forEach(function (song) {
    if (
      !specifiedSongs ||
      (specifiedSongs === 'favorites only' && song.favorite)
    ) {
      song.hasBeenPlayed = true;
    }
  });

  return playlist;
}

module.exports = {
  createSong,
  playSong,
  makePlaylist,
  addSongToPlaylist,
  playSongs,
};
