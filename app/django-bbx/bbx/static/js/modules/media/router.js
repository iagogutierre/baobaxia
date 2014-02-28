define([
    'jquery', 
    'backbone',
    'backbone_subroute',
    'modules/bbx/base-functions',
    'modules/media/model', 
    'modules/media/collection',
    'modules/media/MediaView',
    'modules/media/MediaLast',
    'modules/media/MediaPublish',
], function($, Backbone, Backbone_Subroute, BBXBaseFunctions, MediaModel, MediaCollection, MediaView, MediaLast, MediaPublish){
    var Router = Backbone.SubRoute.extend({
	routes: {
	    // media
	    '': 'publish',
	    'last/:qtd': 'last',
	    ':uuid': 'view',
	},
	
	initialize: function() {
	    console.log("module Media loaded");
	},
	_getRepository: function() {
	    return this.prefix.split('/')[0];
	},
	_getMucua: function() {
	    return this.prefix.split('/')[1];
	},

	publish: function() {
	    repository = $('body').data('data').repository;
	    mucua = $('body').data('data').mucua;
	    console.log("adicionar media");
	    console.log("/" + repository + "/" + mucua + "/media");
	    
	    BBXBaseFunctions.renderCommon(repository, mucua);
	    var mediaPublish = new MediaPublish();
	    mediaPublish.render();
	},
	
	last: function(qdt) {
	    console.log("baixa ultimas medias");
	    repository = $("body").data("data").repository;
	    mucua = $("body").data("data").mucua;
	    BBXBaseFunctions.renderCommon(repository, mucua);
	    
	    var mediaLast = new MediaLast();
	    mediaLast.render(uuid);
	},
	
	view: function(uuid) {
	    console.log("visualiza media");
	    repository = this._getRepository();
	    mucua = this._getMucua();
	    BBXBaseFunctions.renderCommon(repository, mucua);
	    
	    var mediaView = new MediaView();
	    mediaView.render(uuid);
	},    
    });
    
    return Router;
});