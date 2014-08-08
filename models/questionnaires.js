Questionnaires = new Meteor.Collection("questionnaires");

var Schema = new SimpleSchema({
    requestId: {
        type: String,
        label: "The request this questionnaire is attached to"
    },
    responses: {
        type: [Object],
        label: "Array of objects holding the response"
    },
    'responses.$.text': {
        type: String,
        label: "Response item text"
    },
    'responses.$.id': {
        type: String,
        label: "An unique id for this particular answer"
    },
    createdDate: {
        type: Date,
        label: "Date of creation"
    }
});

Questionnaires.attachSchema(Schema);

//only if we use collection-helpers
Questionnaires.helpers({

});