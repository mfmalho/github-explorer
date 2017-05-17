import Ember from 'ember';
import users from 'github-explorer/utils/users';

export default Ember.Route.extend({
  model() {
    return users;
  }
});
