Router.configure({
    layoutTemplate: 'customLayout'
});

Router.route('/about', function() {
    return this.render('about');
});
