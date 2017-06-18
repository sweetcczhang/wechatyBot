/**
 * Created by zcc on 17-5-15.
 */

const {Wechaty, Room}=require('wechaty');

const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'111111',
    port:'3306',
    database: 'chatydb'
});
var sql = 'SELECT * FROM wechaty_chat where content=?';
connection.connect();

Wechaty.instance()
    .on('scan',(url,code)=>{
        let loginUrl = url.replace('qrcode','l');
        require('qrcode-terminal').generate(loginUrl);
        console.log(url);
    })

    .on('login',user=>{
        console.log(`${user} login`);
    })

    .on('friend',function (contact,request) {
        if (request){
            request.accept().then(function () {
                console.log(`Contact:${contact.name()} send request ${request.hello}`)
            })
        }
    })

    .on('message',function (m) {
        const contact = m.from();
        const content = m.content();
        const  room = m.room();
        if (room){
            console.log(`Room:${room.topic()} Contact: ${contact.name()} Content:${content}`);
        }else {
            console.log(`Contact:${contact.name()} Content:${content}`);
        }

        if (m.self()){
            return;
        }

        if(/hello/.test(content)){
            m.say("hello how are you!");
        }

        //var sql = 'SELECT * FROM chatword where id=?';
        var sqlparams=[content,]
        connection.query(sql,sqlparams,function (err,result) {
            if (err){
                //connection.end();
                return;
            }
             if (result.length>0){
                for(var i=0; i<result.length;i++){
                    Room.find({topic:result[i].keyroom}).then(function (keyroom) {
                                if (keyroom){
                                    keyroom.add(contact).then(function () {
                                        keyroom.say("welcome",contact);
                                    })
                                }
                            })
                }
             }
            console.log(result.length);
           // connection.end();

        });
        // if(/room/.test(content)){
        //     Room.find({topic:"test"}).then(function (keyroom) {
        //         if (keyroom){
        //             keyroom.add(contact).then(function () {
        //                 keyroom.say("welcome",contact);
        //             })
        //         }
        //     })
        // }

        if (/out/.test(content)){
            Room.find({topic:"test"}).then(function (keyroom) {
                if(keyroom){
                    keyroom.del(contact).then(function () {
                        keyroom.say("Remove from the room",contact);
                    })
                }
            })
        }

    })
    .init()