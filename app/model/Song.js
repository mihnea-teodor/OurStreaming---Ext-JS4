Ext.define('OurStreaming.model.Song', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'artist_name', 'album_name', 'releasedate', 'image', 'album_image', 'station', 'audio'],
    
    proxy: {
        type: 'ajax',
        url: 'data/recentsongs.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});