/*=====================================================*/
/*===================   POLYFILLS   ===================*/
/*=====================================================*/

Function.prototype.extends = function(Super)
{
    
    this.prototype = Object.create(Super.prototype);
    this.prototype.constructor = this;
    this.prototype.constructor._super = Super;
        
}

Function.prototype.abstract = function(Abstract)
{    
    
    if (this === Abstract.constructor) 
    {
        
        throw new Error("Can't instantiate abstract class !");
        
    }
    
}

/*=====================================================*/
/*===================   NAMESPACE   ==================*/
/*=====================================================*/

this.Lich = this.Lich || {};

/*=====================================================*/
/*====================   AUTOSTART   ==================*/
/*=====================================================*/

(function()
{
    "use strict";
    
    /*=====================================================*/
    /*=======================   SCOPE   ===================*/
    /*=====================================================*/
    
    Lich.Scope = {};
    
    /*=====================================================*/
    /*=====================   DOCUMENT   ==================*/
    /*=====================================================*/
          
    Lich.Document = {};
        
    Lich.Document.onLoad = function(fn)
    {
                
        window.addEventListener("DOMContentLoaded",function()
        {
        
            Lich.Document.document = document;
            Lich.Document.body = document.body;
            fn.call(Lich.Scope);
            
        });

    };
    
    Lich.Document.addChild = function(child)
    {
    
        this.body.appendChild(child.getElement());
    
    };
    
    Lich.Document.createElement = function(node)
    {
            
        return this.document.createElement(node);
        
    };
    
    Lich.Document.setTitle = function(title)
    {
    
        this.document.title = title;
    
    };
    
    Lich.Document.getAnchors = function()
    {
    
        return this.document.anchors;
    
    };
    
    Lich.Document.getAnchors = function()
    {
    
        return this.document.anchors;
    
    };
    
    Lich.Document.getBaseURI = function()
    {
    
        return this.document.baseURI;
    
    };
    
    Lich.Document.getBody = function()
    {
    
        return Lich.Document.body;
    
    };
    
    Lich.Document.getDoctype = function()
    {
    
        return this.document.doctype;
        
    };
    
    Lich.Document.getDocumentElement = function()
    {
    
        return this.document.documentElement;
        
    };
        
    Lich.Document.getDocumentURI = function()
    {
        
        return this.document.documentURI;
        
    };
    
    Lich.Document.getDomain = function()
    {
    
        return this.document.domain;
    
    };
    
    Lich.Document.getEmbeds = function()
    {
    
        return this.document.embeds;
    
    };
    
    Lich.Document.getHead = function()
    {
    
        return this.document.head;
    
    };
    
    Lich.Document.getForms = function()
    {
    
        return this.document.forms;
    
    };
    
    Lich.Document.getImages = function()
    {
    
        return this.document.images;
    
    };
    
    Lich.Document.getInputEncoding = function()
    {
        
        return this.document.inputEncoding;
        
    };
    
    Lich.Document.getLasModfied = function()
    {
    
        return this.document.lastModified;
        
    };
    
    Lich.Document.getLinks = function()
    {
      
        return this.document.links;
        
    };
    
    Lich.Document.getReadyState = function()
    {
    
        return this.document.readyState;
    
    };
    
    Lich.Document.getReferrer = function()
    {
    
        return this.document.referrer;
    
    };
    
    Lich.Document.getScripts = function()
    {
    
        return this.document.scripts;
    
    };
    
    Lich.Document.getTitle = function()
    {
    
        return this.document.title;
        
    };
    
    Lich.Document.getURL = function()
    {
        
        return this.document.URL;
    
    };
    
    Lich.Document.getTitle = function()
    {
    
        return this.document.title;
    
    };
    
    /*=====================================================*/
    /*========================   TIME  ====================*/
    /*=====================================================*/
    
    Lich.Time = {};
    
    Lich.Time.timeoutList = [];
    
    Lich.Time.intervalList = [];
        
    Lich.Time.setTimeout = function(name,fn,milliseconds)
    {
    
        var timeout = setTimeout(fn,milliseconds);
        
        Lich.Time.timeoutList.push({name:name,timeout:timeout});
    
    };
    
    Lich.Time.setInterval = function(name,fn,milliseconds)
    {
    
        var interval = setInterval(fn,milliseconds);
        
        Lich.Time.intervalList.push({name:name,interval:interval});
    
    };
    
    Lich.Time.clearTimeout = function(name,fn)
    {
    
        for(var i = 0; i < Lich.Time.timeoutList.length; i++)
        {
            
            if(Lich.Time.timeoutList[i].name == name)
            {
            
                clearTimeout(Lich.Time.timeoutList[i].timeout);
                
                Lich.Time.timeoutList.splice(i,1);
                
                fn();
                
                break;
            
            }
        
        }
    
    };
    
    Lich.Time.clearInterval = function(name,fn)
    {
    
        for(var i = 0; i < Lich.Time.intervalList.length; i++)
        {
            
            if(Lich.Time.intervalList[i].name == name)
            {
            
                clearInterval(Lich.Time.intervalList[i].interval);
                
                
                Lich.Time.intervalList.splice(i,1);
                
                fn();
                
                break;
            
            }
        
        }
    
    };
    
    /*=====================================================*/
    /*=======================   JSON   ====================*/
    /*=====================================================*/
    
    Lich.JSON = {};
    
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
    
    /*=====================================================*/
    /*==============   BROWSER OBJECT MODEL   =============*/
    /*=====================================================*/
    
    Lich.BOM = {};
    Lich.BOM.Document = Lich.Document;
    Lich.BOM.Time = Lich.Time;
    
    /*=====================================================*/
    /*=====================   BROWSER   ===================*/
    /*=====================================================*/
    
    Lich.BOM.Browser = {};
    
    Lich.BOM.Browser.getDocument = function()
    {
    
        return document;
    
    };
    
    Lich.BOM.Browser.getWindow = function()
    {
    
        return window;
    
    };
    
    Lich.BOM.Browser.getScreen = function()
    {
    
        return window;
    
    };
    
    Lich.BOM.Browser.getLocation = function()
    {
    
        return location;
    
    };
    
    Lich.BOM.Browser.getHistory = function()
    {
    
        return history;
    
    };
    
    Lich.BOM.Browser.getNavigator = function()
    {
        
        return navigator;
    
    };
    
    /*=====================================================*/
    /*======================   WINDOW   ===================*/
    /*=====================================================*/
    
    Lich.BOM.Window = {};
    
    Lich.BOM.Window.getWidth = function()
    {
      
        return window.innerHeight;
        
    };
    
    Lich.BOM.Window.getHeight = function()
    {
      
        return window.innerHeight;
        
    };
    
    /*=====================================================*/
    /*======================   SCREEN   ===================*/
    /*=====================================================*/
    
    Lich.BOM.Screen = {};
    
    Lich.BOM.Screen.getWidth = function()
    {
      
        return screen.width;
        
    };
    
    Lich.BOM.Screen.getHeight = function()
    {
      
        return screen.height;
        
    };
    
    Lich.BOM.Screen.getAvailableWidth = function()
    {
      
        return screen.availHeight;
        
    };
    
    Lich.BOM.Screen.getAvailableHeight = function()
    {
      
        return screen.availWidth;
        
    };
    
    Lich.BOM.Screen.getColorDepth = function()
    {
    
        return screen.colorDepth;
    
    };
    
    Lich.BOM.Screen.getPixelDepth = function()
    {
    
        return screen.pixelDepth;
    
    };
    
    /*=====================================================*/
    /*======================   LOCATION   =================*/
    /*=====================================================*/
    
    Lich.BOM.Location = {};
    
    Lich.BOM.Location.getHypertextReference = function()
    {
    
        return location.href;
    
    };
    
    Lich.BOM.Location.getHostname = function()
    {
    
        return location.hostname;
    
    };
    
    Lich.BOM.Location.getPathname = function()
    {
    
        return location.pathname;
    
    };
    
    Lich.BOM.Location.getProtocol = function()
    {
    
        return location.protocol;
    
    };
    
    Lich.BOM.Location.getPort = function()
    {
    
        return location.port;
        
    };
    
    Lich.BOM.Location.assign = function(url)
    {
    
        return location.assign(url);
    
    };
        
    /*=====================================================*/
    /*======================   HISTORY   ==================*/
    /*=====================================================*/
    
    Lich.BOM.History = {};
    
    Lich.BOM.History.back = function()
    {
    
        history.back();
        
    };
    
    Lich.BOM.History.foward = function()
    {
    
        history.forward();
    
    };
    
    /*=====================================================*/
    /*=====================   NAVIGATOR  ==================*/
    /*=====================================================*/
    
    Lich.BOM.Navigator = {};
        
    Lich.BOM.Navigator.getApplicationName = function()
    {
    
        return navigator.appName;
    
    };
    
    Lich.BOM.Navigator.getApplicationCodeName = function()
    {
    
        return navigator.appCodeName;
    
    };
    
    Lich.BOM.Navigator.getApplicationVersion = function()
    {
    
        return navigator.appVersion;
    
    }
    
    Lich.BOM.Navigator.getEngine = function()
    {
    
        return navigator.product;
    
    };
    
    Lich.BOM.Navigator.getAgent = function()
    {
    
        return navigator.userAgent;
    
    };
    
    Lich.BOM.Navigator.getPlataform = function()
    {
    
        return navigator.platform;

    };
    
    Lich.BOM.Navigator.getLanguage = function()
    {
    
        return navigator.language;
        
    };
    
    Lich.BOM.Navigator.isOnline = function()
    {
    
        return navigator.onLine;
    
    };
    
    Lich.BOM.Navigator.isJavaEnabled = function()
    {
    
        return navigator.javaEnabled();
    
    };
    
    Lich.BOM.Navigator.isCookiesEnabled = function()
    {
    
        return navigator.cookieEnabled;
        
    };
    
    /*=====================================================*/
    /*=======================   POPUP  ====================*/
    /*=====================================================*/
    
    Lich.BOM.Popup = {};
    
    Lich.BOM.Popup.alert = function(message)
    {
    
        alert(message);
    
    };
    
    Lich.BOM.Popup.confirm = function(message)
    {
    
        return confirm(message);
        
    };
    
    Lich.BOM.Popup.prompt = function(message,defaultMessage)
    {
    
        return prompt(message,defaultMessage);
    
    };
    
    /*=====================================================*/
    /*=======================   COOKIE  ===================*/
    /*=====================================================*/
    
    Lich.BOM.Cookie = {};
    
    Lich.BOM.Cookie.createCookie = function(name,value)
    {
            
        Lich.Document.document.cookie = name+"="+value;
    
    };
    
    Lich.BOM.Cookie.deleteCookie = function(name)
    {
    
        Lich.Document.document.cookie = name+"=;expires=Thu, 01 Jan 1970";
    
    };
    
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
    
    /*-----------------------------------------------------*/
    
    Lich.Document.getCookies = Lich.BOM.Cookie.getAllCookies;
    
    /*-----------------------------------------------------*/
    
    /*=====================================================*/
    /*=============   DOCUMENT OBJECT MODEL   =============*/
    /*=====================================================*/
    
    Lich.DOM = {};
    Lich.DOM.Utils = {};
        
    
    /*=====================================================*/
    /*====================   ELEMENT   ====================*/
    /*=====================================================*/
    
    Lich.DOM.Utils.Element = function()
    {
        
        Lich.DOM.Utils.Element.abstract(this);    
        
        this._node = null;
        this._id = null;
               
    };
    
    Lich.DOM.Utils.Element.prototype.setId = function(id)
    {
        
        this._id = id;
        this._element.id = this._id;
        
    };
    
    Lich.DOM.Utils.Element.prototype.setAttribute = function(attribute,value)
    {
    
        this._element.setAttribute(attribute,value);
    
    };
    
    Lich.DOM.Utils.Element.prototype.setProperty = function(property,value)
    {
    
        this._element.style[propery] = value;
    
    };
    
    Lich.DOM.Utils.Element.prototype.getId = function()
    {
    
        return this._id;
        
    };
    
    Lich.DOM.Utils.Element.prototype.getNode = function()
    {
    
        return this._node;
        
    };
        
    Lich.DOM.Utils.Element.prototype.getElement = function()
    {
    
        return this._element;
    
    }

    Lich.DOM.Utils.Element.prototype.addClass = function(Class)
    {
        
        this._element.classList.add(Class.trim());
        
    };
    
    Lich.DOM.Utils.Element.prototype.removeClass = function(Class)
    {
                
        this._element.classList.remove(Class.trim());
        
    };
            
    Lich.DOM.Utils.Element.prototype.onEvent = function(event,fn)
    {        
        this._event = {};
        this._event.type = event;
        this._event.calle = fn
        this._element.addEventListener(this._event.type,this._event.calle);
        
    };
    
    Lich.DOM.Utils.Element.prototype.animate = function(property,options,fn)
    {
        
        this._animation = this._element.animate(property,options)
        this._animation.onfinish = fn;
        
    };
    
    /*=====================================================*/
    /*=====================  CONTAINER  ===================*/
    /*=====================================================*/
    
    Lich.DOM.Utils.Container = function()
    {                
        
        Lich.DOM.Utils.Element.abstract(this);
        Lich.DOM.Utils.Element.call(this);
         
        this._childs = [];
                        
    }
    
    Lich.DOM.Utils.Container.extends(Lich.DOM.Utils.Element);
            
    Lich.DOM.Utils.Container.prototype.addChild = function(child)
    {
        
        this._element.appendChild(child._element);
        this._childs.push(child);
        
    };
    
    Lich.DOM.Utils.Container.prototype.getChild = function(number)
    {
    
        
        return this._childs[number]; 
    
    };
    
    Lich.DOM.Utils.Container.prototype.getAllChilds = function()
    {
    
        return this._childs;
        
    };
    
    /*=====================================================*/
    /*========================  TEXT  =====================*/
    /*=====================================================*/
    
    Lich.DOM.Utils.Text = function()
    {                
        
        Lich.DOM.Utils.Element.abstract(this);
        Lich.DOM.Utils.Element.call(this);
                
        this._text = null;
                        
    }
    
    Lich.DOM.Utils.Text.extends(Lich.DOM.Utils.Element);
        
    Lich.DOM.Utils.Text.prototype.setText = function(text)
    {
    
        this._text = text;
        this._element.innerHTML = this._text;
    
    };
    
    Lich.DOM.Utils.Text.prototype.getText = function()
    {
    
        return this._text;
        
    };

    /*=====================================================*/
    /*=====================  PARAGRAPH  ===================*/
    /*=====================================================*/
        
    Lich.DOM.Paragraph = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "p";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Paragraph.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*=====================  HEADING 1  ===================*/
    /*=====================================================*/
    
    Lich.DOM.Heading1 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h1";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Heading1.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*=====================  HEADING 2  ===================*/
    /*=====================================================*/
    
    Lich.DOM.Heading2 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h2";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Heading2.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*=====================  HEADING 3  ===================*/
    /*=====================================================*/
    
    Lich.DOM.Heading3 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h3";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Heading3.extends(Lich.DOM.Utils.Text);   
    
    /*=====================================================*/
    /*=====================  HEADING 4  ===================*/
    /*=====================================================*/
    
    Lich.DOM.Heading4 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h4";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Heading4.extends(Lich.DOM.Utils.Text);  
    
    /*=====================================================*/
    /*=====================  HEADING 5  ===================*/
    /*=====================================================*/
    
    Lich.DOM.Heading5 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h5";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Heading5.extends(Lich.DOM.Utils.Text);
    
    /*=====================================================*/
    /*=====================  HEADING 6  ===================*/
    /*=====================================================*/
    
    Lich.DOM.Heading6 = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "h6";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Heading6.extends(Lich.DOM.Utils.Text);
    
    /*=====================================================*/
    /*=====================  LINE BREAK  ==================*/
    /*=====================================================*/
    
    Lich.DOM.LineBreak = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "br";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.LineBreak.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*==================  PREFORMATED TEXT  ===============*/
    /*=====================================================*/
    
    Lich.DOM.PreformatedText = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "pre";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.PreformatedText.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*========================  BOLD  =====================*/
    /*=====================================================*/
    
    Lich.DOM.Bold = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "b";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Bold.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*=======================  STRONG  ====================*/
    /*=====================================================*/
    
    Lich.DOM.Strong = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "strong";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Strong.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*=======================  ITALIC  ====================*/
    /*=====================================================*/
    
    Lich.DOM.Italic = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "i";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Italic.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*=====================  EMPLATIZED  ==================*/
    /*=====================================================*/
    
    Lich.DOM.Emphatized = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "em";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Emphatized.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*=======================  SMALL  =====================*/
    /*=====================================================*/
    
    Lich.DOM.Small = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "small";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Small.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*=======================  MARK  ======================*/
    /*=====================================================*/
    
    Lich.DOM.Mark = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "mark";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Mark.extends(Lich.DOM.Utils.Text);
     
    /*=====================================================*/
    /*=====================  DELETED  =====================*/
    /*=====================================================*/
    
    Lich.DOM.Deleted = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "del";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Deleted.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*====================  INSERTED  =====================*/
    /*=====================================================*/
    
    Lich.DOM.Inserted = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "ins";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Inserted.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*===================  SUBSCRIPTED  ===================*/
    /*=====================================================*/
    
    Lich.DOM.Subscripted = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "sub";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Subscripted.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*==================  SUPERSCRIPTED  ==================*/
    /*=====================================================*/
    
    Lich.DOM.Superscripted = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "sup";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Superscripted.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*=======================  QUOTE  =====================*/
    /*=====================================================*/
    
    Lich.DOM.Quote = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "quote";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Quote.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*====================  BLOCKQUOTE  ===================*/
    /*=====================================================*/
    
    Lich.DOM.Blockquote = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "blockquote";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Blockquote.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*======================  ADDRESS  ====================*/
    /*=====================================================*/
    
    Lich.DOM.Address = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "address";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Address.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*========================  CITE  =====================*/
    /*=====================================================*/
    
    Lich.DOM.Cite = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "cite";
        this._element = Lich.Document.createElement(this._node);
        
                        
    }
    
    Lich.DOM.Cite.extends(Lich.DOM.Utils.Text);
        
    /*=====================================================*/
    /*====================  BiDirectional  ================*/
    /*=====================================================*/
    
    Lich.DOM.BiDirectional = function()
    {                
        
        Lich.DOM.Utils.Text.call(this);
                
        this._node = "bdo";
        this._inverted = true;
        this._element = Lich.Document.createElement(this._node);
        this.inverted(this._inverted);
        
                        
    }
    
    Lich.DOM.BiDirectional.extends(Lich.DOM.Utils.Text);
    
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
    
    /*=====================================================*/
    /*========================  LINK  =====================*/
    /*=====================================================*/
    
    Lich.DOM.Link = function()
    {                
        
        Lich.DOM.Utils.Container.call(this);
                
        this._node = "a";
        this._hypertextReference = null;
        this._target = null;
        this._element = Lich.Document.createElement(this._node);
        
    }
    
    Lich.DOM.Link.extends(Lich.DOM.Utils.Container);
    
    Lich.DOM.Link.prototype.setHypertextReference = function(hypertextReference)
    {
    
        this._hypertextReference = hypertextReference;
        this.setAttribute("href",this._hypertextReference);
    
    };
    
    Lich.DOM.Link.prototype.setTarget = function(target)
    {
    
        this._target = target;
        this.setAttribute("target",this._target);
    
    };
    
    /*=====================================================*/
    /*====================   DIVISION   ===================*/
    /*=====================================================*/
    
    Lich.DOM.Division = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "div";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Division.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*=====================   HEADER   ====================*/
    /*=====================================================*/
    
    Lich.DOM.Header = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "header";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Header.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*===================   NAVIGATION   ==================*/
    /*=====================================================*/
    
    Lich.DOM.Navigation  = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "nav";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Navigation.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*=====================   SECTION   ===================*/
    /*=====================================================*/
    
    Lich.DOM.Section  = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "section";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Section.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*=====================   ARTICLE   ===================*/
    /*=====================================================*/
    
    Lich.DOM.Article  = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "article";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Article.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*=====================   FOOTER   ====================*/
    /*=====================================================*/
    
    Lich.DOM.Footer  = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "footer";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Footer.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*=====================   CANVAS   ====================*/
    /*=====================================================*/
    
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
    
    Lich.DOM.Canvas.prototype.setWidth = function(width)
    {
        
        this._width = width;
        this.setAttribute("width",this._width);
        
    };
    
    Lich.DOM.Canvas.prototype.setHeight = function(height)
    {
        
        this._height = height;
        this.setAttribute("height",this._height);
        
    };
    
    Lich.DOM.Canvas.prototype.setSize = function(width,height)
    {
        
        this.setWidth(width);
        this.setHeight(height);
        
    };
    
    Lich.DOM.Canvas.prototype.getContext = function()
    {
    
        return this._context;
    
    };
        
    Lich.DOM.Canvas.prototype.moveTo = function(x,y)
    {
        
        this._context.moveTo(x,y);
        
    }
    
    Lich.DOM.Canvas.prototype.lineTo = function(x,y)
    {
        
        this._context.lineTo(x,y);
        
    }
    
    Lich.DOM.Canvas.prototype.stroke = function()
    {
        
        this._context.stroke();
        
    }
    
    Lich.DOM.Canvas.prototype.beginPath = function()
    {
        
        this._context.beginPath();
        
    }
    
    Lich.DOM.Canvas.prototype.arc = function(x,y,r,startingAngle,endingAngle,counterClockwise)
    {
        
        this._context.arc(x,y,r,startingAngle,endingAngle,counterClockwise);
        
    }
    
    Lich.DOM.Canvas.prototype.font = function(font)
    {
        
        this._context.font = font;
        
    }
    
    Lich.DOM.Canvas.prototype.fillText = function(x,y,text)
    {
        
        this._context.fillText(text,x,y);
        
    }
    
    Lich.DOM.Canvas.prototype.strokeText = function(x,y,text)
    {
        
        this._context.strokeText(text,x,y);
        
    }
    
    Lich.DOM.Canvas.prototype.createLinearGradient = function(x0,y0,x1,y1)
    {
    
        return this._context.createLinearGradient(x0,y0,x1,y1);
    
    }
    
    Lich.DOM.Canvas.prototype.createRadialGradient = function(x0,y0,r0,x1,y1,r1)
    {
        
        return this._context.createRadialGradient(x0,y0,r0,x1,y1,r1);
    
    }
    
    Lich.DOM.Canvas.prototype.addColorStop = function(stop,color)
    {
    
        this._context.addColorStop(stop,color);
    
    }
    
    Lich.DOM.Canvas.prototype.fillStyle = function(style)
    {
    
        this._context.fillStyle = style;
    
    }
    
    Lich.DOM.Canvas.prototype.fillRect = function(x,y,width,height)
    {
        
        this._context.fillRect(x,y,width,height);
        
    }
    
    Lich.DOM.Canvas.prototype.drawImage = function(x,y,url)
    {
        
        this._context.drawImage(url,x,y);
        
    }
    
    /*=====================================================*/
    /*======================   SPAN   =====================*/
    /*=====================================================*/
    
    Lich.DOM.Span = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "span";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Span.extends(Lich.DOM.Utils.Container);
       
    /*=====================================================*/
    /*=======================   CODE   ====================*/
    /*=====================================================*/
    
    Lich.DOM.Code = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "code";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Code.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*==================   KEYBOARD INPUT   ===============*/
    /*=====================================================*/
    
    Lich.DOM.KeyboardInput = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "kbd";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.KeyboardInput.extends(Lich.DOM.Utils.Text);
    
    /*=====================================================*/
    /*==================   SAMPLE OUTPUT   ================*/
    /*=====================================================*/
    
    Lich.DOM.SampleOutput = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "samp";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.SampleOutput.extends(Lich.DOM.Utils.Text);
    
    /*=====================================================*/
    /*=====================   VARIABLE   ==================*/
    /*=====================================================*/
    
    Lich.DOM.Variable = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "var";
        this._element = Lich.Document.createElement(this.getNode());
        
    }
    
    Lich.DOM.Variable.extends(Lich.DOM.Utils.Text);

    /*=====================================================*/
    /*========================  MAP  ======================*/
    /*=====================================================*/
    
    Lich.DOM.Map = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "map";
        this._name = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Map.extends(Lich.DOM.Utils.Container);
    
    Lich.DOM.Map.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    /*=====================================================*/
    /*======================  PICTURE  ====================*/
    /*=====================================================*/
    
    Lich.DOM.Picture = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "picture";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Picture.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*=======================  TABLE  =====================*/
    /*=====================================================*/
    
    Lich.DOM.Table = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "table";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Table.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*=======================  CAPTION  ===================*/
    /*=====================================================*/
    
    Lich.DOM.Caption = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "caption";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Caption.extends(Lich.DOM.Utils.Text);
    
    
    /*=====================================================*/
    /*=====================  TABLE HEAD  ==================*/
    /*=====================================================*/
    
    Lich.DOM.TableHead = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "th";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.TableHead.extends(Lich.DOM.Utils.Text);
    
    
    /*=====================================================*/
    /*=====================  TABLE ROW  ===================*/
    /*=====================================================*/
    
    Lich.DOM.TableRow = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "tr";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.TableRow.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*=====================  TABLE CELL  ==================*/
    /*=====================================================*/
    
    Lich.DOM.TableCell = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "td";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.TableCell.extends(Lich.DOM.Utils.Text);
    
    /*=====================================================*/
    /*===================  UNORDERED LIST  ================*/
    /*=====================================================*/
    
    Lich.DOM.UnorderedList = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "ul";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.UnorderedList.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*====================  ORDERED LIST  =================*/
    /*=====================================================*/

    Lich.DOM.OrderedList = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "ol";
        this._type = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.OrderedList.extends(Lich.DOM.Utils.Container);
    
    Lich.DOM.OrderedList.prototype.setType = function(type)
    {
    
        this._type = type;
        this.setAttribute("type",type);
    
    };
    
    /*=====================================================*/
    /*=====================  LIST ITEM  ===================*/
    /*=====================================================*/

    Lich.DOM.ListItem = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "li";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.ListItem.extends(Lich.DOM.Utils.Text);
    
    /*=====================================================*/
    /*==================  DEFINITION LIST  ================*/
    /*=====================================================*/
    
    Lich.DOM.DefinitionList = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "dl";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.DefinitionList.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*==================  DEFINITION TERM  ================*/
    /*=====================================================*/

    Lich.DOM.DefinitionTerm = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "dt";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.DefinitionTerm.extends(Lich.DOM.Utils.Text);
    
    /*=====================================================*/
    /*==============  DEFINITION DESCRIPTION  =============*/
    /*=====================================================*/

    Lich.DOM.DefinitionDescription = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "dd";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.DefinitionDescription.extends(Lich.DOM.Utils.Text);

    /*=====================================================*/
    /*=======================  IMAGE  =====================*/
    /*=====================================================*/
    
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
        
    Lich.DOM.Image.prototype.setSource = function(source)
    {
        
        this._source = source;
        this.setAttribute("src",this._source);
        
    };
    
    Lich.DOM.Image.prototype.setAlternateText = function(alternateText)
    {
        
        this._alternateText = alternateText;
        this.setAttribute("alt",this._alternateText);
        
    };
    
    Lich.DOM.Image.prototype.setWidth = function(width)
    {
        
        this._width = width;
        this.setAttribute("width",this._width);
        
    };
    
    Lich.DOM.Image.prototype.setHeight = function(height)
    {
        
        this._height = height;
        this.setAttribute("height",this._height);
        
    };
    
    Lich.DOM.Image.prototype.setSize = function(width,height)
    {
        
        this.setWidth(width);
        this.setHeight(height);
        
    };
    
    Lich.DOM.Image.prototype.setMap = function(map)
    {
        
        this._map = map;
        this.setAttribute("useMap",this._map);
    
    };

    /*=====================================================*/
    /*========================  AREA  =====================*/
    /*=====================================================*/
    
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
    
    Lich.DOM.Area.prototype.setShape = function(shape)
    {
    
        this._shape = shape;
        this.setAttribute("shape",this._shape);
    
    };
    
    Lich.DOM.Area.prototype.setCoordinates = function(coordinates)
    {
    
        this._coordinates = coordinates;
        this.setAttribute("coords",this._coordinates);
    
    };
    
    Lich.DOM.Area.prototype.setHypertextReference = function(hypertextReference)
    {
        
        this._hypertextReference = hypertextReference
        this.setAttribute("href",this._hypertextReference);
    
    };
    
    Lich.DOM.Area.prototype.setAlternateText = function(alternateText)
    {
        
        this._alternateText = alternateText;
        this.setAttribute("alt",this._alternateText);
        
    };
    
    /*=====================================================*/
    /*=======================  SOURCE  ====================*/
    /*=====================================================*/
    
    Lich.DOM.Source = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "source";
        this._media = null;
        this._sourceSet = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Source.extends(Lich.DOM.Utils.Element);
        
    Lich.DOM.Source.prototype.setMedia = function(media)
    {
        
        this._media = media;
        this.setAttribute("media",this._media);
        
    };
    
    Lich.DOM.Source.prototype.setSourceSet = function(sourceSet)
    {
    
        this._sourceSet = sourceSet;
        this.setAttribute("srcset",this._sourceSet);
    
    };
    
    /*=====================================================*/
    /*=======================  BUTTON  ====================*/
    /*=====================================================*/
    
    Lich.DOM.Button = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "button";
        this._type = "button";
        this._value = "button";
        this._element = Lich.Document.createElement(this.getNode());
        
        this.setType(this._type);
        this.setValue(this._value);
                
    }
    
    Lich.DOM.Button.extends(Lich.DOM.Utils.Element);
        
    Lich.DOM.Button.prototype.setType = function(type)
    {
        
        this._type = type;
        this.setAttribute("type",this._type);
        
    };
    
    Lich.DOM.Button.prototype.setValue = function(value)
    {
        
        this._value = value;
        this._element.innerHTML = this._value;
        
    };
    
    /*=====================================================*/
    /*===================   INLINE FRAME   ================*/
    /*=====================================================*/
    
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
    
    Lich.DOM.InlineFrame.prototype.setWidth = function(width)
    {
        
        this._width = width;
        this.setAttribute("width",this._width);
        
    };
    
    Lich.DOM.InlineFrame.prototype.setHeight = function(height)
    {
        
        this._height = height;
        this.setAttribute("height",this._height);
        
    };
    
    Lich.DOM.InlineFrame.prototype.setSize = function(width,height)
    {
        
        this.setWidth(width);
        this.setHeight(height);
        
    };
    
    Lich.DOM.InlineFrame.prototype.setSource = function(source)
    {
        
        this._source = source;
        this.setAttribute("source",this._source);
        
        
    };
    
    Lich.DOM.InlineFrame.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    /*=====================================================*/
    /*=======================   FORM   ====================*/
    /*=====================================================*/
    
    Lich.DOM.Form = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "form";
        this._action = null;
        this._method = null;
        this._autocomplete = null;
        this._novalidate = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Form.extends(Lich.DOM.Utils.Container);
    
    Lich.DOM.Form.prototype.setAction = function(action)
    {
    
        this._action = action;
        this.setAttribute("type",this._action);
    
    };
    
    Lich.DOM.Form.prototype.setMethod = function(method)
    {
    
        this._method = method;
        this.setAttribute("type",this.method);
    
    };
    
    Lich.DOM.Form.prototype.autoComplete = function(boolean)
    {
    
        this._autocomplete = boolean;
        this.setAttribute("autocomplete",this._autocomplete);
    
    };
    
    Lich.DOM.Form.prototype.noValidate = function(boolean)
    {
    
        this._novalidate = boolean;
        this.setAttribute("novalidate",this._novalidate);
    
    };
        
    /*=====================================================*/
    /*======================   INPUT   ====================*/
    /*=====================================================*/
    
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
    
    Lich.DOM.Input.prototype.setType = function(type)
    {
    
        this._type = type;
        this.setAttribute("type",this._type);
    
    }
    
    Lich.DOM.Input.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    Lich.DOM.Input.prototype.setValue = function(value)
    {
        
        this._value = value;
        this.setAttribute("value",this._value);
        
    };
    
    Lich.DOM.Input.prototype.setList = function(list)
    {
        
        this._list = list;
        this.setAttribute("list",this._list);
        
    };
    
    Lich.DOM.Input.prototype.setMinimun = function(minimum)
    {
    
        this._minimum = minimum;
        this.setAttribute("min",this._list);
    
    }
    
    Lich.DOM.Input.prototype.setMaximum = function(maximum)
    {
    
        this._maximum = maximum;
        this.setAttribute("max",this._list);
    
    }
    
    Lich.DOM.Input.prototype.setForm = function(form)
    {
    
        this._form = form;
        this.setAttribute("form",this._form);
    
    };
    
    Lich.DOM.Input.prototype.setFormAction = function(formAction)
    {
    
        this._formAction = formAction;
        this.setAttribute("formaction",this._formAction);
    
    };
    
    Lich.DOM.Input.prototype.setFormEncodeType = function(formEncodeType)
    {
    
        this._formEncodeType = formEncodeType;
        this.setAttribute("formaction",this._formEncodeType);
    
    };
    
    Lich.DOM.Input.prototype.setFormMethod = function(formMethod)
    {
    
        this._formMethod = formMethod;
        this.setAttribute("formaction",this._formMethod);
    
    };
        
    Lich.DOM.Input.prototype.setFormTarget = function(formTarget)
    {
        
        this._formTarget = formTarget;
        this.setAttribute("formtarget",this._formTarget);
    
    };
    
    Lich.DOM.Input.prototype.setWidth = function(width)
    {
        
        this._width = width;
        this.setAttribute("width",this._width);
        
    };
    
    Lich.DOM.Input.prototype.setHeight = function(height)
    {
        
        this._height = height;
        this.setAttribute("height",this._height);
        
    };
    
    Lich.DOM.Input.prototype.setSize = function(width,height)
    {
        
        this.setWidth(width);
        this.setHeight(height);
        
    };
    
    Lich.DOM.Input.prototype.setStep = function(step)
    {
    
        this._step = step;
        this.setAttribute("step",this._step);
    
    };
    
    Lich.DOM.Input.prototype.setMaxLength = function(maxLength)
    {
    
        this._maxLength = maxLength;
        this.setAttribute("maxLength",this._maxLength);
    
    };
    
    
    Lich.DOM.Input.prototype.setPattern = function(pattern)
    {
        
        this._pattern = pattern;
        this.setAttribute("pattern",this._pattern);
        
    };    
    
    Lich.DOM.Input.prototype.setTitle = function(title)
    {
        
        this._title = title;
        this.setAttribute("title",this._title);
    
    };
    
    Lich.DOM.Input.prototype.setPlaceholder = function(placeholder)
    {
        
        this._placeholder = placeHolder;
        this.setAttribute("placeholder",this._placeholder);
    
    };
    
    Lich.DOM.Input.prototype.checked = function()
    {
        
        this.setAttribute("checked",true);
        
    };
    
    Lich.DOM.Input.prototype.required = function(boolean)
    {
    
        this._required = boolean;
        this.setAttribute("required",this._required);
    
    };
    
    Lich.DOM.Input.prototype.readonly = function(boolean)
    {
    
        this._readonly = boolean;
        this.setAttribute("readonly",this._readonly);
    
    };
    
    Lich.DOM.Input.prototype.disabled = function(boolean)
    {
    
        this._disabled = boolean;
        this.setAttribute("disabled",this._disabled);
    
    };
    
    Lich.DOM.Input.prototype.autofocus = function(autofocus)
    {
    
        this._autofocus = autofocus;
        this.setAttribute("disabled",this._autofocus);
    
    };
    
    Lich.DOM.Input.prototype.noValidate = function(boolean)
    {
    
        this._noValidate = boolean;
        this.setAttribute("formnovalidate",this._noValidate);
    
    };
    
    Lich.DOM.Input.prototype.multiple = function(boolean)
    {
    
        this._multiple = boolean;
        this.setAttribute("multiple",this._multiple);
    
    };
    
    /*=====================================================*/
    /*====================   FIELDSET   ===================*/
    /*=====================================================*/
    
    Lich.DOM.Fieldset = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "fieldset";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Fieldset.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*=====================   LEGEND   ====================*/
    /*=====================================================*/
    
    Lich.DOM.Legend = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "legend";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Legend.extends(Lich.DOM.Utils.Text);
    
    /*=====================================================*/
    /*=====================   SELECT   ====================*/
    /*=====================================================*/
    
    Lich.DOM.Select = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "select";
        this._name = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Select.extends(Lich.DOM.Utils.Container);
    
    Lich.DOM.Select.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    /*=====================================================*/
    /*=====================   OPTION   ====================*/
    /*=====================================================*/
    
    Lich.DOM.Option = function()
    {
        
        Lich.DOM.Utils.Text.call(this);
        
        this._node = "option";
        this._value = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Option.extends(Lich.DOM.Utils.Text);
    
    Lich.DOM.Option.prototype.setValue = function(value)
    {
        
        this._value = value;
        this.setAttribute("value",this._value);
        
    };
    
    Lich.DOM.Option.prototype.selected = function()
    {
        
        this.setAttribute("selected",true);
        
    };
    
    /*=====================================================*/
    /*====================   TEXT AREA   ==================*/
    /*=====================================================*/
    
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
    
    Lich.DOM.TextArea.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    Lich.DOM.TextArea.prototype.setRows = function(rows)
    {
    
        this._rows = rows;
        this.setAttribute("rows",this._rows);
    
    };
    
    Lich.DOM.TextArea.prototype.setColumns = function(columns)
    {
    
        this._columns = columns;
        this.setAttribute("rows",this._columns);
    
    };
    
    /*=====================================================*/
    /*=====================   DATALIST   ==================*/
    /*=====================================================*/
    
    Lich.DOM.Datalist = function()
    {
        
        Lich.DOM.Utils.Container.call(this);
        
        this._node = "datalist";
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Datalist.extends(Lich.DOM.Utils.Container);
    
    /*=====================================================*/
    /*=====================   KEYGEN   ====================*/
    /*=====================================================*/
    
    Lich.DOM.Keygen = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "keygen";
        this._name = false;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Keygen.extends(Lich.DOM.Utils.Element);
    
    Lich.DOM.Keygen.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    /*=====================================================*/
    /*=====================   OUTPUT   ====================*/
    /*=====================================================*/
    
    Lich.DOM.Output = function()
    {
        
        Lich.DOM.Utils.Element.call(this);
        
        this._node = "output";
        this._name = null;
        this._for = null;
        this._element = Lich.Document.createElement(this.getNode());
                
    }
    
    Lich.DOM.Output.extends(Lich.DOM.Utils.Element);
    
    Lich.DOM.Output.prototype.setName = function(name)
    {
    
        this._name = name;
        this.setAttribute("name",this._name);
    
    };
    
    Lich.DOM.Output.prototype.setFor = function(For)
    {
    
        this._for = For;
        this.setAttribute("for",this._for);
    
    };
    
    /*=====================================================*/
    /*===============   CANVAS OBJECT MODEL   =============*/
    /*=====================================================*/
    /*
    Lich.COM = {};
    Lich.COM.Utils = {};
    */
    /*=====================================================*/
    /*====================   GRAPHICS   ===================*/
    /*=====================================================*/
    /*
    Lich.COM.Utils.Graphics = function()
    {
        
        Lich.DOM.Utils.Graphics.abstract(this);
        this._type = null;
        
    };
    */      
    /*=====================================================*/
    /*======================   LINE   =====================*/
    /*=====================================================*/
    /*
    Lich.COM.Line = function()
    {
        
        Lich.COM.Utils.Graphics.call(this);
        this._type = "line";
    
    }
    
    Lich.COM.Line.extends(Lich.COM.Utils.Graphics);
    */
    
}());