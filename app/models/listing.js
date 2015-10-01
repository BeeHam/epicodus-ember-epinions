import DS from 'ember-data';

export default DS.Model.extend({
  listingName: DS.attr(),
  address: DS.attr(),
  image: DS.attr(),
  phone: DS.attr(),
  business: DS.belongsTo('business',{async:true}),
  latitude:DS.attr('number'),
  longitude:DS.attr('number')
});
