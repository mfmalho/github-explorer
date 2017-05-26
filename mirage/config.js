export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  const REPOS = [{
    id: 1,
    name: 'ember-a',
    owner: 1
  }, {
    id: 2,
    name: 'ember-b',
    owner: 1
  },
  {
    id: 3,
    name: 'ember-c',
    owner: 2
  }, {
    id: 4,
    name: 'ember-d',
    owner: 2
  },
  {
    id: 5,
    name: 'ember-e',
    owner: 3
  }, {
    id: 6,
    name: 'ember-f',
    owner: 3
  },
  {
    id: 7,
    name: 'ember-g',
    owner: 4
  }, {
    id: 8,
    name: 'ember-h',
    owner: 4
  }];

  this.get('/repos/:id', (_, request) => {
    let repo_id = parseInt(request.params.id);
    let repo = REPOS.find((r) => r.id === repo_id);
    return { repo };
  });

  this.get('/repos', (_, request) => {
    let owner_id = parseInt(request.queryParams.owner);
    let repos = REPOS.filter((r) => r.owner === owner_id);
    return { repos };
  });

  this.get('/users', () => {
    return {
      users: [{
        id: 1,
        username: 'Miguel Cobain',
        repos: [1, 2]
      },
      {
        id: 2,
        username: 'Mikael',
        repos: [3, 4]
      },
      {
        id: 3,
        username: 'José',
        repos: [5, 6]
      },
      {
        id: 4,
        username: 'Manuel',
        repos: [7, 8]
      }]
    };
  });
}
