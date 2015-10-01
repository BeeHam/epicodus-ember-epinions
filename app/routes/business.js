import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      business: this.store.findRecord('business', params.business_id),
      // businesslistings: this.store.query('business-listing', {filter: {business: params.business_id}})
    });
  },
  actions: {
    save(business, params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      business.save();
      this.transitionTo('business');
    }

  }

});
