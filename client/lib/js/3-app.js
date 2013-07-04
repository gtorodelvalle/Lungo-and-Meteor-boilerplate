Meteor.startup(function() { // Uncomment for Meteor.
    Lungo.init({
        data: 'Lungo Gallery app',
        version: '2.1',
        resources: [] /* Not used, we use Meteor's HTML code loading mechanism
                          instead: http://docs.meteor.com/#structuringyourapp*/    
      });
}); // Uncomment for Meteor.

$$('#latest-apps li').swipeLeft(function (ev) {
    $$(ev.target).closest('li').addClass("light");
    console.log("Read!");
});

$$('#latest-apps li').swipeRight(function (ev) {
    $$(ev.target).closest('li').removeClass("light");
    console.log("Unread!");
});
