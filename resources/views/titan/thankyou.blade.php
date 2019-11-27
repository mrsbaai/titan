<html lang="en"><head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="titan/style.css" rel="stylesheet">
<link href="titan/reel.css" rel="stylesheet">
<link href="titan/css.css" rel="stylesheet">
   
<div class="mod success-page">
    <div class="container">
        <h2 class="success-page__title">!شكرا لطلبك هذا المنتج/h2>

        
            <p class="success-page__message_success">.سنقوم بالرد على طلبك قريبًا، المرجو الاحتفاظ بهاتفك على وضع التشغيل</p>

            <h3 class="success-page__text">:يرجى التحقق من معلومات الاتصال الخاصة بك</h3>

            <div class="list-info">
                <ul class="list-info__list">
                    <li class="list-info__item">
                        <span class="list-info__text">:الاسم</span>
                        {{$name}}
                    </li>
                    <li class="list-info__item">
                        <span class="list-info__text">:رقم الهاتف</span>
                        {{$phone}}
                    </li>
                </ul>
            </div>

            <p class="success-page__message_fail">
                <a class="success-page__message_fail__link" href="javascript:history.back()">
                    If you made a mistake, go back and fill the form again.
                </a>
            </p>
            <h3 class="success-page__text">Please enter required information.</h3>

            <form class="success-page__form" onsubmit="return false;" _lpchecked="1">
                <span class="success-page__form__error" id="error_mail"></span>

                <div class="success-page__form__container">
                    <div><input name="email" placeholder="email" class="success-page__form__input"></div>
                    
                        <div><input name="address" placeholder="address" class="success-page__form__input">
                        </div>
                    
                    <input type="hidden" name="order_id" value="12727471" class="success-page__form__input">
                    <a class="success-page__form__button" href="#">Send</a>
                </div>

            </form>
        
    </div>
</div>
