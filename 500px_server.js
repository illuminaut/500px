Fivehundredpx = {};

urls = {
  requestToken: "https://api.500px.com/v1/oauth/request_token",
  authorize: "https://api.500px.com/v1/oauth/authorize",
  accessToken: "https://api.500px.com/v1/oauth/access_token",
  authenticate: "https://api.500px.com/v1/oauth/authorize"
};

Fivehundredpx.whitelistedFields = ['fullname','userpic_url','email','photos_count','affection','in_favorites_count','friends_count','followers_count','avatars'];

Oauth.registerService('Fivehundredpx', 1, urls, function(oauthBinding) {

  var identity = oauthBinding.get('https://api.500px.com/v1/users').data;

  var serviceData = {
    id: identity.user.id,
    name: identity.user.username,
    accessToken: OAuth.sealSecret(oauthBinding.accessToken),
    accessTokenSecret: OAuth.sealSecret(oauthBinding.accessTokenSecret)
  };

  var fields = _.pick(identity, Fivehundredpx.whitelistedFields);
  _.extend(serviceData, fields);

  return {
    serviceData: serviceData,
    options: {
      profile: {
        name: identity.user.username,
        email: identity.user.email,
        fullname: identity.user.fullname,
        firstname: identity.user.firstname,
        lastname: identity.user.lastname,
        avatars: identity.user.avatars
      }
    }
  };
});
Fivehundredpx.retrieveCredential = function(credentialToken, credentialSecret) {
  return OAuth.retrieveCredential(credentialToken, credentialSecret);
};