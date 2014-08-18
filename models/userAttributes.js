UserAttributes = new Meteor.Collection("userAttributes");

var Schema = new SimpleSchema({
    userId: {
        type: String,
        label: 'User Id from Meteor.users'
    },
    userTokens: {
        type: Number,
            label: 'Total tokens this user has'
    }
});

UserAttributes.attachSchema(Schema);

//only if we use collection-helpers
UserAttributes.helpers({

});