# wechatyBot
![image](https://raw.githubusercontent.com/chatie/wechaty/master/image/wechaty-logo-en.png)
use web config the keywords and chatroom name.

功能：使用web界面配置入群的关键词，以及所入的群名
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
![image](https://github.com/sweetcczhang/wechatyBot/blob/master/picture/3.png)
![image](https://github.com/sweetcczhang/wechatyBot/blob/master/picture/4.png)

# Result
- 功能：使用web界面配置入群的关键词，以及所入的群名
- 如：
  
  关键词：hi                   群名：同步群2      
  
  发送关键词hi会把该联系人拉到同步群2群里。
  
  关键词：helloword            群名：wechaty     
  
  发送关键词helloword把该联系人拉到wechaty群里。
  
<div align="center">
<a target="_blank" href=" "><img src="https://github.com/sweetcczhang/wechatyBot/blob/master/picture/2.jpg?raw=true" border=0 width="30%"></a>
<a target="_blank" href=" "><img src="https://github.com/sweetcczhang/wechatyBot/blob/master/picture/1.jpg?raw=true" border=0 width="30%"></a>
</div>



