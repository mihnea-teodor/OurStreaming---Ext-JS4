Ext.define('OurStreaming.store.SearchResults', {
    extend: 'Ext.data.Store',
    requires: 'OurStreaming.model.Station',
    model: 'OurStreaming.model.Station',

    autoLoad: true,
    
    // Overriding the model's default proxy
    proxy: {
        type: 'ajax',
        url: 'data/stations.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});