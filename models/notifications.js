Notifications = new Meteor.Collection("notifications");

var Schema = new SimpleSchema({
    userId: {
        type: String,
        label: 'User that should receive this notification'
    },
    createdAt: {
        type: Date,
        label: 'Date the notification was created at'
    },
    read: {
        type: Boolean,
        label: 'If this notification was read or not'
    }
});

Notifications.attachSchema(Schema);

//only if we use collection-helpers
Notifications.helpers({

});