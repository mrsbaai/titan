
// Request from 'https://mor26.titan-man.me/azKwaYNyGm/0cOI5WPcOZeQI4M/?clickid=d88l3d9jbfeu4u0rhdcuo73g&esub=-7EBRQCgQAAHNGZkMVAwO3IAMeZDPX3PYBAAMPLZLaXRENGhENIhENQhENWgNPMQdubDF_YWRjb21ib_9wd3R3NjJ3NwADalc&rid=-7EBNQCgQAAHBDFQMABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx&site_option=0'
var pushw_worker_version='1.2';


function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}
                                



if ('Notification' in window) {

var useIFRAME = true ;
var PUSHWRU_IFRAME = null;


var pushw_site_option = (typeof getOption == 'function')  ? getOption() : { site_option: 5 };;

function get_site_option_url()
{
    var oo = new Array();
        var opts = '';
    var rndopt = '5';
    if (pushw_site_option.hasOwnProperty('site_option'))
    {
        if (pushw_site_option.site_option < 0)
        {
	    pushw_site_option.site_option = rndopt ;
        }
        oo[oo.length] = 'site_option='+pushw_site_option.site_option;
        for (n in pushw_site_option)
        {
            if (n == 'site_option') { continue; };
            oo[oo.length] = 'site_option-'+n+'='+pushw_site_option[n];
        }
        if (oo.length > 0)
        {
            opts = ''+oo.join('&');
        }
    }
    return opts;
}


    pushw_worker_version = '1.2';
    
    useIFRAME = false;
    var scr = document.createElement('script');
    var opts = get_site_option_url();
    
    if (opts.length > 0)
    {
            opts = '&'+opts;
        }
    var g_popupcodeloaded = false ;
    scr.src = 'https://al3.just-news.pro/firebase_subscribe1.php?worker_version='+pushw_worker_version+'&data_callback=get_params&call_byfunc=1&from_url=https%3A%2F%2Fmor26.titan-man.me%2FazKwaYNyGm%2F0cOI5WPcOZeQI4M%2F%3Fclickid%3Dd88l3d9jbfeu4u0rhdcuo73g%26esub%3D-7EBRQCgQAAHNGZkMVAwO3IAMeZDPX3PYBAAMPLZLaXRENGhENIhENQhENWgNPMQdubDF_YWRjb21ib_9wd3R3NjJ3NwADalc%26rid%3D-7EBNQCgQAAHBDFQMABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx%26site_option%3D0&from_server=https%3A%2F%2Fmor26.titan-man.me'+opts;
    scr.onload=function(){g_popupcodeloaded=true;}
    document.head.appendChild(scr);

    
    




if (useIFRAME)
{

var pushwru_tokenServerID = 'sender_782694752340';
var pushw_params = (typeof get_params == 'function')  ? get_params() : {};;



function pushwru_setTokenSentToServer(currentToken) {
    window.localStorage.setItem(
        'pushwru_sentFirebaseMessagingToken',
        currentToken ? currentToken : ''
    );
}
function pushwru_isTokenSentToServer(currentToken) {
    return window.localStorage.getItem('pushwru_sentFirebaseMessagingToken') == currentToken;
}
function pushwru_subscribed()
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
function pushwru_param(object) {
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
function pushwru_update_data_object()
{
    if (typeof get_params == 'function')  { pushwru_params=get_params() ; }}
// отправка ID на сервер
function pushwru_sendTokenToServer(currentToken, oncomplete) {
    if (!pushwru_isTokenSentToServer(currentToken)) {

        console.log('Отправка токена на сервер...');

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


        var xhr = new XMLHttpRequest();
        var fdata = {
            token: currentToken,
            sender_id:'782694752340',
            data: JSON.stringify(pushw_params),
            server_url:'https://mor26.titan-man.me',
            from_url:'https://mor26.titan-man.me/azKwaYNyGm/0cOI5WPcOZeQI4M/?clickid=d88l3d9jbfeu4u0rhdcuo73g&esub=-7EBRQCgQAAHNGZkMVAwO3IAMeZDPX3PYBAAMPLZLaXRENGhENIhENQhENWgNPMQdubDF_YWRjb21ib_9wd3R3NjJ3NwADalc&rid=-7EBNQCgQAAHBDFQMABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx&site_option=0',
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
        console.log('Токен уже отправлен на сервер.');
    }
}

var PUSHWRU_FOR = '';


function pushwru_init_iframe(forx, onload)
{
    PUSHWRU_FOR = typeof forx == 'string' ? forx : '';
    var opts = get_site_option_url();
    if (opts.length > 0)
    {
        opts = '?'+opts;
    }
    else
    {
    }
    var iframetxt = '<iframe id="pushwru-subscription" src="https://al3.just-news.pro/iframe.php'+opts+'" style=" width: 1px; height: 1px; border: 0 none; display: block; position: fixed; top: -2px; left: -2px; z-index:99999;"></iframe>';
    document.body.insertAdjacentHTML(`beforeEnd`, iframetxt);
    PUSHWRU_IFRAME = document.getElementById(`pushwru-subscription`);
    PUSHWRU_IFRAME.addEventListener('load',function(e){
        if (typeof onload == 'function')
        {
            onload(e);
        }
    });
}

function pushwru_update_site_option(onload)
{
        pushwru_site_option = getOption();
        pushwru_init_iframe('',onload);
}

var PUSHWRU_CHANNEL = null; 

var WILL_ASK = true ;

self.addEventListener('load',function(){
    pushwru_init_iframe();
    setTimeout(function(){  if (WILL_ASK) {  PUSHWRU_IFRAME.contentWindow.postMessage('show_popup','*')  }; },2000);
    
})

function pushru_remove_iframe()
{
    if (PUSHWRU_IFRAME)
    {
        PUSHWRU_IFRAME.parentNode.removeChild(PUSHWRU_IFRAME);
        PUSHWRU_IFRAME = null;
    }
}

// Вешаем обработчик

window.addEventListener('message', pushwru_handleMessage);

function pushwru_handleMessage(e)
{
    var data = e.data;
    var cmd = '';
    if (typeof data == 'object')
    {
        cmd = data.command;
    }
    else
    {
        cmd = data;
    }
    console.log ( "Got message: "+cmd);
    switch (cmd)
    {
        case 'send_token':
            pushwru_sendTokenToServer(data.token, '');
        break;
        case `on_subscribe_show`:
	    if (PUSHWRU_IFRAME) {
            PUSHWRU_IFRAME.style.width='100%';
            PUSHWRU_IFRAME.style.height='100%';
            PUSHWRU_IFRAME.style.display='block';
	    }
        break;
        case 'on_subscribe_hide':
	    if (PUSHWRU_IFRAME) {
            PUSHWRU_IFRAME.style.width='0px';
            PUSHWRU_IFRAME.style.height='0px';
	    }
        break;
        case 'before_subscribe':
        break;
        case 'updated':
            if (PUSHWRU_FOR == 'update')
            {
            pushru_remove_iframe();
            }
        break;
        case 'subscribed':
            pushwru_sendTokenToServer(data.token, '');
        case 'already_granted':
            WILL_ASK = false;
            if (PUSHWRU_FOR == '')
            {
            pushru_remove_iframe();
            }
            pushwru_clear_ask();
        break;
        case 'subscribe_error':
        case 'already_denied':
            WILL_ASK = false;
            pushwru_clear_ask();
        break;
        
    }
}

function pushwru_push_update( params )
{
    pushwru_update_data_object;
    if (!PUSHWRU_IFRAME)
    {
        pushwru_init_iframe('update', function() {
            PUSHWRU_IFRAME.contentWindow.postMessage({ command: 'update', params },'*');;
        });
    }
    else
    {
        PUSHWRU_IFRAME.contentWindow.postMessage({ command: 'update', params },'*');
    }
}

function on_before_pushwru_show()
{
    
}

function pushwru_clear_ask()
{
    }








}   //  if IFRAME



function pushwru_show( hard )
{
    if (useIFRAME)
    {
    if (!PUSHWRU_IFRAME)
    {
	pushwru_init_iframe('',function(){ 
	    PUSHWRU_IFRAME.contentWindow.postMessage('show_popup','*') ;
	});
    }
    else
    {
    PUSHWRU_IFRAME.contentWindow.postMessage('show_popup','*') ;
    } ;
    }
    else
    {
	var pwtimer = setInterval(function(){ 
	    try {
	    pushwru_show_subscribe(hard); 
	    clearInterval(pwtimer);
	    } catch(e) {};
	},100 );
    }
}

} //    if Notification not suported - do nothing
// Execution time 0.00018501281738281
