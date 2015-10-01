import Ember from 'ember';

export default Ember.Route.extend({
  model(){
  return this.store.findAll('business');
  },
  actions: {
    save(params) {
      var newBusiness = this.store.createRecord('business', params);
      newBusiness.save();
      this.transitionTo('index');
    },
    destroyBusiness(business) {
      business.destroyRecord();
      this.transitionTo('index');
    }
  }
});
