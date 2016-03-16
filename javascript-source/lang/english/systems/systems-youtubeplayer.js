$.lang.register('ytplayer.client.404', 'The YouTube Player is not connected!');
$.lang.register('ytplayer.playlist.404', 'Cannot find playlist [$1]');
$.lang.register('ytplayer.announce.nextsong', '[\u266B] Now Playing [$1] Requester: $2');
$.lang.register('ytplayer.console.client.connected', '[\u266B] YouTube Player is connected! [\u266B]');
$.lang.register('ytplayer.console.client.disconnected', '[\u266B] YouTube Player is disconnected! [\u266B]');
$.lang.register('ytplayer.songrequests.enabled', '[\u266B] Song requests are enabled! [\u266B]');
$.lang.register('ytplayer.songrequests.disabled', '[\u266B] Song requests have been disabled! [\u266B]');
$.lang.register('ytplayer.command.volume.get', 'Current YouTube Player Volume: $1');
$.lang.register('ytplayer.command.volume.set', 'Set YouTube Player Volume: $1');
$.lang.register('ytplayer.command.ytp.togglerandom.toggled', 'YouTube Player Playlist Randomization has been $1');
$.lang.register('ytplayer.command.ytp.toggleannounce.toggled', 'YouTube Player Announcements have been $1');
$.lang.register('ytplayer.command.ytp.setrequestmax.usage', 'usage: !ytp setrequestmax [max requests]');
$.lang.register('ytplayer.command.ytp.setrequestmax.success', 'Maximum concurrent song requests set to $1');
$.lang.register('ytplayer.command.ytp.setmaxvidlength.usage', 'usage: !ytp setmaxvidlength [seconds]');
$.lang.register('ytplayer.command.ytp.setmaxvidlength.success', 'Maximum song request length set to $1 seconds.');
$.lang.register('ytplayer.command.ytp.setdjname.usage', 'usage: !ytp setdjname [name]');
$.lang.register('ytplayer.command.ytp.setdjname.success', 'Changed DJ name to $1');
$.lang.register('ytplayer.command.playlist.usage', 'usage: !playlist [add | delete | loadpl | deletepl | listpl | importpl]');
$.lang.register('ytplayer.command.playlist.add.failed', 'Failed to add song to playlist: $1');
$.lang.register('ytplayer.command.playlist.add.usage', 'usage: !ytp playlist add [youtube link]');
$.lang.register('ytplayer.command.playlist.add.success', 'Success adding [$1] to playlist [$2]');
$.lang.register('ytplayer.command.playlist.load.success.new', 'Loaded empty playlist [$1]');
$.lang.register('ytplayer.command.playlist.load.success', 'Loaded playlist [$1]');
$.lang.register('ytplayer.command.playlist.load.usage', 'usage: !playlist loadpl [playlist name]');
$.lang.register('ytplayer.command.playlist.delete.isdefault', 'Cannot delete default playlist!');
$.lang.register('ytplayer.command.playlist.delete.success', 'Deleted playlist [$1]');
$.lang.register('ytplayer.command.playlist.delete.404', 'Playlist [$1] does not exist!');
$.lang.register('ytplayer.command.playlist.delete.usage', 'usage: !playlist deletepl [playlist name]');
$.lang.register('ytplayer.command.playlist.listpl', 'Playlists: $1');
$.lang.register('ytplayer.command.stealsong.this.success', '$1 copied the current song to the playlist.');
$.lang.register('ytplayer.command.stealsong.other.success', '$1 copied the current song to the [$2] playlist.');
$.lang.register('ytplayer.command.jumptosong.failed', 'Cannot find song at position $1 in playlist.');
$.lang.register('ytplayer.command.songrequest.usage', 'usage: !songrequest [YouTube ID | YouTube link | search string]');
$.lang.register('ytplayer.command.songrequest.success', '$1 has requested [$2] (Position: $3 ID: $4)');
$.lang.register('ytplayer.command.songrequest.failed', 'Failed adding song to queue: $1');
$.lang.register('ytplayer.command.previoussong', 'Previous song was [$1] requested by $2 from $3');
$.lang.register('ytplayer.command.previoussong.404', 'There is not a previous song to report');
$.lang.register('ytplayer.command.currentsong', 'Current song is [$1] requested by $2 from $3');
$.lang.register('ytplayer.command.currentsong.404', 'There is not a curent song');
$.lang.register('ytplayer.command.delrequest.success', 'Removed song with ID [$1] and title of [$2] from song requests.');
$.lang.register('ytplayer.command.delrequest.404', 'Song requests do not have a song with an ID of [$1]');
$.lang.register('ytplayer.command.delrequest.usage', 'usage: !ytp delrequest [YouTube ID]');
$.lang.register('ytplayer.command.ytp.usage', 'usage: !ytp [togglesongrequest | toggleanounce | delrequest | volume | togglerandom | setrequestmax | setmaxvidlength]');
$.lang.register('ytplayer.command.wrongsong.success', 'Removed last requested song: [$1]');
$.lang.register('ytplayer.command.wrongsong.404', 'No songs found');
$.lang.register('ytplayer.command.wrongsong.user.success', 'Removed last requested song from $1: [$2]');
$.lang.register('ytplayer.command.wrongsong.usage', 'usage: !wrongsong [user] [username]. Without [user] deletes your last request.');
$.lang.register('ytplayer.command.nextsong.single', 'Next Song: $1');
$.lang.register('ytplayer.command.nextsong.amount', 'Next $1 Songs: $2');
$.lang.register('ytplayer.command.nextsong.range', 'Songs in Range: $1');
$.lang.register('ytplayer.command.nextsong.usage', 'usage: !nextsong [index number | next [n] | list [x-y]. Display next song, or title at index number or next n songs or a range with list x-y');
$.lang.register('ytplayer.command.nextsong.404', 'Song request queue is empty.');
$.lang.register('ytplayer.command.nextsong.range.404', 'No songs found in that range.');
$.lang.register('ytplayer.requestsong.error.maxrequests', 'exceeds maximum concurrent requests');
$.lang.register('ytplayer.requestsong.error.disabled', 'song requests are disabled');
$.lang.register('ytplayer.requestsong.error.yterror', 'YouTube error ($1)');
$.lang.register('ytplayer.requestsong.error.exists', 'song is already in queue');
$.lang.register('ytplayer.requestsong.error.maxlength', 'song length is $1 and exceeds maximum length');
$.lang.register('ytplayer.command.importpl.file.start', 'Import has started, please wait...');
$.lang.register('ytplayer.command.importpl.file.success', 'Import Complete! Successfully imported $1 songs and failed to import $2 songs from $3 to playlist $4');
$.lang.register('ytplayer.command.importpl.file.404', 'Could not find file $1');
$.lang.register('ytplayer.command.importpl.file.registry404', 'List $1 was not created in DB, try again.');
$.lang.register('ytplayer.command.importpl.file.usage', 'usage: !importpl file [playlist name] [filename]');
