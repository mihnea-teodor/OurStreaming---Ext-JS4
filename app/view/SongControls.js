Ext.define('OurStreaming.view.SongControls', {
    extend: 'Ext.Container',
    alias: 'widget.songcontrols',
    height: 70,
    
    initComponent: function() {
        this.layout = {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        };
        
        this.items = [{
            xtype: 'container',
            defaultType: 'button',
            height: 50,
            width: 300,
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            width: 300,
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'center'
            },
            items: [
			{
				xtype: 'component',
                width: 400,
                html: '<h1>OurStreaming</h1>'
			}]
        }];
        
        this.callParent();
    },
    
    update: function(record) {
        var data = record ? record.data : {};
        this.down('#songaudio').update(data);
        this.callParent([data]);
    }
});