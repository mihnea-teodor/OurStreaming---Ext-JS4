config: {
        refs: {
            audio: 'audio',
            chartList: 'chartlist',
            infoView: {
                selector: 'infoview',
                xtype: 'infoview',
                autoCreate: true
            },
            player: {
                selector: 'playerlist',
                xtype: 'playerlist',
                autoCreate: true
            },
            songProgressBar: 'playerlist #progress-bar'
        },
        control: {
            'chartlist #info-btn': {
                tap: 'onChartInfoBtnTap'
            },
            'chartlist': {
                itemtap: 'onChartItemTap'
            },
            
            'infoview #return-btn': {
                tap: 'onInfoReturnBtnTap'
            },
            
            'playerlist': {
                'select': 'onPlayerSongSelect'
            },
            'playerlist #play-btn': {
                tap: 'onPlayerPlayBtnTap'
            },
            'playerlist #pause-btn': {
                tap: 'onPlayerPauseBtnTap'
            },
            'playerlist #forward-btn': {
                tap: 'onPlayerForwardBtnTap'
            },
            'playerlist #rewind-btn': {
                tap: 'onPlayerRewindBtnTap'
            },
            'playerlist #back-btn': {
                tap: 'onPlayerBackBtnTap'
            }
        }
    }