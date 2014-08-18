UserRatings = new Meteor.Collection("userRatings");

var Schema = new SimpleSchema({
    raterId: {
        type: String,
    label: 'User Id from Meteor.users for the rater'
    },
    rateeId: {
        type: String,
        label: 'User Id from Meteor.users for the one being rated'
    },
    reqId: {
        type: String,
        label: 'The ID of the request the user was rated for'
    },
    score: {
        type: Number,
        label: 'Score for this rating (0-5)'
    },
    ratingText: {
        type: String,
        label: 'The rating text'
    }
});

UserRatings.attachSchema(Schema);

//only if we use collection-helpers
UserRatings.helpers({

});