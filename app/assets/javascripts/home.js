$(document).ready(function(){

i = -1

SC.initialize({
    client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

$('#play').click(function(){
	i = i + 1
	SC.stream('/tracks/' + trackIds[i]).then(function(player){
		outerPlayer = player;
		player.play();

	artistName = $('.artist-name')
	songTitle = $('.song-title')

	artistName.empty();
	songTitle.empty();

	artistName.append($('#search')[0].value)
	songTitle.append(outerTracks[i].title)
	})
})

$('#stop').click(function(){
	outerPlayer.pause();
})

$('#back').click(function(){
	i = i - 1;

	SC.stream('/tracks/' + trackIds[i]).then(function(player){
		outerPlayer = player;
		player.play();
	
	artistName = $('.artist-name')
	songTitle = $('.song-title')

	artistName.empty();
	songTitle.empty();

	artistName.append($('#search')[0].value)
	songTitle.append(outerTracks[i].title)
	});
})

$('#searchButton').click(function(){
	var query = $('#search').val;

	SC.get('/tracks', {
		q: query, license: 'cc-by-sa'
	}).then(function(tracks){

		trackIds = tracks.map(function(track){
			return track.id
		})
		outerTracks = 
		console.log(trackIds)
	})
})

})