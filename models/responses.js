Responses = new Meteor.Collection("responses");

var Schema = new SimpleSchema({
    questionnaireId: {
        type: String,
        label: "Id of the questionnaire this answers to"
    },
    userId: {
        type: String,
        label: "Id of the user that answers"
    },
    responses: {
        type: [Object],
        label: "Array of responses"
    },
    'responses.$.id': {
        type: String,
        label: "Response Id from questionnaires"
    },
    'responses.$.response': {
        type: String,
        label: "Answer text"
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