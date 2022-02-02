Ext.define('OurStreaming.store.RecentSongs', {
    extend: 'Ext.data.Store',
    requires: 'OurStreaming.model.Song',    
    model: 'OurStreaming.model.Song'
});