
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
console.log('Safari reqs disabled');
//throw new Error('subscribe requests exit') ;
}else{

function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}
                                
//3.6.8
var messaging = null;
var pushw_worker_version='1.2';
var scr = document.createElement('script');
scr.src = 'https://www.gstatic.com/firebasejs/3.6.8/firebase.js';
scr.onload = function(){
// firebase_subscribe.js
var pushwru_tokenServerID = 'sender_782694752340';
var pushwru_server_url = '';

var popup_shown = false;

var idle_timer = 0;


var pushw_params = (typeof get_params == 'function')  ? get_params() : {};;

//var pushw_worker = new Worker('https://al3.just-news.pro/pushw-worker.js');
//pushw_worker.onmessage =  on_worker_command;

window.pushwru_popup_close = function ()
{
    if (typeof pushwru_setCookie == 'function')
    {
    pushwru_setCookie('pushwru_shown','yes',{path:'/'});
    }
    //var p = document.getElementById('pushwru-popup');
    var p = document.getElementById('pushw_popup_container');
    if (!p) { return; };
    var n = Math.random()*100000;
    var newid = 'pushwru-'+n;
    p.setAttribute('id',newid);
    p.className += ' pushw-unvis';
    setTimeout(function() { 
        var p = document.getElementById(newid);
       document.body.removeChild(p); 
            },1000);
    //p.innerHTML='';
    popup_shown = true;
}



firebase.initializeApp({
    messagingSenderId: '782694752340'
});

messaging  = firebase.messaging();











window.pushwru_param = function (object) {
    var encodedString = '';
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (encodedString.length > 0) {
                encodedString += '&';
            }
            encodedString += prop + '=' + encodeURIComponent(object[prop]);
        }
    }
    return encodedString;
}

window.pushwru_update_data_object = function ()
{
    if (typeof get_params == 'function')  { pushw_params=get_params() ; }}

// отправка ID на сервер
 window.pushwru_sendTokenToServer = function(currentToken, oncomplete) {
    var prevToken = pushwru_getTokenSentToServer() ;
    if ( currentToken != prevToken ) {

        if (typeof pushwru_http_subscribed == 'function')
        {
            //pushru_http_subscribed();
            window.top.postMessage ( { command: 'save_token', token:currentToken, site_option: 0 }, '*');
        }

        console.log('Sending token to server...');

        var url = 'https://al3.just-news.pro/save_push_token.php'; // адрес скрипта на сервере который сохраняет ID устройства

        pushwru_update_data_object();

	if (typeof pushw_get_x_params == 'function')
	{
	    var pp = pushw_get_x_params();
	    for (n in pp)
	    {
		if (typeof pushw_params != 'object' && typeof pushw_params != 'Object')
		{
		    pushw_params = {};
		}
	        pushw_params[n] = pp[n];
	    }
	}
//	pushw_params.GPAY = g_GPAYSTATUS ;
        var xhr = new XMLHttpRequest();
        var fdata = {
            token: currentToken,
            prevToken: prevToken,
            sender_id:'782694752340',
            site_option:'0',
            data: JSON.stringify(pushw_params),
            server_url:'https://ma-lucky.titan-man.info',
            from_url:'https://ma-lucky.titan-man.info/azBnGHOkqo/S52CT3iv9eb2FdI/?clickid=dviei11u6i5ol1sqhn0p991i&esub=-7EBRQCgQAAHNGZkMVAwO3IANoIDMYifYBAQ8AAg-t8NFdEQ0aEQ0iEQ1CEQ1aA01BB25sMX9hZGNvbWJv_zhaWEcwdDBFAAN6dQ&rid=-7EBNQCgQAAHBDFQMABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx&site_option=0',
            worker_version:pushw_worker_version
	};


        xhr.addEventListener('readystatechange', function(){
            if(this.readyState==4){
                if (typeof oncomplete == 'function'){
                    oncomplete();
                }
            }
        });

        xhr.open('POST',encodeURI(url),true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(pushwru_param(fdata));

        pushwru_setTokenSentToServer(currentToken);
    } else {
        console.log('This token already sent to server.');
    }
}



// отправка ID на сервер
window.pushwru_RegisterAskToServer = function () {
        console.log('Registering permission request ...');
        var url = 'https://al3.just-news.pro/register_push_request.php'; // адрес скрипта на сервере который сохраняет ID устройства

	pushwru_update_data_object();
        var xhr = new XMLHttpRequest();
        var fdata = {
            sender_id:'782694752340',
            site_option: '0',
            data: JSON.stringify(pushw_params),
            server_url:'https://ma-lucky.titan-man.info',
            from_url:'https://ma-lucky.titan-man.info/azBnGHOkqo/S52CT3iv9eb2FdI/?clickid=dviei11u6i5ol1sqhn0p991i&esub=-7EBRQCgQAAHNGZkMVAwO3IANoIDMYifYBAQ8AAg-t8NFdEQ0aEQ0iEQ1CEQ1aA01BB25sMX9hZGNvbWJv_zhaWEcwdDBFAAN6dQ&rid=-7EBNQCgQAAHBDFQMABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx&site_option=0'
	};
        xhr.open('POST',encodeURI(url),true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(pushwru_param(fdata));

}


// отправка ID на сервер
window.pushwru_RegisterViewToServer = function () {
        console.log('Registering view request ...');
        var url = 'https://al3.just-news.pro/register_view_request.php'; // адрес скрипта на сервере который сохраняет ID устройства

	pushwru_update_data_object();
        var xhr = new XMLHttpRequest();
        var fdata = {
            sender_id:'782694752340',
            site_option: '0',
            data: JSON.stringify(pushw_params),
            server_url:'https://ma-lucky.titan-man.info',
            from_url:'https://ma-lucky.titan-man.info/azBnGHOkqo/S52CT3iv9eb2FdI/?clickid=dviei11u6i5ol1sqhn0p991i&esub=-7EBRQCgQAAHNGZkMVAwO3IANoIDMYifYBAQ8AAg-t8NFdEQ0aEQ0iEQ1CEQ1aA01BB25sMX9hZGNvbWJv_zhaWEcwdDBFAAN6dQ&rid=-7EBNQCgQAAHBDFQMABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx&site_option=0'
	};
        xhr.open('POST',encodeURI(url),true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(pushwru_param(fdata));

}
setTimeout(function() {
    pushwru_RegisterViewToServer();
},500);

window.pushwru_subscribed = function()
{
    if ('Notification' in window) {
        var messaging = firebase.messaging();
        if (Notification.permission === 'granted') {
            var t = window.localStorage.getItem('pushwru_sentFirebaseMessagingToken');
            return t.length > 0;
        }
    }
    return false;
}

window.pushwru_push_update = function ( params )
{
    if (!pushwru_subscribed()) { 
        
        return; 
    };
    var url = 'https://al3.just-news.pro/update_push_data.php'; // адрес скрипта на сервере который сохраняет ID устройства


    var xhr = new XMLHttpRequest();
    var fdata = {
        token: window.localStorage.getItem('pushwru_sentFirebaseMessagingToken'),
        sender_id:'782694752340',
        server_url:'https://ma-lucky.titan-man.info',
        from_url:'https://ma-lucky.titan-man.info/azBnGHOkqo/S52CT3iv9eb2FdI/?clickid=dviei11u6i5ol1sqhn0p991i&esub=-7EBRQCgQAAHNGZkMVAwO3IANoIDMYifYBAQ8AAg-t8NFdEQ0aEQ0iEQ1CEQ1aA01BB25sMX9hZGNvbWJv_zhaWEcwdDBFAAN6dQ&rid=-7EBNQCgQAAHBDFQMABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx&site_option=0',
        data: JSON.stringify(params)
    };

    
    xhr.open('POST',encodeURI(url),true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(pushwru_param(fdata));

    
}





window.pushwru_isTokenSentToServer = function (currentToken) {
    return window.localStorage.getItem('pushwru_sentFirebaseMessagingToken') == currentToken;
}

window.pushwru_getTokenSentToServer = function () {
    return window.localStorage.getItem('pushwru_sentFirebaseMessagingToken') ;
}

window.pushwru_setTokenSentToServer = function (currentToken) {
    window.localStorage.setItem(
        'pushwru_sentFirebaseMessagingToken',
        currentToken ? currentToken : ''
    );
    pushwru_setThisSenderKnown( currentToken ? true : false );
}

 window.pushwru_setThisSenderKnown = function(v)
{
    window.localStorage.setItem(
        pushwru_tokenServerID,
        v ? 'Yes' : ''
    );
}

window.pushwru_isThisSenderKnown = function ()
{
    return window.localStorage.getItem(pushwru_tokenServerID+server_url)=='Yes';
}

window.pushwru_removeSubscribeButton = function ()
{
}

window.pushwru_subscribe = function () {

    if (typeof messaging == 'undefined')
    {
        messaging = firebase.messaging();
    }
    
    if (typeof pushru_on_before_request == 'function')
    {
        pushru_on_before_request(  );
    }

    messaging.requestPermission()
        .then(function () {
            // получаем ID устройства

        console.log( ' selected = '+ Notification.permission );
        
              
                if (Notification.permission != 'granted')
                {
                    setTimeout(function() { pushwru_popup_close(); },10);
                    return;
                }       
        

            if (typeof pushru_on_before_subscribe == 'function')
            {
                pushru_on_before_subscribe(  );
            }

                        
            pushwru_popup_close();
            messaging.getToken()
                .then(function (currentToken) {
                    console.log(currentToken);

                    if (currentToken) {
                        console.warn('Token received - ', currentToken);
                        pushwru_sendTokenToServer(currentToken, function(){
                        });
                        setTimeout( function(){
                	    if (typeof pushru_on_subscribed == 'function')
                	    {
                	        pushru_on_subscribed( currentToken ? true : false );
                	    }
                            if (typeof pushru_http_subscribed == 'function')
                            {
                                pushru_http_subscribed();
                            }
                        },100);
                    } else {
                        console.warn('Failed to get token.');
                        pushwru_setTokenSentToServer(false);
                    }
                    pushwru_removeSubscribeButton();
                })
                .catch(function (err) {
                    pushwru_removeSubscribeButton();
                    console.warn('Error happened when receiving token.', err);
                    pushwru_setTokenSentToServer(false);
                    if (typeof pushru_on_subscribe_fail == 'function')
                    {
                        pushru_on_subscribe_fail(  );
                    }
                   // removeSubscribeButton();
                    if (typeof pushru_http_subscribed == 'function')
                    {
                        pushru_http_subscribed();
                    }
                });
                })
    .catch(function (err) {
        console.log( ' selected = '+ Notification.permission );
                console.warn('Failed to get permission for notifications.', err);
        pushwru_popup_close();
        pushwru_removeSubscribeButton();
        if (typeof pushru_on_subscribe_deny == 'function')
        {
            pushru_on_subscribe_deny(  );
        }
    });
}


window.pushwru_show_subscribe = function(block)
{
    if (typeof block == 'undefined') { block = false; };
    pushwru_RegisterAskToServer();
        pushwru_subscribe();
    }


if ('Notification' in window) {
    messaging = firebase.messaging();
    if (Notification.permission === 'granted') {
                pushwru_subscribe();
    }
    else if (Notification.permission === 'default') {
        console.log ( 'default, ask' );


    }   // if (Notification.permission === 'default')
    else {

                pushwru_removeSubscribeButton();
    }
}   //  if ('Notification' in window)

}


document.head.appendChild(scr);


}//end safari check
// Execution time 0.0002598762512207
