Ext.define('OurStreaming.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
	renderTo: Ext.getBody(),
    
    requires: [
		'OurStreaming.view.Account',
        'OurStreaming.view.SongControls',
        'OurStreaming.view.StationsList',
        'OurStreaming.view.RecentlyPlayedScroller',
        'OurStreaming.view.SongInfo',
		'OurStreaming.view.NewStation'
    ],
    
    initComponent: function() {
        this.items = {
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                height: 80,
                items: [{
                    xtype: 'newstation',
                    width: 150
                }, {
                    xtype: 'songcontrols',
                    flex: 1
                }, {
                    xtype: 'component',
                    html: 'OurStreaming<br>Internet Radio'
                }]
            }],
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                width: 250,
                xtype: 'panel',
                id: 'west-region',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
				{
                    xtype: 'account',
					collapsed: false,
					collapsible: true,
                    flex: 1
                },
				{
                    xtype: 'stationslist',
					collapsed: false,
					collapsible: true,
                    flex: 1
                }, {
					xtype: 'advertise',
					minHeight: 200,
					minWidth: 200,
                    html: '<img src="./data/ad.jpg" />',
                    xtype: 'panel',
                }]
            }, {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'recentlyplayedscroller',
                    height: 250
                }, {
                    xtype: 'songinfo',
                    flex: 1
                }]
            }]
        };
        
        this.callParent();
    }
});