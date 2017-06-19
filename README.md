# wechatyBot
![image](https://raw.githubusercontent.com/chatie/wechaty/master/image/wechaty-logo-en.png)
use web config the keywords and chatroom name.

# Get started

- wechaty get startd please read this [guide](https://github.com/chatie/wechaty#getting-started)
- Django get started please read this [guide](http://www.runoob.com/django/django-tutorial.html)

- run the chatybob and web use your own databases.
 
 in mybot.js
 ```
 var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'111111',
    port:'3306',
    database: 'chatydb'
});
 ```
 int wechatyWeb/sttings.py
 ```
 DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'chatydb',
        'USER': 'root',
        'PASSWORD': '111111',
        'HOST': '127.0.0.1',
        'POST': '3306',
    }
}
 ```
run the chatybot and web
```
cd wechatyBot
node mybot.js
python manage.py runserver 0.0.0.0:8000
```

# Result
![image](https://github.com/sweetcczhang/wechatyBot/blob/master/picture/3.png)
![image](https://github.com/sweetcczhang/wechatyBot/blob/master/picture/4.png)
![image](https://github.com/sweetcczhang/wechatyBot/blob/master/picture/2.jpg)
![image](https://github.com/sweetcczhang/wechatyBot/blob/master/picture/1.jpg)



