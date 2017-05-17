import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('index');
  this.route('about');
  this.route('users', function() {
    // this.route('index');
    this.route('repos', { path: ':user_id/repos' }, function() {
      // this.rout('index);
      this.route('repo', { path: ':repo_id' })
    });
  });
});

export default Router;
