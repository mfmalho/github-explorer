import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  owner: DS.belongsTo('user', { inverse: 'repos' }),
  collaborators: DS.hasMany('user', { inverse: null }),
  stars: DS.attr('number')
});
