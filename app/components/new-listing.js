import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    save(business) {
      var params = {
        listingName: this.get('listingName'),
        address: this.get('address'),
        phone: this.get('phone'),
        image: this.get('image'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        business: business
      };

    // save() {
    //   var params = {
    //     listingName: this.get('listingName'),
    //     address: this.get('address'),
    //     phone: this.get('phone'),
    //     image: this.get('image'),
    //
    //   };

      this.set('addNewListing', false),
      this.sendAction('save', business, params);
    }
  }
});
