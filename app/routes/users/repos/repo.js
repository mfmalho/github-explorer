import Ember from 'ember';
import users from 'github-explorer/utils/users';

export default Ember.Route.extend({
  model(params) {
    let repos = users.reduce((prev, curr) => prev.concat(curr.repos), []);
    return repos.findBy('id', parseInt(params.repo_id));
  }
});