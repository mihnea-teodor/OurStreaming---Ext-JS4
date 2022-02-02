Ext.define('OurStreaming.model.RegisterForm', {
    extend: 'Ext.data.Model',
    alias: 'model.registerform',

    requires: [
        'Ext.data.field.String'
    ],

    fields: [
        {
            type: 'string',
            name: 'FirstName'
        },
        {
            type: 'string',
            name: 'LastName'
        },
        {
            name: 'Adress'
        },
        {
            type: 'string',
            name: 'Email'
        },
        {
            type: 'string',
            name: 'Username'
        },
        {
            type: 'string',
            name: 'Password'
        }
    ]
});