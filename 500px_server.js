_500px = {};

urls = {
  requestToken: "https://api.500px.com/v1/oauth/request_token",
  authorize: "https://api.500px.com/v1/oauth/authorize",
  accessToken: "https://api.500px.com/v1/oauth/access_token",
  authenticate: "https://api.500px.com/v1/oauth/authorize"
};

_500px.whitelistedFields = ['fullname','userpic_url','email','photos_count','affection','in_favorites_count','friends_count','followers_count','avatars'];

Oauth.registerService('500px', 1, urls, function(oauthBinding) {

  var identity = oauthBinding.get('https://api.500px.com/v1/users').data;
  console.log(identity);
  var serviceData = {
    id: identity.user.id,
    name: identity.user.username,
    accessToken: OAuth.sealSecret(oauthBinding.accessToken),
    accessTokenSecret: OAuth.sealSecret(oauthBinding.accessTokenSecret)
  };
  var profile = identity.user; 

  var fields = _.pick(identity, _500px.whitelistedFields);
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
        avatar: identity.user.avatar
      }//profile
    }
  };
});
_500px.retrieveCredential = function(credentialToken, credentialSecret) {
  return OAuth.retrieveCredential(credentialToken, credentialSecret);
};