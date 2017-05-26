import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  repos: DS.hasMany('repo', { inverse: 'owner' })
});
