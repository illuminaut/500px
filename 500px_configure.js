Template.configureLoginServiceDialogFor500px.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});
Template.configureLoginServiceDialogFor500px.fields = function () {
  return [
    {property: 'consumerKey', label: 'Client ID'},
    {property: 'secret', label: 'Client Secret'}
  ];
};