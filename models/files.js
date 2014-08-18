Files = new Meteor.Collection("files");

var Schema = new SimpleSchema({
    //TODO: Think the files collection through
});

Files.attachSchema(Schema);

//only if we use collection-helpers
Files.helpers({

});