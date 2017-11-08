/*!
 * Lich v1.0.0 (https://github.com/Hashibei/Lich)
 * Copyright 2017, Hashibei, All rights reserved.
 * Licensed under the MIT license
 */

//=====================================================//
//===================   POLYFILLS   ===================//
//=====================================================//

/**
 * @external Function
 * @description The Default javascript Function class.
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function|Function}
 */

/**
 * @function external:Function#extends
 * @description Provides Lich.js the extend capability.
 * @param {number} Super The super Class.
 */
Function.prototype.extends = function(Super)
{
    
    this.prototype = Object.create(Super.prototype);
    this.prototype.constructor = this;
    this.prototype.constructor._super = Super;
        
}

/**
 * @function external:Function#abstract
 * @description Defines in Lich.js the abstract classes.
 * @throws {Error} Can't instantiate abstract class !
 * @param {object} Abstract The function that will be abstract, and cant be instantiated.
 */
Function.prototype.abstract = function(Abstract)
{    
    
    if (this === Abstract.constructor) 
    {
        
        throw new Error("Can't instantiate abstract class !");
        
    }
    
}

//=====================================================//
//===================   NAMESPACE   ===================//
//=====================================================//

/**
 * @description Lich is the global namespace that contains all of the library class and methods.
 * @namespace Lich
*/
this.Lich = this.Lich || {};

//=====================================================//
//====================   AUTOSTART   ==================//
//=====================================================//

(function()
{
    "use strict";
    
    //=====================================================//
    //=======================   SCOPE   ===================//
    //=====================================================//
    
    /**
     * @description Store all the instances of the Lich library in a clean place to write code without interrupting the window itself.
     * @memberof Lich
    */
    Lich.Scope = {};
    
    //=====================================================//
    //=====================   DOCUMENT   ==================//
    //=====================================================//
    
    /**
     * @description Contains all Document methods.
     * @namespace Lich.Document
    */
    Lich.Document = {};
        
    /**
     * @description Waits the content load to successfully fire a callback function.
     * @param {function} fn - A callback function to fire wen the loader is complete.
     * @method
    */
    Lich.Document.onLoad = function(fn)
    {
                
        window.addEventListener("DOMContentLoaded",function()
        {
        
            Lich.Document.document = document;
            Lich.Document.body = document.body;
            fn.call(Lich.Scope);
            
        });

    };
    
    /**
     * @description Add a child to de body element.
     * @param {object} child - The element that will be inserted.
     * @method
    */
    Lich.Document.addChild = function(child)
    {
    
        this.body.appendChild(child.getElement());
    
    };
    
    /**
     * @description Remove a DOM element from the body.
     * @param {object} child - The DOM element that will be removed.
     * @method
    */
    Lich.Document.removeChild = function(child)
	{

		this.body.removeChild(child.getElement());

	};
    
    /**
     * @description Create a DOM element.
     * @param {object} node - The DOM element that will be created.
     * @method
    */
    Lich.Document.createElement = function(node)
    {
            
        return this.document.createElement(node);
        
    };

    /**
     * @description Change the document title.
     * @param {string} title - The new title for the document.
     * @method
    */
    Lich.Document.setTitle = function(title)
    {
    
        this.document.title = title;
    
    };
    
    /**
     * @description Change the html document page title.
     * @param {string} title - The title of tha html page.
     * @method
    */
    Lich.Document.getAnchors = function()
    {
    
        return this.document.anchors;
    
    };
    
    /**
     * @description Get the base URI from the document.
     * @method
    */
    Lich.Document.getBaseURI = function()
    {
    
        return this.document.baseURI;
    
    };
    
    /**
     * @description Get the document body.
     * @method
    */
    Lich.Document.getBody = function()
    {
    
        return Lich.Document.body;
    
    };
    
    /**
     * @description Get the document doctype.
     * @method
    */
    Lich.Document.getDoctype = function()
    {
    
        return this.document.doctype;
        
    };
    
    /**
     * @description Get the document element.
     * @method
    */
    Lich.Document.getDocumentElement = function()
    {
    
        return this.document.documentElement;
        
    };
    
    /**
     * @description Get the document URI.
     * @method
    */
    Lich.Document.getDocumentURI = function()
    {
        
        return this.document.documentURI;
        
    };
    
    /**
     * @description Get the document domain.
     * @method
    */
    Lich.Document.getDomain = function()
    {
    
        return this.document.domain;
    
    };
    
    /**
     * @description Get the document embeds.
     * @method
    */
    Lich.Document.getEmbeds = function()
    {
    
        return this.document.embeds;
    
    };
    
    /**
     * @description Get the document head.
     * @method
    */
    Lich.Document.getHead = function()
    {
    
        return this.document.head;
    
    };
    
    /**
     * @description Get the document forms.
     * @method
    */
    Lich.Document.getForms = function()
    {
    
        return this.document.forms;
    
    };
    
    /**
     * @description Get the document images.
     * @method
    */
    Lich.Document.getImages = function()
    {
    
        return this.document.images;
    
    };
    
    /**
     * @description Get the document enconding.
     * @method
    */
    Lich.Document.getInputEncoding = function()
    {
        
        return this.document.inputEncoding;
        
    };
    
    /**
     * @description Get the document last modified date.
     * @method
    */
    Lich.Document.getLasModfied = function()
    {
    
        return this.document.lastModified;
        
    };
    
    /**
     * @description Get the document links.
     * @method
    */
    Lich.Document.getLinks = function()
    {
      
        return this.document.links;
        
    };
    
    /**
     * @description Get the document ready state.
     * @method
    */
    Lich.Document.getReadyState = function()
    {
    
        return this.document.readyState;
    
    };
    
    /**
     * @description Get the document referrer.
     * @method
    */
    Lich.Document.getReferrer = function()
    {
    
        return this.document.referrer;
    
    };
    
    /**
     * @description Get the document scripts.
     * @method
    */
    Lich.Document.getScripts = function()
    {
    
        return this.document.scripts;
    
    };
    
    /**
     * @description Get the document tile.
     * @method
    */
    Lich.Document.getTitle = function()
    {
    
        return this.document.title;
        
    };
    
    /**
     * @description Get the document URL.
     * @method
    */
    Lich.Document.getURL = function()
    {
        
        return this.document.URL;
    
    };
    
    //=====================================================//
    //========================   TIME  ====================//
    //=====================================================//
    
    /**
     * @description Contains all Time methods.
     * @namespace Lich.Time
    */
    Lich.Time = {};
    
    Lich.Time._timeoutList = [];
    
    Lich.Time._intervalList = [];
        
    /**
     * @description Create a timeout thar fires a event at the end of its countdown.
     * @param {string} name - The timeout name.
     * @param {function} fn - The callback function.
     * @param {number} miliseconds - The timeout time.
    */
    Lich.Time.setTimeout = function(name,fn,milliseconds)
    {

        var timeout = setTimeout(fn,milliseconds);
        
        Lich.Time._timeoutList.push({name:name,timeout:timeout});
    
    };
    
    /**
     * @description Create a interval that fires a event at the end of its iteration.
     * @param {string} name - The interval name.
     * @param {function} fn - The callback function.
     * @param {number} miliseconds - The interval time.
    */
    Lich.Time.setInterval = function(name,fn,milliseconds)
    {
    
        var interval = setInterval(fn,milliseconds);
        
        Lich.Time._intervalList.push({name:name,interval:interval});
    
    };
    
    /**
     * @description Remove a timeout countdown.
     * @param {string} name - The timeout name to clear.
     * @param {function} fn - The callback function.
    */
    Lich.Time.clearTimeout = function(name,fn)
    {
    
        for(var i = 0; i < Lich.Time._timeoutList.length; i++)
        {
            
            if(Lich.Time._timeoutList[i].name == name)
            {
            
                clearTimeout(Lich.Time._timeoutList[i].timeout);
                
                Lich.Time._timeoutList.splice(i,1);
                
                fn();
                
                break;
            
            }
        
        }
    
    };
    
    /**
     * @description Remove a interval countdown.
     * @param {string} name - The interval name to clear.
     * @param {function} fn - The callback function.
    */
    Lich.Time.clearInterval = function(name,fn)
    {
    
        for(var i = 0; i < Lich.Time._intervalList.length; i++)
        {
            
            if(Lich.Time._intervalList[i].name == name)
            {
            
                clearInterval(Lich.Time._intervalList[i].interval);
                
                
                Lich.Time._intervalList.splice(i,1);
                
                fn();
                
                break;
            
            }
        
        }
    
    };
    
    //=====================================================//
    //=======================   JSON   ====================//
    //=====================================================//
    
    /**
     * @description Contains all JSON methods.
     * @namespace Lich.JSON
    */
    Lich.JSON = {};
    
    /**
     * @description Get a JSON response text and call a function.
     * @param {string} url - The json url path.
     * @param {function} fn - The callback function.
    */
    Lich.JSON.get = function(url,fn)
    {
                
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
                
        request.onload = function() 
        {
                        
            var data = JSON.parse(request.responseText);
            fn(data);
                                
        };

        request.send();
        
    };
    
    //=====================================================//
    //==============   BROWSER OBJECT MODEL   =============//
    //=====================================================//
    
    /**
     * @description Contains all BOM methods and namespaces.
     * @namespace Lich.BOM
    */
    Lich.BOM = {};
    
    Lich.BOM.Document = Lich.Document;
    
    Lich.BOM.Time = Lich.Time;
    
    //=====================================================//
    //=====================   BROWSER   ===================//
    //=====================================================//
    
    /**
     * @description Get the document URL.
     * @method
    */
    Lich.BOM.Browser = {};
    
    /**
     * @description Get the browser document.
     * @method
    */
    Lich.BOM.Browser.getDocument = function()
    {
    
        return document;
    
    };
    
    /**
     * @description Get the browser window.
     * @method
    */
    Lich.BOM.Browser.getWindow = function()
    {
    
        return window;
    
    };
    
    /**
     * @description Get the browser screen.
     * @method
    */
    Lich.BOM.Browser.getScreen = function()
    {
    
        return screen;
    
    };
    
    /**
     * @description Get the browser location.
     * @method
    */
    Lich.BOM.Browser.getLocation = function()
    {
    
        return location;
    
    };
    
    /**
     * @description Get the browser history.
     * @method
    */
    Lich.BOM.Browser.getHistory = function()
    {
    
        return history;
    
    };
    
    /**
     * @description Get the browser navigator.
     * @method
    */
    Lich.BOM.Browser.getNavigator = function()
    {
        
        return navigator;
    
    };
    
    //=====================================================//
    //======================   WINDOW   ===================//
    //=====================================================//
    
    /**
     * @description Contains all Window methods.
     * @namespace Lich.BOM.Window
    */
    Lich.BOM.Window = {};
    
    /**
     * @description Get the window width.
     * @method
    */
    Lich.BOM.Window.getWidth = function()
    {
      
        return window.innerHeight;
        
    };
    
    /**
     * @description Get the window height.
     * @method
    */
    Lich.BOM.Window.getHeight = function()
    {
      
        return window.innerHeight;
        
    };
    
    //=====================================================//
    //======================   SCREEN   ===================//
    //=====================================================//
    
    /**
     * @description Contains all Screen methods.
     * @namespace Lich.BOM.Screen
    */
    Lich.BOM.Screen = {};
    
    /**
     * @description Get the screen width.
     * @method
    */
    Lich.BOM.Screen.getWidth = function()
    {
      
        return screen.width;
        
    };
    
    /**
     * @description Get the screen height.
     * @method
    */
    Lich.BOM.Screen.getHeight = function()
    {
      
        return screen.height;
        
    };
    
    /**
     * @description Get the available screen width.
     * @method
    */
    Lich.BOM.Screen.getAvailableWidth = function()
    {
      
        return screen.availHeight;
        
    };
    
    /**
     * @description Get the available screen height.
     * @method
    */
    Lich.BOM.Screen.getAvailableHeight = function()
    {
      
        return screen.availWidth;
        
    };
    
    /**
     * @description Get the screen color depth.
     * @method
    */
    Lich.BOM.Screen.getColorDepth = function()
    {
    
        return screen.colorDepth;
    
    };
    
    /**
     * @description Get the screen pixel depth.
     * @method
    */
    Lich.BOM.Screen.getPixelDepth = function()
    {
    
        return screen.pixelDepth;
    
    };
    
    //=====================================================//
    //======================   LOCATION   =================//
    //=====================================================//
    
    /**
     * @description Contains all Location methods.
     * @namespace Lich.BOM.Screen
    */
    Lich.BOM.Location = {};
    
    /**
     * @description Get the location hyper text reference.
     * @method
    */
    Lich.BOM.Location.getHypertextReference = function()
    {
    
        return location.href;
    
    };
    
    /**
     * @description Get the location host name.
     * @method
    */
    Lich.BOM.Location.getHostname = function()
    {
    
        return location.hostname;
    
    };
    
    /**
     * @description Get the location path name.
     * @method
    */
    Lich.BOM.Location.getPathname = function()
    {
    
        return location.pathname;
    
    };
    
    /**
     * @description Get the location protocol.
     * @method
    */
    Lich.BOM.Location.getProtocol = function()
    {
    
        return location.protocol;
    
    };
    
    /**
     * @description Get the location port.
     * @method
    */
    Lich.BOM.Location.getPort = function()
    {
    
        return location.port;
        
    };
    
    /**
     * @description Assign a location url.
     * @param {string} assing - The url for the location.
     * @method
    */
    Lich.BOM.Location.assign = function(url)
    {
    
        return location.assign(url);
    
    };
        
    //=====================================================//
    //======================   HISTORY   ==================//
    //=====================================================//
    
    /**
     * @description Contains all History methods.
     * @namespace Lich.BOM.History
    */
    Lich.BOM.History = {};
    
    /**
     * @description Return in the history.
     * @method
    */
    Lich.BOM.History.back = function()
    {
    
        history.back();
        
    };
    
    /**
     * @description Foward in the history.
     * @method
    */
    Lich.BOM.History.foward = function()
    {
    
        history.forward();
    
    };
    
    //=====================================================//
    //=====================   NAVIGATOR  ==================//
    //=====================================================//
    
    /**
     * @description Contains all Navigator methods.
     * @namespace Lich.BOM.Navigator
    */
    Lich.BOM.Navigator = {};
    
    /**
     * @description Get Navigador application name.
     * @method
    */
    Lich.BOM.Navigator.getApplicationName = function()
    {
    
        return navigator.appName;
    
    };
    
    /**
     * @description Get Navigador application code name.
     * @method
    */
    Lich.BOM.Navigator.getApplicationCodeName = function()
    {
    
        return navigator.appCodeName;
    
    };
    
    /**
     * @description Get Navigador application version.
     * @method
    */
    Lich.BOM.Navigator.getApplicationVersion = function()
    {
    
        return navigator.appVersion;
    
    }
    
    /**
     * @description Get Navigador engine.
     * @method
    */
    Lich.BOM.Navigator.getEngine = function()
    {
    
        return navigator.product;
    
    };
    
    /**
     * @description Get Navigador agent.
     * @method
    */
    Lich.BOM.Navigator.getAgent = function()
    {
    
        return navigator.userAgent;
    
    };
    
    /**
     * @description Get Navigador platform.
     * @method
    */
    Lich.BOM.Navigator.getPlataform = function()
    {
    
        return navigator.platform;

    };
    
    /**
     * @description Get Navigador language.
     * @method
    */
    Lich.BOM.Navigator.getLanguage = function()
    {
    
        return navigator.language;
        
    };
    
    /**
     * @description Get Navigador online state.
     * @method
    */
    Lich.BOM.Navigator.isOnline = function()
    {
    
        return navigator.onLine;
    
    };
    
    /**
     * @description Get Navigador java enable state.
     * @method
    */
    Lich.BOM.Navigator.isJavaEnabled = function()
    {
    
        return navigator.javaEnabled();
    
    };
    
    /**
     * @description Get Navigador cookie enable state.
     * @method
    */
    Lich.BOM.Navigator.isCookiesEnabled = function()
    {
    
        return navigator.cookieEnabled;
        
    };
    
    //=====================================================//
    //=======================   POPUP  ====================//
    //=====================================================//
    
    /**
     * @description Contains all Popup methods.
     * @namespace Lich.BOM.Popup
    */
    Lich.BOM.Popup = {};
    
    /**
     * @description Call a Popup alert.
     * @method
    */
    Lich.BOM.Popup.alert = function(message)
    {
    
        alert(message);
    
    };
    
    /**
     * @description Call a Popup alert.
     * @method
    */
    Lich.BOM.Popup.confirm = function(message)
    {
    
        return confirm(message);
        
    };
    
    /**
     * @description Call a Popup prompt.
     * @method
    */
    Lich.BOM.Popup.prompt = function(message,defaultMessage)
    {
    
        return prompt(message,defaultMessage);
    
    };
    
    //=====================================================//
    //=======================   COOKIE  ===================//
    //=====================================================//
    
    /**
     * @description Contains all Cookie methods.
     * @namespace Lich.BOM.Cookie
    */
    Lich.BOM.Cookie = {};
    
    /**
     * @description Create a cookie.
     * @param {string} name - The cookie name.
     * @param {string} value - The cookie value.
     * @method
    */
    Lich.BOM.Cookie.createCookie = function(name,value)
    {
            
        Lich.Document.document.cookie = name+"="+value;
    
    };
    
    /**
     * @description Delete a cookie.
     * @param {string} name - The cookie name.
     * @method
    */
    Lich.BOM.Cookie.deleteCookie = function(name)
    {
    
        Lich.Document.document.cookie = name+"=;expires=Thu, 01 Jan 1970";
    
    };
    
    /**
     * @description Get all the cookies.
     * @param {string} name - The cookie name.
     * @method
    */
    Lich.BOM.Cookie.getAllCookies = function()
    {
            
        if(Lich.Document.document.cookie == "")
        {
        
            return "";
        
        }
        
        var stringArray = Lich.Document.document.cookie.split("; ");
        var objectArray = [];
                
        for(var i = 0; i < stringArray.length; i++)
        {
            var object = {};
            object.name = stringArray[i].split("=")[0];
            object.value = stringArray[i].split("=")[1];
            
            objectArray.push(object);
        }
    
        return objectArray;
        
    };
    
    /**
     * @description Get a cookie.
     * @param {string} name - The cookie name.
     * @method
    */
    Lich.BOM.Cookie.getCookie = function(name)
    {
            
        var objectArray = Lich.BOM.Cookie.getAllCookies();
        
        for(var i = 0; i < objectArray.length; i++)
        {
        
            if(objectArray[i].name == name)
            {
                
               return objectArray[i];
                
            }
                    
        }
    
    };
    
    //-----------------------------------------------------//
    
    Lich.Document.getCookies = Lich.BOM.Cookie.getAllCookies;
    
    //-----------------------------------------------------//
    
    //=====================================================//
    //=============   DOCUMENT OBJECT MODEL   =============//
    //=====================================================//
    
    /**
     * @description Contains all DOM methods and classes.
     * @namespace Lich.DOM
    */
    Lich.DOM = {};
    
    /**
     * Utils for Document Object Model manager.
     * @namespace Lich.DOM.Utils
    */
    Lich.DOM.Utils = {};
        
    
    //=====================================================//
    //====================   ELEMENT   ====================//
    //=====================================================//
    
    /**
     * @description Utility for every DOM element.
     * @class Lich.DOM.Utils.Element
     * @abstract
    */
    Lich.DOM.Utils.Element = function()
    {
        
        Lich.DOM.Utils.Element.abstract(this);    
        
        this._node = null;
        this._id = null;
               
    };
    
    /**
     * @description Set the element id.
     * @param {string} id - The element id.
     * @method
    */
    Lich.DOM.Utils.Element.prototype.setId = function(id)
    {
        
        this._id = id;
        this._element.id = this._id;
        
    };
    
    /**
     * @description Set a element attribute.
     * @param {string} attribute - The attribute to change or set.
     * @param {string} value - The value for the attribute.
     * @method
    */
    Lich.DOM.Utils.Element.prototype.setAttribute = function(attribute,value)
    {
    
        this._element.setAttribute(attribute,value);
    
    };
    
    /**
     * @description Set a element property.
     * @param {string} property - The property to change or set.
     * @param {string} value - The value for the attribute.
     * @method
    */
    Lich.DOM.Utils.Element.prototype.setProperty = function(property,value)
    {
    
        this._element.style[property] = value;
    
    };
    
    /**
     * @description Get the element id.
     * @method
    */
    Lich.DOM.Utils.Element.prototype.getId = function()
    {
    
        return this._id;
        
    };
    
    /**
     * @description Get the element node.
     * @method
    */
    Lich.DOM.Utils.Element.prototype.getNode = function()
    {
    
        return this._node;
        
    };
    
    /**
     * @description Get the element.
     * @method
    */
    Lich.DOM.Utils.Element.prototype.getElement = function()
    {
    
        return this._element;
    
    }

    /**
     * @description Add a element class.
     * @param {string} Class - The css class to set.
     * @method
    */
    Lich.DOM.Utils.Element.prototype.addClass = function(Class)
    {
        
        this._element.classList.add(Class.trim());
        
    };
    
    /**
     * @description Add a element class.
     * @param {string} Class - The css class to set.
     * @method
    */
    Lich.DOM.Utils.Element.prototype.removeClass = function(Class)
    {
                
        this._element.classList.remove(Class.trim());
        
    };
    
    /**
     * @description Set a event, to be played after a DOM interaction.
     * @param {string} event - The name of the event.
     * @param {function} fn - The function to be called.
     * @method
    */
    Lich.DOM.Utils.Element.prototype.onEvent = function(event,fn)
    {        
        this._event = {};
        this._event.type = event;
        this._event.calle = fn
        this._element.addEventListener(this._event.type,this._event.calle);
        
    };
    
    /**
     * @description Set a event, to be played after a DOM interaction.
     * @param {string} event - The name of the event.
     * @param {function} fn - The function to be called.
     * @method
    */
    Lich.DOM.Utils.Element.prototype.animate = function(property,options,fn)
    {
        
        this._animation = this._element.animate(property,options)
        this._animation.onfinish = fn;
        
    };
    
    //=====================================================//
    //=====================  CONTAINER  ===================//
    //=====================================================//
    
    /**
     * @description Utility for every DOM Container element.
     * @class Lich.DOM.Utils.Container
     * @abstract
    */
    Lich.DOM.Utils.Container = function()
    {                
        
        Lich.DOM.Utils.Element.abstract(this);
        Lich.DOM.Utils.Element.call(this);
         
        this._childs = [];
                        
    }
    
    Lich.DOM.Utils.Container.extends(Lich.DOM.Utils.Element);
    
    /**
     * @description Add a child element.
     * @param {object} child - The child element.
     * @method
    */      
    Lich.DOM.Utils.Container.prototype.addChild = function(child)
    {
        
        this._element.appendChild(child._element);
        this._childs.push(child);
        
    };
    
    /**
     * @description Add a child element first.
     * @param {object} child - The child element.
     * @method
    */
    Lich.DOM.Utils.Container.prototype.addChildFirst = function(child)
    {
    
        this._element.insertBefore(child._element,this._childs[0]._element);
        
    };
    
    /**
     * @description Remove a child element.
     * @param {object} child - The child element.
     * @method
    */
    Lich.DOM.Utils.Container.prototype.removeChild = function(child)
	{

		this._element.removeChild(child._element);
		
		var vetor = this._childs.length;
		for(let i = 0; i < vetor; i++)
		{
		
			if(this._childs[i] == child)
			{
			
				this._childs.push(i,1);
			}
		
		}
		
	};
    
    /**
     * @description Get a child element.
     * @method
    */
    Lich.DOM.Utils.Container.prototype.getChild = function(number)
    {
    
        
        return this._childs[number]; 
    
    };
    
    /**
     * @description Get all child elements.
     * @method
    */
    Lich.DOM.Utils.Container.prototype.getAllChilds = function()
    {
    
        return this._childs;
        
    };
    
    //=====================================================//
    //========================  TEXT  =====================//
    //=====================================================//
    
    /**
     * @description Utility for every DOM Text element.
     * @class Lich.DOM.Utils.Text
     * @abstract
    */
    Lich.DOM.Utils.Text = function()
    {                
        
        Lich.DOM.Utils.Element.abstract(this);
        Lich.DOM.Utils.Element.call(this);
                
        this._text = null;
                        
    }
    
    Lich.DOM.Utils.Text.extends(Lich.DOM.Utils.Element);
    
    /**
     * @description Set a text string.
     * @param {string} text - The text string.
     * @method
    */
    Lich.DOM.Utils.Text.prototype.setText = function(text)
    {
    
        this._text = text;
        this._element.innerHTML = this._text;
    
    };
    
    /**
     * @description Get the text string.
     * @method
    */
    Lich.DOM.Utils.Text.prototype.getText = function()
    {
    
        return this._text;
        
    };

    //=====================================================//
    //=====================  PARAGRAPH  ===================//
    //=====================================================//
    
    /**
     * @description Create a Paragraph element.
     * @class Lich.DOM.Paragraph
    */ 
    Lich.DOM.Paragraph = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "p";
        this._element = Lich.Document.createElement(this._node);
                      
    }
    
    Lich.DOM.Paragraph.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //=====================  HEADING 1  ===================//
    //=====================================================//
    
    /**
     * @description Create a Heading1 element.
     * @class Lich.DOM.Heading1
    */
    Lich.DOM.Heading1 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h1";
        this._element = Lich.Document.createElement(this._node);
                         
    }
    
    Lich.DOM.Heading1.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //=====================  HEADING 2  ===================//
    //=====================================================//
    
    /**
     * @description Create a Heading2 element.
     * @class Lich.DOM.Heading2
    */
    Lich.DOM.Heading2 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h2";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Heading2.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //=====================  HEADING 3  ===================//
    //=====================================================//
    
    /**
     * @description Create a Heading3 element.
     * @class Lich.DOM.Heading3
    */
    Lich.DOM.Heading3 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h3";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Heading3.extends(Lich.DOM.Utils.Text);   
    
    //=====================================================//
    //=====================  HEADING 4  ===================//
    //=====================================================//
    
    /**
     * @description Create a Heading4 element.
     * @class Lich.DOM.Heading4
    */
    Lich.DOM.Heading4 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h4";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Heading4.extends(Lich.DOM.Utils.Text);  
    
    //=====================================================//
    //=====================  HEADING 5  ===================//
    //=====================================================//
    
    /**
     * @description Create a Heading5 element.
     * @class Lich.DOM.Heading5
    */
    Lich.DOM.Heading5 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h5";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Heading5.extends(Lich.DOM.Utils.Text);
    
    //=====================================================//
    //=====================  HEADING 6  ===================//
    //=====================================================//
    
    /**
     * @description Create a Heading6 element.
     * @class Lich.DOM.Heading6
    */
    Lich.DOM.Heading6 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h6";
        this._element = Lich.Document.createElement(this._node);
                        
    }
    
    Lich.DOM.Heading6.extends(Lich.DOM.Utils.Text);
    
    //=====================================================//
    //=====================  LINE BREAK  ==================//
    //=====================================================//
    
    /**
     * @description Create a LineBreak element.
     * @class Lich.DOM.LineBreak
    */
    Lich.DOM.LineBreak = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "br";
        this._element = Lich.Document.createElement(this._node);
                        
    }
    
    Lich.DOM.LineBreak.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //==================  PREFORMATED TEXT  ===============//
    //=====================================================//
    
    /**
     * @description Create a PreformatedText element.
     * @class Lich.DOM.PreformatedText
    */
    Lich.DOM.PreformatedText = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "pre";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.PreformatedText.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //========================  BOLD  =====================//
    //=====================================================//
    
    /**
     * @description Create a Bold element.
     * @class Lich.DOM.Bold
    */
    Lich.DOM.Bold = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "b";
        this._element = Lich.Document.createElement(this._node);
                        
    }
    
    Lich.DOM.Bold.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //=======================  STRONG  ====================//
    //=====================================================//
    
    /**
     * @description Create a Strong element.
     * @class Lich.DOM.Strong
    */
    Lich.DOM.Strong = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "strong";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Strong.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //=======================  ITALIC  ====================//
    //=====================================================//
    
    /**
     * @description Create a Italic element.
     * @class Lich.DOM.Italic
    */
    Lich.DOM.Italic = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "i";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Italic.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //=====================  EMPLATIZED  ==================//
    //=====================================================//
    
    /**
     * @description Create a Emphatized element.
     * @class Lich.DOM.Emphatized
    */
    Lich.DOM.Emphatized = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "em";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Emphatized.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //=======================  SMALL  =====================//
    //=====================================================//
    
    /**
     * @description Create a Small element.
     * @class Lich.DOM.Small
    */
    Lich.DOM.Small = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "small";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Small.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //=======================  MARK  ======================//
    //=====================================================//
    
    /**
     * @description Create a Mark element.
     * @class Lich.DOM.Mark
    */
    Lich.DOM.Mark = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "mark";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Mark.extends(Lich.DOM.Utils.Text);
     
    //=====================================================//
    //=====================  DELETED  =====================//
    //=====================================================//
    
    /**
     * @description Create a Deleted element.
     * @class Lich.DOM.Deleted
    */
    Lich.DOM.Deleted = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "del";
        this._element = Lich.Document.createElement(this._node);
                        
    }
    
    Lich.DOM.Deleted.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //====================  INSERTED  =====================//
    //=====================================================//
    
    /**
     * @description Create a Inserted element.
     * @class Lich.DOM.Inserted
    */
    Lich.DOM.Inserted = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "ins";
        this._element = Lich.Document.createElement(this._node);
                        
    }
    
    Lich.DOM.Inserted.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //===================  SUBSCRIPTED  ===================//
    //=====================================================//
    
    /**
     * @description Create a Subscripted element.
     * @class Lich.DOM.Subscripted
    */
    Lich.DOM.Subscripted = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "sub";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Subscripted.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //==================  SUPERSCRIPTED  ==================//
    //=====================================================//
    
    /**
     * @description Create a Superscripted element.
     * @class Lich.DOM.Superscripted
    */
    Lich.DOM.Superscripted = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "sup";
        this._element = Lich.Document.createElement(this._node);
                        
    }
    
    Lich.DOM.Superscripted.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //=======================  QUOTE  =====================//
    //=====================================================//
    
    /**
     * @description Create a Quote element.
     * @class Lich.DOM.Quote
    */
    Lich.DOM.Quote = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "quote";
        this._element = Lich.Document.createElement(this._node);
                        
    }
    
    Lich.DOM.Quote.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //====================  BLOCKQUOTE  ===================//
    //=====================================================//
    
    /**
     * @description Create a Blockquote element.
     * @class Lich.DOM.Blockquote
    */
    Lich.DOM.Blockquote = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "blockquote";
        this._element = Lich.Document.createElement(this._node);
                        
    }
    
    Lich.DOM.Blockquote.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //======================  ADDRESS  ====================//
    //=====================================================//
    
    /**
     * @description Create a Address element.
     * @class Lich.DOM.Address
    */
    Lich.DOM.Address = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "address";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Address.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //========================  CITE  =====================//
    //=====================================================//
    
    /**
     * @description Create a Cite element.
     * @class Lich.DOM.Cite
    */
    Lich.DOM.Cite = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "cite";
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Cite.extends(Lich.DOM.Utils.Text);
        
    //=====================================================//
    //====================  BiDirectional  ================//
    //=====================================================//
    
    /**
     * @description Create a BiDirectional element.
     * @class Lich.DOM.BiDirectional
    */
    Lich.DOM.BiDirectional = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "bdo";
        this._inverted = true;
        this._element = Lich.Document.createElement(this._node);
        this.inverted(this._inverted);
        
    }
    
    Lich.DOM.BiDirectional.extends(Lich.DOM.Utils.Text);
    
    /**
     * @description Set the BiDirectional inversion state.
     * @param {boolean} boolean - The boolean value.
     * @method
    */
    Lich.DOM.BiDirectional.prototype.inverted = function(boolean)
    {
    
        if(boolean == true)
        {
           
            this._inverted = boolean;
            this.setAttribute("dir","rtl");
           
        }
        else if(boolean == false)
        {
            
            this._inverted = boolean;
            this.setAttribute("dir","ltr");
                
        }
            
    };
    
    //=====================================================//
    //========================  LINK  =====================//
    //=====================================================//
    
    /**
     * @description Create a Link element.
     * @class Lich.DOM.Link
    */
    Lich.DOM.Link = function()
    {                
        
        Lich.DOM.Utils.Container.call(this);
                
        this._node = "a";
        this._hypertextReference = null;
        this._target = null;
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Link.extends(Lich.DOM.Utils.Container);
    
    /**
     * @description Set the Link hypertext reference.
     * @param {string} hypertextReference - The hypertext reference value.
     * @method
    */
    Lich.DOM.Link.prototype.setHypertextReference = function(hypertextReference)
    {
    
        this._hypertextReference = hypertextReference;
        this.setAttribute("href",this._hypertextReference);
    
    };
    
    /**
     * @description Set the Link target.
     * @param {string} target - The target value.
     * @method
    */
    Lich.DOM.Link.prototype.setTarget = function(target)
    {
    
        this._target = target;
        this.setAttribute("target",this._target);
    
    };
    
    //=====================================================//
    //====================   DIVISION   ===================//
    //=====================================================//
    
    /**
     * @description Create a Division element.
     * @class Lich.DOM.Division
    */
    Lich.DOM.Division = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "div";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Division.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //=====================   HEADER   ====================//
    //=====================================================//
    
    /**
     * @description Create a Header element.
     * @class Lich.DOM.Header
    */
    Lich.DOM.Header = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "header";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Header.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //===================   NAVIGATION   ==================//
    //=====================================================//
    
    /**
     * @description Create a Navigation element.
     * @class Lich.DOM.Navigation
    */
    Lich.DOM.Navigation = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "nav";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Navigation.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //=====================   SECTION   ===================//
    //=====================================================//
    
    /**
     * @description Create a Section element.
     * @class Lich.DOM.Section
    */
    Lich.DOM.Section = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "section";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Section.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //=====================   ARTICLE   ===================//
    //=====================================================//
    
    /**
     * @description Create a Article element.
     * @class Lich.DOM.Article
    */
    Lich.DOM.Article = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "article";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Article.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //=====================   FOOTER   ====================//
    //=====================================================//
    
    /**
     * @description Create a Footer element.
     * @class Lich.DOM.Footer
    */
    Lich.DOM.Footer = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "footer";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Footer.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //=====================   CANVAS   ====================//
    //=====================================================//
    
    /**
     * @description Create a Canvas element.
     * @class Lich.DOM.Canvas
    */
    Lich.DOM.Canvas  = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "canvas";
        this._width = null;
        this._height = null;
        this._element = Lich.Document.createElement(this.getNode());
        this._context = this._element.getContext("2d");
    }
    
    Lich.DOM.Canvas.extends(Lich.DOM.Utils.Element);
    
    /**
     * @description Set the Canvas width.
     * @param {string} width - The width value.
     * @method
    */
    Lich.DOM.Canvas.prototype.setWidth = function(width)
    {
        
        this._width = width;
        this.setAttribute("width",this._width);
        
    };
    
    /**
     * @description Set the Canvas height.
     * @param {string} height - The height value.
     * @method
    */
    Lich.DOM.Canvas.prototype.setHeight = function(height)
    {
        
        this._height = height;
        this.setAttribute("height",this._height);
        
    };
    
    /**
     * @description Set the Canvas width and height.
     * @param {string} width - The width value.
     * @param {string} height - The height value.
     * @method
    */
    Lich.DOM.Canvas.prototype.setSize = function(width,height)
    {
        
        this.setWidth(width);
        this.setHeight(height);
        
    };
    
    /**
     * @description Get the Canvas context.
     * @method
    */
    Lich.DOM.Canvas.prototype.getContext = function()
    {
    
        return this._context;
    
    };
    
    /**
     * @description Get the Canvas context.
     * @method
    */
    Lich.DOM.Canvas.prototype.moveTo = function(x,y)
    {
        
        this._context.moveTo(x,y);
        
    }
    
    /**
     * @description Create a Canvas line.
     * @param {string} x - The x value.
     * @param {string} y - The y value.
     * @method
    */
    Lich.DOM.Canvas.prototype.lineTo = function(x,y)
    {
        
        this._context.lineTo(x,y);
        
    }
    
    /**
     * @description Apply a stroke to a Canvas line.
     * @method
    */
    Lich.DOM.Canvas.prototype.stroke = function()
    {
        
        this._context.stroke();
        
    }
    
    /**
     * @description Begin a draw path in a Canvas.
     * @method
    */
    Lich.DOM.Canvas.prototype.beginPath = function()
    {
        
        this._context.beginPath();
        
    }
    
    /**
     * @description Create a Canvas arc.
     * @param {string} x - The x value.
     * @param {string} y - The y value.
     * @param {string} r - The r value.
     * @param {string} startingAngle - The starting angle value.
     * @param {string} endingAngle - The ending angle value.
     * @param {string} counterClockwise - The counter clockwise value.
     * @method
    */
    Lich.DOM.Canvas.prototype.arc = function(x,y,r,startingAngle,endingAngle,counterClockwise)
    {
        
        this._context.arc(x,y,r,startingAngle,endingAngle,counterClockwise);
        
    }
    
    /**
     * @description Set the font to a Canvas text.
     * @param {string} font - The font value.
     * @method
    */
    Lich.DOM.Canvas.prototype.font = function(font)
    {
        
        this._context.font = font;
        
    }
    
    /**
     * @description Create a Canvas text and set its x and y position.
     * @param {string} x - The x value.
     * @param {string} y - The y value.
     * @param {string} text - The text value.
     * @method
    */
    Lich.DOM.Canvas.prototype.fillText = function(x,y,text)
    {
        
        this._context.fillText(text,x,y);
        
    }
    
    /**
     * @description Create a Canvas stroke text and set its x and y position.
     * @param {string} x - The x value.
     * @param {string} y - The y value.
     * @param {string} text - The text value.
     * @method
    */
    Lich.DOM.Canvas.prototype.strokeText = function(x,y,text)
    {
        
        this._context.strokeText(text,x,y);
        
    }
    
    /**
     * @description Create a Canvas liner gradient.
     * @param {string} x0 - The x0 value.
     * @param {string} y0 - The y0 value.
     * @param {string} x1 - The x1 value.
     * @param {string} y1 - The y1 value.
     * @method
    */
    Lich.DOM.Canvas.prototype.createLinearGradient = function(x0,y0,x1,y1)
    {
    
        return this._context.createLinearGradient(x0,y0,x1,y1);
    
    }
    
    /**
     * @description Create a Canvas radial gradient.
     * @param {string} x0 - The x0 value.
     * @param {string} y0 - The y0 value.
     * @param {string} r0 - The r0 value.
     * @param {string} x1 - The x1 value.
     * @param {string} y1 - The y1 value.
     * @param {string} r1 - The r1 value.
     * @method
    */
    Lich.DOM.Canvas.prototype.createRadialGradient = function(x0,y0,r0,x1,y1,r1)
    {
        
        return this._context.createRadialGradient(x0,y0,r0,x1,y1,r1);
    
    }
    
    /**
     * @description Create a Canvas gradient color stop.
     * @param {string} stop - The stop value.
     * @param {string} color - The color value.
     * @method
    */
    Lich.DOM.Canvas.prototype.addColorStop = function(stop,color)
    {
    
        this._context.addColorStop(stop,color);
    
    }
    
    /**
     * @description Set a Canvas fill style.
     * @param {string} style - The style value.
     * @method
    */
    Lich.DOM.Canvas.prototype.fillStyle = function(style)
    {
    
        this._context.fillStyle = style;
    
    }
    
    /**
     * @description Set a Canvas fill rect.
     * @param {string} x - The x value.
     * @param {string} y - The y value.
     * @param {string} width - The width value.
     * @param {string} height - The height value.
     * @method
    */
    Lich.DOM.Canvas.prototype.fillRect = function(x,y,width,height)
    {
        
        this._context.fillRect(x,y,width,height);
        
    }
    
    /**
     * @description Create a Canvas image.
     * @param {string} x - The x value.
     * @param {string} y - The y value.
     * @param {string} url - The url value.
     * @method
    */
    Lich.DOM.Canvas.prototype.drawImage = function(x,y,url)
    {
        
        this._context.drawImage(url,x,y);
        
    }
    
    //=====================================================//
    //======================   SPAN   =====================//
    //=====================================================//
    
    /**
     * @description Create a Span element.
     * @class Lich.DOM.Span
    */
    Lich.DOM.Span = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "span";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Span.extends(Lich.DOM.Utils.Container);
       
    //=====================================================//
    //=======================   CODE   ====================//
    //=====================================================//
    
    /**
     * @description Create a Code element.
     * @class Lich.DOM.Code
    */
    Lich.DOM.Code = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "code";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Code.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //==================   KEYBOARD INPUT   ===============//
    //=====================================================//
    
    /**
     * @description Create a KeyboardInput element.
     * @class Lich.DOM.Code
    */
    Lich.DOM.KeyboardInput = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "kbd";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.KeyboardInput.extends(Lich.DOM.Utils.Text);
    
    //=====================================================//
    //==================   SAMPLE OUTPUT   ================//
    //=====================================================//
    
    /**
     * @description Create a SampleOutput element.
     * @class Lich.DOM.Code
    */
    Lich.DOM.SampleOutput = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "samp";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.SampleOutput.extends(Lich.DOM.Utils.Text);
    
    //=====================================================//
    //=====================   VARIABLE   ==================//
    //=====================================================//
    
    /**
     * @description Create a Variable element.
     * @class Lich.DOM.Code
    */
    Lich.DOM.Variable = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "var";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Variable.extends(Lich.DOM.Utils.Text);

    //=====================================================//
    //========================  MAP  ======================//
    //=====================================================//
    
    /**
     * @description Create a Map element.
     * @class Lich.DOM.Map
    */
    Lich.DOM.Map = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "map";
        this._name = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Map.extends(Lich.DOM.Utils.Container);
    
    /**
     * @description Set a Map name.
     * @param {string} name - The name value.
     * @method
    */
    Lich.DOM.Map.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    //=====================================================//
    //======================  PICTURE  ====================//
    //=====================================================//
    
    /**
     * @description Create a Picture element.
     * @class Lich.DOM.Picture
    */
    Lich.DOM.Picture = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "picture";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Picture.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //=======================  TABLE  =====================//
    //=====================================================//
    
    /**
     * @description Create a Table element.
     * @class Lich.DOM.Table
    */
    Lich.DOM.Table = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "table";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Table.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //=======================  CAPTION  ===================//
    //=====================================================//
    
    /**
     * @description Create a Caption element.
     * @class Lich.DOM.Caption
    */
    Lich.DOM.Caption = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "caption";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Caption.extends(Lich.DOM.Utils.Text);
    
    //=====================================================//
    //=====================  TABLE HEAD  ==================//
    //=====================================================//
    
    /**
     * @description Create a TableHead element.
     * @class Lich.DOM.TableHead
    */
    Lich.DOM.TableHead = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "th";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.TableHead.extends(Lich.DOM.Utils.Text);
    
    //=====================================================//
    //=====================  TABLE ROW  ===================//
    //=====================================================//
    
    /**
     * @description Create a TableRow element.
     * @class Lich.DOM.TableRow
    */
    Lich.DOM.TableRow = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "tr";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.TableRow.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //=====================  TABLE CELL  ==================//
    //=====================================================//
    
    /**
     * @description Create a TableCell element.
     * @class Lich.DOM.TableCell
    */
    Lich.DOM.TableCell = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "td";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.TableCell.extends(Lich.DOM.Utils.Text);
    
    //=====================================================//
    //===================  UNORDERED LIST  ================//
    //=====================================================//
    
    /**
     * @description Create a UnorderedList element.
     * @class Lich.DOM.UnorderedList
    */
    Lich.DOM.UnorderedList = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "ul";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.UnorderedList.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //====================  ORDERED LIST  =================//
    //=====================================================//

    /**
     * @description Create a OrderedList element.
     * @class Lich.DOM.OrderedList
    */
    Lich.DOM.OrderedList = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "ol";
        this._type = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.OrderedList.extends(Lich.DOM.Utils.Container);
    
    /**
     * @description Set a OrderedList type.
     * @param {string} type - The type value.
     * @method
    */
    Lich.DOM.OrderedList.prototype.setType = function(type)
    {
    
        this._type = type;
        this.setAttribute("type",type);
    
    };
    
    //=====================================================//
    //=====================  LIST ITEM  ===================//
    //=====================================================//
    
    /**
     * @description Create a OrderedList element.
     * @class Lich.DOM.OrderedList
    */
    Lich.DOM.ListItem = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "li";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.ListItem.extends(Lich.DOM.Utils.Text);
    
    //=====================================================//
    //==================  DEFINITION LIST  ================//
    //=====================================================//
    
    /**
     * @description Create a DefinitionList element.
     * @class Lich.DOM.DefinitionList
    */
    Lich.DOM.DefinitionList = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "dl";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.DefinitionList.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //==================  DEFINITION TERM  ================//
    //=====================================================//

    /**
     * @description Create a DefinitionTerm element.
     * @class Lich.DOM.DefinitionTerm
    */
    Lich.DOM.DefinitionTerm = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "dt";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.DefinitionTerm.extends(Lich.DOM.Utils.Text);
    
    //=====================================================//
    //==============  DEFINITION DESCRIPTION  =============//
    //=====================================================//

    /**
     * @description Create a DefinitionDescription element.
     * @class Lich.DOM.DefinitionDescription
    */
    Lich.DOM.DefinitionDescription = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "dd";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.DefinitionDescription.extends(Lich.DOM.Utils.Text);

    //=====================================================//
    //=======================  IMAGE  =====================//
    //=====================================================//
    
    /**
     * @description Create a Image element.
     * @class Lich.DOM.Image
    */
    Lich.DOM.Image = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "img";
        this._source = null;
        this._alternateText = null;
        this._width = null;
        this._height = null;
        this._map = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Image.extends(Lich.DOM.Utils.Element);
        
    /**
     * @description Set a Image souce.
     * @param {string} source - The source value.
     * @method
    */
    Lich.DOM.Image.prototype.setSource = function(source)
    {
        
        this._source = source;
        this.setAttribute("src",this._source);
        
    };
    
    /**
     * @description Set a Image alternate Text.
     * @param {string} alternateText - The alternate text value.
     * @method
    */
    Lich.DOM.Image.prototype.setAlternateText = function(alternateText)
    {
        
        this._alternateText = alternateText;
        this.setAttribute("alt",this._alternateText);
        
    };
    
    /**
     * @description Set a Image width.
     * @param {string} width - The width value.
     * @method
    */
    Lich.DOM.Image.prototype.setWidth = function(width)
    {
        
        this._width = width;
        this.setAttribute("width",this._width);
        
    };
    
    /**
     * @description Set a Image height.
     * @param {string} height - The height value.
     * @method
    */
    Lich.DOM.Image.prototype.setHeight = function(height)
    {
        
        this._height = height;
        this.setAttribute("height",this._height);
        
    };
    
    /**
     * @description Set a Image width and height.
     * @param {string} width - The width value.
     * @param {string} height - The height value.
     * @method
    */
    Lich.DOM.Image.prototype.setSize = function(width,height)
    {
        
        this.setWidth(width);
        this.setHeight(height);
        
    };
    
    /**
     * @description Set a Image map.
     * @param {string} map - The map value.
     * @method
    */
    Lich.DOM.Image.prototype.setMap = function(map)
    {
        
        this._map = map;
        this.setAttribute("useMap",this._map);
    
    };

    //=====================================================//
    //========================  AREA  =====================//
    //=====================================================//
    
    /**
     * @description Create a Area element.
     * @class Lich.DOM.Area
    */
    Lich.DOM.Area = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "area";
        this._shape = null;
        this._coordinates = null;
        this._alternateText = null;
        this._hypertextReference = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Area.extends(Lich.DOM.Utils.Element);
    
    /**
     * @description Set a Area shape.
     * @param {string} shape - The shape value.
     * @method
    */
    Lich.DOM.Area.prototype.setShape = function(shape)
    {
    
        this._shape = shape;
        this.setAttribute("shape",this._shape);
    
    };
    
    /**
     * @description Set a Area coordinates.
     * @param {string} coordinates - The coordinates value.
     * @method
    */
    Lich.DOM.Area.prototype.setCoordinates = function(coordinates)
    {
    
        this._coordinates = coordinates;
        this.setAttribute("coords",this._coordinates);
    
    };
    
    /**
     * @description Set a Area hypertext reference.
     * @param {string} hypertextReference - The hypertext reference value.
     * @method
    */
    Lich.DOM.Area.prototype.setHypertextReference = function(hypertextReference)
    {
        
        this._hypertextReference = hypertextReference
        this.setAttribute("href",this._hypertextReference);
    
    };
    
    /**
     * @description Set a Area alternate text.
     * @param {string} alternateText - The alternate text value.
     * @method
    */
    Lich.DOM.Area.prototype.setAlternateText = function(alternateText)
    {
        
        this._alternateText = alternateText;
        this.setAttribute("alt",this._alternateText);
        
    };
    
    //=====================================================//
    //=======================  SOURCE  ====================//
    //=====================================================//
    
    /**
     * @description Create a Source element.
     * @class Lich.DOM.Source
    */
    Lich.DOM.Source = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "source";
        this._media = null;
        this._sourceSet = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Source.extends(Lich.DOM.Utils.Element);
    
    /**
     * @description Set a Source media.
     * @param {string} media - The media value.
     * @method
    */
    Lich.DOM.Source.prototype.setMedia = function(media)
    {
        
        this._media = media;
        this.setAttribute("media",this._media);
        
    };
    
    /**
     * @description Set a Source source set.
     * @param {string} sourceSet - The source set value.
     * @method
    */
    Lich.DOM.Source.prototype.setSourceSet = function(sourceSet)
    {
    
        this._sourceSet = sourceSet;
        this.setAttribute("srcset",this._sourceSet);
    
    };
    
    //=====================================================//
    //=======================  BUTTON  ====================//
    //=====================================================//
    
    /**
     * @description Create a Button element.
     * @class Lich.DOM.Button
    */
    Lich.DOM.Button = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "button";
        this._type = "button";
        this._element = Lich.Document.createElement(this.getNode());
        
        this.setType(this._type);
                
    }
    
    Lich.DOM.Button.extends(Lich.DOM.Utils.Element);
    
    /**
     * @description Set a Button type.
     * @param {string} type - The type value.
     * @method
    */
    Lich.DOM.Button.prototype.setType = function(type)
    {
        
        this._type = type;
        this.setAttribute("type",this._type);
        
    };
    
    /**
     * @description Set a Button value.
     * @param {string} value - The value value.
     * @method
    */
    Lich.DOM.Button.prototype.setValue = function(value)
    {
        
        this._value = value;
        this._element.innerHTML = this._value;
        
    };
    
    //=====================================================//
    //===================   INLINE FRAME   ================//
    //=====================================================//
    
    /**
     * @description Create a InlineFrame element.
     * @class Lich.DOM.InlineFrame
    */
    Lich.DOM.InlineFrame = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "iframe";
        this._width = null;
        this._height = null;
        this._source = null;
        this._name = null;
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.InlineFrame.extends(Lich.DOM.Utils.Element);
    
    /**
     * @description Set a Button width.
     * @param {string} width - The width value.
     * @method
    */
    Lich.DOM.InlineFrame.prototype.setWidth = function(width)
    {
        
        this._width = width;
        this.setAttribute("width",this._width);
        
    };
    
    /**
     * @description Set a Button height.
     * @param {string} height - The height value.
     * @method
    */
    Lich.DOM.InlineFrame.prototype.setHeight = function(height)
    {
        
        this._height = height;
        this.setAttribute("height",this._height);
        
    };
    
    /**
     * @description Set a Button width and height.
     * @param {string} width - The width value.
     * @param {string} height - The height value.
     * @method
    */
    Lich.DOM.InlineFrame.prototype.setSize = function(width,height)
    {
        
        this.setWidth(width);
        this.setHeight(height);
        
    };
    
    /**
     * @description Set a Button source.
     * @param {string} source - The source value.
     * @method
    */
    Lich.DOM.InlineFrame.prototype.setSource = function(source)
    {
        
        this._source = source;
        this.setAttribute("source",this._source);
        
        
    };
    
    /**
     * @description Set a Button name.
     * @param {string} name - The name value.
     * @method
    */
    Lich.DOM.InlineFrame.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    //=====================================================//
    //=======================   FORM   ====================//
    //=====================================================//
    
    /**
     * @description Create a Form element.
     * @class Lich.DOM.Form
    */
    Lich.DOM.Form = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "form";
        this._action = null;
        this._method = null;
        this._type = null;
        this._autocomplete = null;
        this._novalidate = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Form.extends(Lich.DOM.Utils.Container);
    
    /**
     * @description Set a Form type.
     * @param {string} type - The type value.
     * @method
    */
    Lich.DOM.Form.prototype.setType = function(type)
    {
    
        this._type = type;
        this.setAttribute("type",this._type);
    
    };
    
    /**
     * @description Set a Form type.
     * @param {string} action - The action value.
     * @method
    */
    Lich.DOM.Form.prototype.setAction = function(action)
    {
    
        this._action = action;
        this.setAttribute("action",this._action);
    
    };
    
    /**
     * @description Set a Form type.
     * @param {string} method - The method value.
     * @method
    */
    Lich.DOM.Form.prototype.setMethod = function(method)
    {
    
        this._method = method;
        this.setAttribute("method",this._method);
    
    };
    
    /**
     * @description Set a Form auto complete boolean state.
     * @param {boolean} boolean - The boolean value.
     * @method
    */
    Lich.DOM.Form.prototype.autoComplete = function(boolean)
    {
    
        this._autocomplete = boolean;
        this.setAttribute("autocomplete",this._autocomplete);
    
    };
    
    /**
     * @description Set a Form no validate boolean state.
     * @param {boolean} boolean - The boolean value.
     * @method
    */
    Lich.DOM.Form.prototype.noValidate = function(boolean)
    {
    
        this._novalidate = boolean;
        this.setAttribute("novalidate",this._novalidate);
    
    };
        
    //=====================================================//
    //======================   INPUT   ====================//
    //=====================================================//
    
    /**
     * @description Create a Input element.
     * @class Lich.DOM.Input
    */
    Lich.DOM.Input = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "input";
        this._type = null;
        this._name = null;
        this._value = null;
        this._list = null;
        this._minimum = null;
        this._maximum = null;
        this._form = null;
        this._formAction = null;
        this._formEncodeType = null;
        this._formMethod = null;
        this._formTarget = null;
        this._width = null;
        this._height = null;
        this._step = null;
        this._maxLength = null;
        this._pattern = null;
        this._title = null;
        this._placeholder = null;
        this._required = null;
        this._readonly = null;
        this._disabled = null;
        this._autofocus = null;
        this._noValidate = null;
        this._multiple = null;
        
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Input.extends(Lich.DOM.Utils.Element);
    
    /**
     * @description Set a Input type.
     * @param {string} type - The type value.
     * @method
    */
    Lich.DOM.Input.prototype.setType = function(type)
    {
    
        this._type = type;
        this.setAttribute("type",this._type);
    
    }
    
    /**
     * @description Set a Input name.
     * @param {string} name - The name value.
     * @method
    */
    Lich.DOM.Input.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    /**
     * @description Set a Input value.
     * @param {string} value - The value value.
     * @method
    */
    Lich.DOM.Input.prototype.setValue = function(value)
    {
        
        this._value = value;
        this.setAttribute("value",this._value);
        
    };
    
    /**
     * @description Set a Input list.
     * @param {string} list - The list value.
     * @method
    */
    Lich.DOM.Input.prototype.setList = function(list)
    {
        
        this._list = list;
        this.setAttribute("list",this._list);
        
    };
    
    /**
     * @description Set a Input minimum.
     * @param {string} minimum - The minimum value.
     * @method
    */
    Lich.DOM.Input.prototype.setMinimun = function(minimum)
    {
    
        this._minimum = minimum;
        this.setAttribute("min",this._list);
    
    }
    
    /**
     * @description Set a Input maximum.
     * @param {string} maximum - The maximum value.
     * @method
    */
    Lich.DOM.Input.prototype.setMaximum = function(maximum)
    {
    
        this._maximum = maximum;
        this.setAttribute("max",this._list);
    
    }
    
    /**
     * @description Set a Input form.
     * @param {string} form - The form value.
     * @method
    */
    Lich.DOM.Input.prototype.setForm = function(form)
    {
    
        this._form = form;
        this.setAttribute("form",this._form);
    
    };
    
    /**
     * @description Set a Input form action.
     * @param {string} formAction - The form action value.
     * @method
    */
    Lich.DOM.Input.prototype.setFormAction = function(formAction)
    {
    
        this._formAction = formAction;
        this.setAttribute("formaction",this._formAction);
    
    };
    
    /**
     * @description Set a Input form encode type.
     * @param {string} formEncodeType - The form encode type value.
     * @method
    */
    Lich.DOM.Input.prototype.setFormEncodeType = function(formEncodeType)
    {
    
        this._formEncodeType = formEncodeType;
        this.setAttribute("formaction",this._formEncodeType);
    
    };
    
    /**
     * @description Set a Input form method.
     * @param {string} formMethod - The form method value.
     * @method
    */
    Lich.DOM.Input.prototype.setFormMethod = function(formMethod)
    {
    
        this._formMethod = formMethod;
        this.setAttribute("formaction",this._formMethod);
    
    };
    
    /**
     * @description Set a Input form target.
     * @param {string} formTarget - The form target value.
     * @method
    */
    Lich.DOM.Input.prototype.setFormTarget = function(formTarget)
    {
        
        this._formTarget = formTarget;
        this.setAttribute("formtarget",this._formTarget);
    
    };
    
    /**
     * @description Set a Input width.
     * @param {string} width - The width value.
     * @method
    */
    Lich.DOM.Input.prototype.setWidth = function(width)
    {
        
        this._width = width;
        this.setAttribute("width",this._width);
        
    };
    
    /**
     * @description Set a Input height.
     * @param {string} height - The height value.
     * @method
    */
    Lich.DOM.Input.prototype.setHeight = function(height)
    {
        
        this._height = height;
        this.setAttribute("height",this._height);
        
    };
    
    /**
     * @description Set a Input width and height.
     * @param {string} width - The width value.
     * @param {string} height - The height value.
     * @method
    */
    Lich.DOM.Input.prototype.setSize = function(width,height)
    {
        
        this.setWidth(width);
        this.setHeight(height);
        
    };
    
    /**
     * @description Set a Input step.
     * @param {string} step - The step value.
     * @method
    */
    Lich.DOM.Input.prototype.setStep = function(step)
    {
    
        this._step = step;
        this.setAttribute("step",this._step);
    
    };
    
    /**
     * @description Set a Input max length.
     * @param {string} maxLength - The max length value.
     * @method
    */
    Lich.DOM.Input.prototype.setMaxLength = function(maxLength)
    {
    
        this._maxLength = maxLength;
        this.setAttribute("maxLength",this._maxLength);
    
    };
    
    /**
     * @description Set a Input pattern.
     * @param {string} pattern - The pattern value.
     * @method
    */
    Lich.DOM.Input.prototype.setPattern = function(pattern)
    {
        
        this._pattern = pattern;
        this.setAttribute("pattern",this._pattern);
        
    };    
    
    /**
     * @description Set a Input title.
     * @param {string} title - The title value.
     * @method
    */
    Lich.DOM.Input.prototype.setTitle = function(title)
    {
        
        this._title = title;
        this.setAttribute("title",this._title);
    
    };
    
    /**
     * @description Set a Input placeholder.
     * @param {string} placeholder - The placeholder value.
     * @method
    */
    Lich.DOM.Input.prototype.setPlaceholder = function(placeholder)
    {
        
        this._placeholder = placeHolder;
        this.setAttribute("placeholder",this._placeholder);
    
    };
    
    /**
     * @description Set a Input checked boolean state true.
     * @method
    */
    Lich.DOM.Input.prototype.checked = function()
    {
        
        this.setAttribute("checked",true);
        
    };
    
    /**
     * @description Set a Input required boolean state.
     * @param {boolean} boolean - The boolean value.
     * @method
    */
    Lich.DOM.Input.prototype.required = function(boolean)
    {
    
        this._required = boolean;
        this.setAttribute("required",this._required);
    
    };
    
    /**
     * @description Set a Input readonly boolean state.
     * @param {boolean} boolean - The boolean value.
     * @method
    */
    Lich.DOM.Input.prototype.readonly = function(boolean)
    {
    
        this._readonly = boolean;
        this.setAttribute("readonly",this._readonly);
    
    };
    
    /**
     * @description Set a Input disabled boolean state.
     * @param {boolean} boolean - The boolean value.
     * @method
    */
    Lich.DOM.Input.prototype.disabled = function(boolean)
    {
    
        this._disabled = boolean;
        this.setAttribute("disabled",this._disabled);
    
    };
    
    /**
     * @description Set a Input autofocus boolean state.
     * @param {boolean} boolean - The boolean value.
     * @method
    */
    Lich.DOM.Input.prototype.autofocus = function(boolean)
    {
    
        this._autofocus = boolean;
        this.setAttribute("disabled",this._autofocus);
    
    };
    
    /**
     * @description Set a Input noValidate boolean state.
     * @param {boolean} boolean - The boolean value.
     * @method
    */
    Lich.DOM.Input.prototype.noValidate = function(boolean)
    {
    
        this._noValidate = boolean;
        this.setAttribute("formnovalidate",this._noValidate);
    
    };
    
    /**
     * @description Set a Input multiple boolean state.
     * @param {boolean} boolean - The boolean value.
     * @method
    */
    Lich.DOM.Input.prototype.multiple = function(boolean)
    {
    
        this._multiple = boolean;
        this.setAttribute("multiple",this._multiple);
    
    };
    
    //=====================================================//
    //====================   FIELDSET   ===================//
    //=====================================================//
    
    /**
     * @description Create a Fieldset element.
     * @class Lich.DOM.Fieldset
    */
    Lich.DOM.Fieldset = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "fieldset";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Fieldset.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //=====================   LEGEND   ====================//
    //=====================================================//
    
    /**
     * @description Create a Legend element.
     * @class Lich.DOM.Legend
    */
    Lich.DOM.Legend = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "legend";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Legend.extends(Lich.DOM.Utils.Text);
    
    //=====================================================//
    //=====================   SELECT   ====================//
    //=====================================================//
    
    /**
     * @description Create a Select element.
     * @class Lich.DOM.Select
    */
    Lich.DOM.Select = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "select";
        this._name = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Select.extends(Lich.DOM.Utils.Container);
    
    /**
     * @description Set a Select name.
     * @param {string} name - The name value.
     * @method
    */
    Lich.DOM.Select.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    //=====================================================//
    //=====================   OPTION   ====================//
    //=====================================================//
    
    /**
     * @description Create a Option element.
     * @class Lich.DOM.Option
    */
    Lich.DOM.Option = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "option";
        this._value = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Option.extends(Lich.DOM.Utils.Text);
    
    /**
     * @description Set a Option value.
     * @param {string} value - The value value.
     * @method
    */
    Lich.DOM.Option.prototype.setValue = function(value)
    {
        
        this._value = value;
        this.setAttribute("value",this._value);
        
    };
    
    /**
     * @description Set a Option selected boolean state true.
     * @method
    */
    Lich.DOM.Option.prototype.selected = function()
    {
        
        this.setAttribute("selected",true);
        
    };
    
    //=====================================================//
    //====================   TEXT AREA   ==================//
    //=====================================================//
    
    /**
     * @description Create a TextArea element.
     * @class Lich.DOM.TextArea
    */
    Lich.DOM.TextArea = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "textarea";
        this._name = null;
        this._rows = null;
        this._columns = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.TextArea.extends(Lich.DOM.Utils.Text);
    
    /**
     * @description Set a TextArea value.
     * @param {string} name - The name value.
     * @method
    */
    Lich.DOM.TextArea.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    /**
     * @description Set a TextArea rows.
     * @param {string} rows - The rows value.
     * @method
    */
    Lich.DOM.TextArea.prototype.setRows = function(rows)
    {
    
        this._rows = rows;
        this.setAttribute("rows",this._rows);
    
    };
    
    /**
     * @description Set a TextArea columns.
     * @param {string} columns - The columns value.
     * @method
    */
    Lich.DOM.TextArea.prototype.setColumns = function(columns)
    {
    
        this._columns = columns;
        this.setAttribute("rows",this._columns);
    
    };
    
    //=====================================================//
    //=====================   DATALIST   ==================//
    //=====================================================//
    
    /**
     * @description Create a Datalist element.
     * @class Lich.DOM.Datalist
    */
    Lich.DOM.Datalist = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "datalist";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Datalist.extends(Lich.DOM.Utils.Container);
    
    //=====================================================//
    //=====================   KEYGEN   ====================//
    //=====================================================//
    
    /**
     * @description Create a Keygen element.
     * @class Lich.DOM.Keygen
    */
    Lich.DOM.Keygen = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "keygen";
        this._name = false;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Keygen.extends(Lich.DOM.Utils.Element);
    
    /**
     * @description Set a Keygen name.
     * @param {string} name - The name value.
     * @method
    */
    Lich.DOM.Keygen.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    //=====================================================//
    //=====================   OUTPUT   ====================//
    //=====================================================//
    
    /**
     * @description Create a Output element.
     * @class Lich.DOM.Output
    */
    Lich.DOM.Output = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "output";
        this._name = null;
        this._for = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Output.extends(Lich.DOM.Utils.Element);
    
    /**
     * @description Set a Output name.
     * @param {string} name - The name value.
     * @method
    */
    Lich.DOM.Output.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    /**
     * @description Set a Output For.
     * @param {string} For - The For value.
     * @method
    */
    Lich.DOM.Output.prototype.setFor = function(For)
    {
    
        this._for = For;
        this.setAttribute("for",this._for);
    
    };
    
}());
