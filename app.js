Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'Station',
        'Song'
    ],
    stores: [
		'Stations',
		'RecentSongs',
		'SearchResults'
	],
    views: [
        'Viewport',
		'SongControls',
		'SongInfo',
		'StationsList',
		'Account',
		'RecentlyPlayedScroller'
    ],
    controllers: [
		'Station',
		'Song'
	],
    name: 'OurStreaming',

    launch: function() {
        Ext.create('OurStreaming.view.Viewport', {renderTo: Ext.getBody()});
    }

});