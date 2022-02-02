Ext.define('OurStreaming.view.SongInfo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.songinfo',
    
    tpl: '<h1>About {artist_name}</h1><p><img src="{image}" /></p> <audio id="player" controls="" name="media"><source src="{audio}" type="audio/mpeg"></audio>',
    
    initComponent: function() {
        this.dockedItems = [{
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'end'
            },
            height: 300,
            items: [{
                xtype: 'component',
                width: 400,
                itemId: 'songdescription',
                tpl: '<h2>{artist_name}</h2><h1>{name}</h1><h2>{releasedate}</h2>'
				}]
			}];
        
        this.callParent();
    },
    
	update: function(record) {
        var data = record ? record.data : {};
		this.down('#songdescription').update(data);
        this.callParent([data]);
    }
});