Ext.define('OurStreaming.view.StationsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stationslist',
    
    store: 'Stations',
    title: 'Muzica Online',
    hideHeaders: true,
    
    initComponent: function() {
        this.columns = [{
            dataIndex: 'name',
            flex: 1
        }];
        
        this.callParent();
    }
});