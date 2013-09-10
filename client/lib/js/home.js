Meteor.startup(function() {
  Lungo.ready(function() {
    Lungo.init({
      data: 'My app!',
      version: '0.1',
      resources: [] /* Not used, we use Meteor's HTML code loading mechanism
                        instead: http://docs.meteor.com/#structuringyourapp*/
    });
    Lungo.dom('#send-action').tap(function(ev) {
      var messageText = Lungo.dom('#messageText');
      if(messageText.val()) {
        messageCollection.insert({
          text: messageText.val(),
          timeStamp: Date.now()
        });
        messageText.val('');
      }
    })
  });
});

Template.messages.messageCount = function() {
  return messageCollection.find({}).count();
};

Template.messages.message = function() {
  return messageCollection.find({});
};
