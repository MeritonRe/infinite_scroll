(function(o,i,k){i.infinitescroll=function z(D,F,E){this.element=i(E);if(!this._create(D,F)){this.failed=true}};i.infinitescroll.defaults={loading:{finished:k,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"data:image/gif;base64,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",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:k},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,currPage:1},debug:false,behavior:k,binder:i(o),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:k,dataType:"html",appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:k,path:k,prefill:false,maxPage:k};i.infinitescroll.prototype={_binding:function g(F){var D=this,E=D.options;E.v="2.0b2.120520";if(!!E.behavior&&this["_binding_"+E.behavior]!==k){this["_binding_"+E.behavior].call(this);return}if(F!=="bind"&&F!=="unbind"){this._debug("Binding value  "+F+" not valid");return false}if(F==="unbind"){(this.options.binder).unbind("smartscroll.infscr."+D.options.infid)}else{(this.options.binder)[F]("smartscroll.infscr."+D.options.infid,function(){D.scroll()})}this._debug("Binding",F)},_create:function t(F,J){var G=i.extend(true,{},i.infinitescroll.defaults,F);this.options=G;var I=i(o);var D=this;if(!D._validate(F)){return false}var H=i(G.nextSelector).attr("href");if(!H){this._debug("Navigation selector not found");return false}G.path=G.path||this._determinepath(H);G.contentSelector=G.contentSelector||this.element;G.loading.selector=G.loading.selector||G.contentSelector;G.loading.msg=G.loading.msg||i('<div id="infscr-loading"><img alt="Loading..." src="'+G.loading.img+'" /><div>'+G.loading.msgText+"</div></div>");(new Image()).src=G.loading.img;if(G.pixelsFromNavToBottom===k){G.pixelsFromNavToBottom=i(document).height()-i(G.navSelector).offset().top}var E=this;G.loading.start=G.loading.start||function(){i(G.navSelector).hide();G.loading.msg.appendTo(G.loading.selector).show(G.loading.speed,i.proxy(function(){this.beginAjax(G)},E))};G.loading.finished=G.loading.finished||function(){G.loading.msg.fadeOut(G.loading.speed)};G.callback=function(K,M,L){if(!!G.behavior&&K["_callback_"+G.behavior]!==k){K["_callback_"+G.behavior].call(i(G.contentSelector)[0],M,L)}if(J){J.call(i(G.contentSelector)[0],M,G,L)}if(G.prefill){I.bind("resize.infinite-scroll",K._prefill)}};if(F.debug){if(Function.prototype.bind&&(typeof console==="object"||typeof console==="function")&&typeof console.log==="object"){["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(K){console[K]=this.call(console[K],console)},Function.prototype.bind)}}this._setup();if(G.prefill){this._prefill()}return true},_prefill:function n(){var D=this;var G=i(document);var F=i(o);function E(){return(G.height()<=F.height())}this._prefill=function(){if(E()){D.scroll()}F.bind("resize.infinite-scroll",function(){if(E()){F.unbind("resize.infinite-scroll");D.scroll()}})};this._prefill()},_debug:function q(){if(true!==this.options.debug){return}if(typeof console!=="undefined"&&typeof console.log==="function"){if((Array.prototype.slice.call(arguments)).length===1&&typeof Array.prototype.slice.call(arguments)[0]==="string"){console.log((Array.prototype.slice.call(arguments)).toString())}else{console.log(Array.prototype.slice.call(arguments))}}else{if(!Function.prototype.bind&&typeof console!=="undefined"&&typeof console.log==="object"){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}}},_determinepath:function A(E){var D=this.options;if(!!D.behavior&&this["_determinepath_"+D.behavior]!==k){return this["_determinepath_"+D.behavior].call(this,E)}if(!!D.pathParse){this._debug("pathParse manual");return D.pathParse(E,this.options.state.currPage+1)}else{if(E.match(/^(.*?)\b2\b(.*?$)/)){E=E.match(/^(.*?)\b2\b(.*?$)/).slice(1)}else{if(E.match(/^(.*?)2(.*?$)/)){if(E.match(/^(.*?page=)2(\/.*|$)/)){E=E.match(/^(.*?page=)2(\/.*|$)/).slice(1);return E}E=E.match(/^(.*?)2(.*?$)/).slice(1)}else{if(E.match(/^(.*?page=)1(\/.*|$)/)){E=E.match(/^(.*?page=)1(\/.*|$)/).slice(1);return E}else{this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");D.state.isInvalidPage=true}}}}this._debug("determinePath",E);return E},_error:function v(E){var D=this.options;if(!!D.behavior&&this["_error_"+D.behavior]!==k){this["_error_"+D.behavior].call(this,E);return}if(E!=="destroy"&&E!=="end"){E="unknown"}this._debug("Error",E);if(E==="end"){this._showdonemsg()}D.state.isDone=true;D.state.currPage=1;D.state.isPaused=false;this._binding("unbind")},_loadcallback:function c(H,G,E){var D=this.options,J=this.options.callback,L=(D.state.isDone)?"done":(!D.appendCallback)?"no-append":"append",K;if(!!D.behavior&&this["_loadcallback_"+D.behavior]!==k){this["_loadcallback_"+D.behavior].call(this,H,G);return}switch(L){case"done":this._showdonemsg();return false;case"no-append":if(D.dataType==="html"){G="<div>"+G+"</div>";G=i(G).find(D.itemSelector)}break;case"append":var F=H.children();if(F.length===0){return this._error("end")}K=document.createDocumentFragment();while(H[0].firstChild){K.appendChild(H[0].firstChild)}this._debug("contentSelector",i(D.contentSelector)[0]);i(D.contentSelector)[0].appendChild(K);G=F.get();break}D.loading.finished.call(i(D.contentSelector)[0],D);if(D.animate){var I=i(o).scrollTop()+i("#infscr-loading").height()+D.extraScrollPx+"px";i("html,body").animate({scrollTop:I},800,function(){D.state.isDuringAjax=false})}if(!D.animate){D.state.isDuringAjax=false}J(this,G,E);if(D.prefill){this._prefill()}},_nearbottom:function u(){var E=this.options,D=0+i(document).height()-(E.binder.scrollTop())-i(o).height();if(!!E.behavior&&this["_nearbottom_"+E.behavior]!==k){return this["_nearbottom_"+E.behavior].call(this)}this._debug("math:",D,E.pixelsFromNavToBottom);return(D-E.bufferPx<E.pixelsFromNavToBottom)},_pausing:function l(E){var D=this.options;if(!!D.behavior&&this["_pausing_"+D.behavior]!==k){this["_pausing_"+D.behavior].call(this,E);return}if(E!=="pause"&&E!=="resume"&&E!==null){this._debug("Invalid argument. Toggling pause value instead")}E=(E&&(E==="pause"||E==="resume"))?E:"toggle";switch(E){case"pause":D.state.isPaused=true;break;case"resume":D.state.isPaused=false;break;case"toggle":D.state.isPaused=!D.state.isPaused;break}this._debug("Paused",D.state.isPaused);return false},_setup:function r(){var D=this.options;if(!!D.behavior&&this["_setup_"+D.behavior]!==k){this["_setup_"+D.behavior].call(this);return}this._binding("bind");return false},_showdonemsg:function a(){var D=this.options;if(!!D.behavior&&this["_showdonemsg_"+D.behavior]!==k){this["_showdonemsg_"+D.behavior].call(this);return}D.loading.msg.find("img").hide().parent().find("div").html(D.loading.finishedMsg).animate({opacity:1},2000,function(){i(this).parent().fadeOut(D.loading.speed)});D.errorCallback.call(i(D.contentSelector)[0],"done")},_validate:function w(E){for(var D in E){if(D.indexOf&&D.indexOf("Selector")>-1&&i(E[D]).length===0){this._debug("Your "+D+" found no elements.");return false}}return true},bind:function p(){this._binding("bind")},destroy:function C(){this.options.state.isDestroyed=true;this.options.loading.finished();return this._error("destroy")},pause:function e(){this._pausing("pause")},resume:function h(){this._pausing("resume")},beginAjax:function B(G){var E=this,I=G.path,F,D,K,J;G.state.currPage++;if(G.maxPage!=k&&G.state.currPage>G.maxPage){this.destroy();return}F=i(G.contentSelector).is("table")?i("<tbody/>"):i("<div/>");D=(typeof I==="function")?I(G.state.currPage):I.join(G.state.currPage);E._debug("heading into ajax",D);K=(G.dataType==="html"||G.dataType==="json")?G.dataType:"html+callback";if(G.appendCallback&&G.dataType==="html"){K+="+callback"}switch(K){case"html+callback":E._debug("Using HTML via .load() method");F.load(D+" "+G.itemSelector,k,function H(L){E._loadcallback(F,L,D)});break;case"html":E._debug("Using "+(K.toUpperCase())+" via $.ajax() method");i.ajax({url:D,dataType:G.dataType,complete:function H(L,M){J=(typeof(L.isResolved)!=="undefined")?(L.isResolved()):(M==="success"||M==="notmodified");if(J){E._loadcallback(F,L.responseText,D)}else{E._error("end")}}});break;case"json":E._debug("Using "+(K.toUpperCase())+" via $.ajax() method");i.ajax({dataType:"json",type:"GET",url:D,success:function(N,O,M){J=(typeof(M.isResolved)!=="undefined")?(M.isResolved()):(O==="success"||O==="notmodified");if(G.appendCallback){if(G.template!==k){var L=G.template(N);F.append(L);if(J){E._loadcallback(F,L)}else{E._error("end")}}else{E._debug("template must be defined.");E._error("end")}}else{if(J){E._loadcallback(F,N,D)}else{E._error("end")}}},error:function(){E._debug("JSON ajax request failed.");E._error("end")}});break}},retrieve:function b(F){F=F||null;var D=this,E=D.options;if(!!E.behavior&&this["retrieve_"+E.behavior]!==k){this["retrieve_"+E.behavior].call(this,F);return}if(E.state.isDestroyed){this._debug("Instance is destroyed");return false}E.state.isDuringAjax=true;E.loading.start.call(i(E.contentSelector)[0],E)},scroll:function f(){var D=this.options,E=D.state;if(!!D.behavior&&this["scroll_"+D.behavior]!==k){this["scroll_"+D.behavior].call(this);return}if(E.isDuringAjax||E.isInvalidPage||E.isDone||E.isDestroyed||E.isPaused){return}if(!this._nearbottom()){return}this.retrieve()},toggle:function y(){this._pausing()},unbind:function m(){this._binding("unbind")},update:function j(D){if(i.isPlainObject(D)){this.options=i.extend(true,this.options,D)}}};i.fn.infinitescroll=function d(F,G){var E=typeof F;switch(E){case"string":var D=Array.prototype.slice.call(arguments,1);this.each(function(){var H=i.data(this,"infinitescroll");if(!H){return false}if(!i.isFunction(H[F])||F.charAt(0)==="_"){return false}H[F].apply(H,D)});break;case"object":this.each(function(){var H=i.data(this,"infinitescroll");if(H){H.update(F)}else{H=new i.infinitescroll(F,G,this);if(!H.failed){i.data(this,"infinitescroll",H)}}});break}return this};var x=i.event,s;x.special.smartscroll={setup:function(){i(this).bind("scroll",x.special.smartscroll.handler)},teardown:function(){i(this).unbind("scroll",x.special.smartscroll.handler)},handler:function(G,D){var F=this,E=arguments;G.type="smartscroll";if(s){clearTimeout(s)}s=setTimeout(function(){i(F).trigger("smartscroll",E)},D==="execAsap"?0:100)}};i.fn.smartscroll=function(D){return D?this.bind("smartscroll",D):this.trigger("smartscroll",["execAsap"])}})(window,jQuery);

(function($, window, document) {
	// "use strict";
	$.fn.getAttr = function (name, defaultVal) {
		return this.attr(name) ? this.attr(name) : defaultVal;
	}

	var InfiniteScrollContainer = function(container, options) {
		this.options = Object.assign({
			paginationAttr: 'data-pagination',
			paginationNextAttr: 'data-pagination-next',
			loadMoreBtnAttr: 'data-load-more',
			itemClassAttr: 'data-item-class',
			itemsPerPageAttr: 'data-perPage',
			totalPagesAttr: 'data-totalPages',
			defaults: {
				item_class: '.box-item',
				loading_text: 'Loading...',
				all_loaded_text: 'All loaded'
			},
			events: {
				onInitialized: undefined,
				onDestroying: undefined,
				onDestroyed: undefined,
				onAllLoaded: undefined,
				onNewElements: undefined,
			}
		}, typeof options == 'object' ? options : {});
		
		this.allAreLoaded 	= false;
		this.loading 		= false;

		this.$container 	= container;
		this.$button 		= undefined;

		this.isWithButton = this.$container.attr(this.options.loadMoreBtnAttr) != undefined;

		if (this.isWithButton) {
			this.$button = $(this.$container.attr(this.options.loadMoreBtnAttr));
		}

		this.paginationHolderSelector 	= this.$container.attr(this.options.paginationAttr);
		this.paginationNextSelector 	= this.$container.attr(this.options.paginationNextAttr);
		this.itemClassSelector 			= this.$container.getAttr(this.options.itemClassAttr, this.options.defaults.item_class);

		this.itemsPerPage				= this.$container.attr(this.options.itemsPerPageAttr) != undefined ? Number(this.$container.attr(this.options.itemsPerPageAttr)) : undefined;
		this.totalPages					= this.$container.attr(this.options.totalPagesAttr) != undefined ? Number(this.$container.attr(this.options.totalPagesAttr)) : undefined;

		this.init = function() {
			this.validate();

			if (this.totalPages < 2) {
				this.allLoaded();

				return;
			}

			var instance = this;
			
			if (this.isWithButton) {
				this.$button.attr('data-load-more-text', this.$button.text());
			}

			this.destroy();

			this.$container.infinitescroll({
				navSelector: this.paginationHolderSelector,
				nextSelector: this.paginationNextSelector,
				itemSelector: this.itemClassSelector,
				loading: { finishedMsg: 'No more pages to load.'},
				animate: false,
				errorCallback: function() { 
					instance.loading = false;

					instance.allLoaded()
				},
			},
			function(newElements) {
				instance.loading = false;

				instance.fireEvent('onNewElements', newElements)

				if (instance.isWithButton) {
					instance.$button.text(instance.$button.attr('data-load-more-text')).removeClass('loading');
				}

				instance.checkAllLoaded(newElements);
			});

			this.fireEvent('onInitialized');

			if (this.isWithButton) {
				this.$button.on('click', function() { instance.onButtonClick() });

				$(window).unbind('.infscr');
			}

		}

		this.checkAllLoaded = function(newElements) {
			/**
			 * Check if the perPage attribute isset and the newElements are less than the perPage,
			 * or if the totalPages equals to the currentPage,
			 * and call the allLoaded method.
			 */
			if (
				(this.itemsPerPage && newElements.length < this.itemsPerPage) ||
				(this.totalPages == this.$container.data('infinitescroll').options.state.currPage)
			) {
			    this.allLoaded();
			}
		}

		this.destroy = function () {
			if (this.$container.data('infinitescroll')) {
				this.fireEvent('onDestroying');

				this.$container.infinitescroll('destroy');
				this.$container.data('infinitescroll', undefined);
				
				this.fireEvent('onDestroyed');
			}
		}

		this.allLoaded = function () {
			this.fireEvent('onAllLoaded');

			if (this.isWithButton) {
				this.$button
				.text(this.getAllLoadedText())
				.removeAttr('id');
			}
			
			this.allAreLoaded = true;

			this.destroy();
		}

		this.onButtonClick = function() {
			if (this.loading) {
				return;
			}

			this.loading = true;

			this.fireEvent('onButtonClicked');

			if (! this.allAreLoaded) {

				if (this.isWithButton) {
					this.$button.addClass('loading').text(this.getLoadingText());
				}

				this.$container.infinitescroll('retrieve');
			}
		}

		this.validate = function () {
			if ($(this.paginationHolderSelector).length == 0) {
				throw new Error("The pagination doesn't exist.");
			}
			if ($(this.paginationNextSelector).length == 0) {
				throw new Error("The pagination next link doesn't exist.");
			}
			if (this.isWithButton && this.$button.length == 0) {
				throw new Error("The load more button doesn't exist.");
			}
		}

		this.fireEvent = function(eventName) {
			if (typeof this.options.events[eventName] == 'function') {
				var args = Array.prototype.slice.call(arguments).splice(1);

				args.push(this);

				this.options.events[eventName].apply(this, args);
			}
		}

		this.getLoadingText = function () {
			if (! this.isWithButton) {
				return this.options.defaults.loading_text
			} 

			return this.$button.getAttr('data-loading', this.options.defaults.loading_text)
		}

		this.getAllLoadedText = function () {
			if (! this.isWithButton) {
				return this.options.defaults.all_loaded_text
			} 

			return this.$button.getAttr('data-all-loaded', this.options.defaults.all_loaded_text)
		}

		this.init();
	}

	$.fn.initInfScroll = function(opts) {
		new InfiniteScrollContainer(this, opts);
	}
}(window.jQuery, window, document));
