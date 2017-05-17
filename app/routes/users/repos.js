import Ember from 'ember';
import users from 'github-explorer/utils/users';

export default Ember.Route.extend({
  model(params) {
    return users.findBy('id', parseInt(params.user_id)).repos;
  }
});
