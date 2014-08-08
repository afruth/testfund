Comments = new Meteor.Collection("comments");

var Schema = new SimpleSchema({
    userId: {
        type: String,
        label: "Comment author"
    },
    text: {
        type: String,
        label: "Comment text"
    },
    createdDate: {
        type: Date,
        label: "Comment creation date"
    },
    docId: {
        type: String,
        label: "Document commented on"
    }
});

Comments.attachSchema(Schema);

//only if we use collection-helpers
Comments.helpers({
    author: function() {
        return Meteor.users.find({
            _id: this.userId
        })
    }
});