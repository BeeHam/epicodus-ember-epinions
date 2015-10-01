import DS from 'ember-data';

export default DS.Model.extend({
   catName: DS.attr(),
   listings: DS.hasMany('listing',{async:true})

});
