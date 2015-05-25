Template.configureLoginServiceDialogForFivehundredpx.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});
Template.configureLoginServiceDialogForFivehundredpx.fields = function () {
  return [
    {property: 'consumerKey', label: 'Client ID'},
    {property: 'secret', label: 'Client Secret'}
  ];
};