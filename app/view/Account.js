Ext.define('OurStreaming.view.Account', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.account',
	title: 'Setari Cont',
	renderTo: Ext.getBody(),
	
    items   : [
        {
            xtype: 'button',
			width: 250,
            text : 'Profil',
			handler: account
        },
		{
            xtype: 'button',
			width: 250,
            text : 'Setari',
			handler: settings
        },
		{
            xtype: 'button',
			width: 250,
            text : 'Deconectare',
			handler: logOut
        }
    ]	
});

function account() {
	Ext.create('Ext.window.Window', {
				autoShow: true,
				collapsible: true,
				animCollapse: true,
				maximizable: true,
                layout: 'column',
                title: 'Profil',
                closeAction: 'destroy',
				height: 200,
				width: 400,
				items: [
				{
					columnWidth: .50,
					xtype: 'panel',
					title: 'Date personale',
					items: [
					{
						xtype: 'textfield',
						fieldLabel: 'Nume si Prenume',
						name: 'personName'
					},
					{
						xtype: 'textfield',
						fieldLabel: 'Adresa',
						name: 'adress'
					}]
				},{
					columnWidth: .50,
					xtype: 'panel',
					title: 'Imagine profil',
					items: [
					{
                xtype: 'fieldset',
                itemId: 'imageWrapper',
                title: 'Image',
                width: 300,
                height: 140,
                margin: '0 0 0 0',
                layout: 'anchor',
                items: [{
                    xtype: 'image',
                    itemId: 'image',
                    maxWidth: 100,
                    maxHeight: 100
                }]
            },
			{
                xtype: 'container',
                margin: '4 0 0 5',
                layout: 'anchor',
                defaults: {
                    xtype: 'button',
                    width: 70,
                    margin: '0 0 5 0'
                },
                items: [{
                    itemId: 'clearButton',
                    text: 'Clear',
                    handler: function() {
                        me.clearImage();
                    }
                }, {
                    xtype: 'fileuploadfield',
                    buttonOnly: true,
                    hideLabel: true,
                    itemId: 'uploadButton',
                    buttonText: 'Upload...',
                    buttonConfig: { width: 70 },
                    listeners: {
                        change: function(el, val) { 
                            // this.up('window').fireEvent('uploadimage', fb, v);
                            me.uploadImage(el, val);
                        }
                    }
                }, {
                    itemId: 'fullResButton',
                    text: 'Download',
                    handler: function() { 
                        window.open(me.fullImagePath);
                    }
			}]}]
	}]}
	);
}
function settings() {
}

function logOut() {
	Ext.MessageBox.show({
           title:'Deconectare',
           msg: 'Doresti sa te deconectezi?',
           buttons: Ext.MessageBox.YESNOCANCEL,
           fn: loggedOut,
           animateTarget: 'mb6',
           icon: Ext.MessageBox.QUESTION
       });
}
function loggedOut(btn) {
	if(btn === 'yes') {
		var loginForm = new Ext.FormPanel({
			labelWidth   : 75,
			frame        : true,
			width        : 320,
			autoHeight   : true,        
			defaultType  : 'textfield',
			monitorValid : true,
			defaults     : {
            anchor : '-10'
			},
			items:[{
				xtype: 'textfield',
				fieldLabel: 'Email',
				name: 'email',
				emptyText: 'mail@example.com',
				maxLength: 50,
				minLength: 5,
				regex: /^([0-9a-zA-Z]+[\-._+&amp;])*[0-9a-zA-Z]+@([\-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/,
				regexText: 'Introduce-ti o adresa de email'
			},{
				xtype: 'textfield',
				fieldLabel: 'Parola',
				name: 'Password',
				inputType: 'password'
			}],

			buttons:[{
				text : 'Conectare',
				handler: loginFunction
			},{
				text : 'Inregistrare',
				handler: register
			}]
		});
		createWindow = new Ext.Window({
        title      : 'Conectare',
        width      : 330,
        autoHeight : true,
        modal      : true,
        border     : false,
        layout     : 'fit',
        items      : loginForm
    });
    createWindow.show();
	function loginFunction() {
	createWindow.close();
	Ext.Msg.alert('Esti conectat');
	}
	}
	if(btn === 'no') {
		Ext.Msg.alert('Esti conectat');
	}
}
function register(btn) {
	//form submit
		createWindow.close();
		var registerForm = new Ext.FormPanel({
			labelWidth   : 75,
			frame        : true,
			width        : 320,
			autoHeight   : true,        
			defaultType  : 'textfield',
			monitorValid : true,
			defaults     : {
            anchor : '-10'
			},
			items:[{
				xtype: 'textfield',
				fieldLabel: 'Nume si Prenume',
				name: 'personName'
			},{
				xtype: 'textfield',
				fieldLabel: 'Adresa',
				name: 'adress'
			},{
				xtype: 'textfield',
				fieldLabel: 'Email',
				name: 'email',
				emptyText: 'mail@example.com',
				maxLength: 50,
				minLength: 5,
				regex: /^([0-9a-zA-Z]+[\-._+&amp;])*[0-9a-zA-Z]+@([\-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/,
				regexText: 'Introduce-ti o adresa de email'
			},{
				xtype: 'textfield',
				fieldLabel: 'Parola',
				name: 'Password',
				inputType: 'password'
			}],

			buttons:[{
				text : 'Inregistrare',
				handler: registerFunction
			}]
		});
		createWindow = new Ext.Window({
        title      : 'Inregistrare',
        width      : 330,
        autoHeight : true,
        modal      : true,
        border     : false,
        layout     : 'fit',
        items      : registerForm
    });
    createWindow.show();
	
	function registerFunction() {
	createWindow.close();
	loggedOut('yes');
	}

}