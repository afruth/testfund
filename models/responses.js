Responses = new Meteor.Collection("responses");

var Schema = new SimpleSchema({
    requestId: {
        type: String,
        label: "Id of the request this answers to"
    },
    userId: {
        type: String,
        label: "Id of the user that answers"
    },
    responseText: {
        type: String,
        label: "Response text"
    },
    createdDate: {
        type: String,
        label: "Date of creation"
    }
});

Responses.attachSchema(Schema);

//only if we use collection-helpers
Responses.helpers({
    author: function() {
        return Meteor.users.find({
            _id: this.userId
        })
    },
    comments: function() {
        return Comments.find({
            docId: this._id
        },{
            sort: {
                createdDate: -1
            }
        })
    }
});