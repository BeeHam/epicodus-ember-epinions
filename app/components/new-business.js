import Ember from 'ember';

export default Ember.Component.extend({
  addNewBusiness: false,
    actions: {
      businessFormShow() {
        this.set('addNewBusiness', true);
      },

      save() {
        var params = {
          catName: this.get('catName'),
        };
        
        this.set('addNewBusiness', false),
        this.sendAction('save', params);
      }
    }

});
