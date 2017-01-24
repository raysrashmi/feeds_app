//= require cable
//= require_self
//= require_tree .


this.App = {};

App.cable = ActionCable.createConsumer();

App.articles = App.cable.subscriptions.create("ArticlesChannel", {
  received: function(data) {
              return $("#articles").prepend(this.renderArticle(data));
            },
  renderArticle:function(data) {
                  return "<tr><td>"+ data.title+"</td></tr>";

                }
});
