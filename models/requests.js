Requests = new Meteor.Collection("requests");

var Schema = new SimpleSchema({
    userId: {
        type: String,
        label: 'Author ID'
    },
    title: {
        type: String,
        label: "Request title",
        max: 200
    },
    description: {
        type: String,
        label: "Request description"
    },
    instructions: {
        type: String,
        label: "Request instructions",
        optional: true
    },
    createdDate: {
        type: Date,
        label: "Date of request"
    },
    deadlineDate: {
        type: Date,
        label: "Date the request expires",
        optional: true
    },
    tokensInvested: {
        type: Number,
        label: "Total tokens invested"
    },
    appLink: {
        type: String,
        label: "Access link for the app"
    }
});

Requests.attachSchema(Schema);

//only if we use collection-helpers
Requests.helpers({
    responses: function() {
        return Responses.find({
            requestId: this._id
        },{
            sort: {
                createdDate: -1
            }
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
    },
    questionnaire: function() {
        return Questionnaires.find({
            requestId: this._id
        });
    },
    author: function() {
        return Meteor.users.find({
            _id: this.userId
        })
    }
});