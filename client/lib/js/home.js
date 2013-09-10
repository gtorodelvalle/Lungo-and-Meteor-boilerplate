Meteor.startup(function() {
  Lungo.ready(function() {
    Lungo.init({
      data: 'My app!',
      version: '0.1',
      resources: [] /* Not used, we use Meteor's HTML code loading mechanism
                        instead: http://docs.meteor.com/#structuringyourapp*/
    });
    Lungo.dom('#send-action').tap(function(ev) {
      var messageText = Lungo.dom('#messageText').val();
      if(messageText) {
        messageCollection.insert({
          text: messageText,
          timeStamp: Date.now()
        });
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
