/**
 * Created by andreasfruth on 18/08/14.
 *
 * Extending the users collection with collection helpers.
 */

Meteor.users.helpers({
    attributes: function() {
        return UserAttributes.findOne({
            userId: this._id
        })
    },
    ratings: function() {
        return UserRatings.findOne({
            $or: [{
                raterId: this._id
            },{
                rateeId: this._id
            }]
        })
    }
})