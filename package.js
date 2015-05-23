Package.describe({
  name: 'illuminaut:500px',
  version: '0.1.1',
  summary: 'An implementation of the 500px OAuth flow.',
  git: 'https://github.com/illuminaut/500px.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.0.3.1');

  api.use('http', ['client', 'server']);
  api.use('templating', 'client');
  api.use('oauth1', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('random', 'client');
  api.use('underscore', 'server');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles(['500px_configure.html', '500px_configure.js'], 'client');

  api.addFiles('500px_server.js', 'server');
  api.addFiles('500px_client.js', 'client');


  api.export('500px');
});