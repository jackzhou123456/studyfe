var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/zhiHuDaily', function (req, res, next) {
    res.json({
        err_no: 0,
        result: [
            {
                id: 1,
                title: "战争面前，现代文明社会就像是「剃刀上的蜗牛」",
                imageUrl: "1.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 2,
                title: "李嘉诚的 66 年，一部香港的商业史",
                imageUrl: "2.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 3,
                title: "趁肯德基 0 元 bug 狂下单的人，别偷笑了，商家是可以不作数的",
                imageUrl: "3.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 4,
                title: "它是生命力最顽强的生物，在太空真空状态下待 12 天都不会死亡",
                imageUrl: "4.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 5,
                title: "宝推出特价版，矛头直指拼多多，「宝推出特价版，矛头直指拼多多，「",
                imageUrl: "5.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 6,
                title: "宝推出特价版，矛头直指拼多多，「",
                imageUrl: "6.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 7,
                title: "周围人都在焦虑，我却一点感觉也没有，好焦虑啊",
                imageUrl: "7.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 8,
                title: "和女朋友逛街，碰见比我高大的店员，我就忍不住花钱.....",
                imageUrl: "8.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 9,
                title: "宝推出特价版，矛头直指拼多多，「打多办」终于还是出手了",
                imageUrl: "9.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 10,
                title: "战争面前，现代文明社会就像是「剃刀上的蜗牛」",
                imageUrl: "10.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 11,
                title: "战争面前，现代文明社会就像是「剃刀上的蜗牛」",
                imageUrl: "1.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 12,
                title: "李嘉诚的 66 年，一部香港的商业史",
                imageUrl: "2.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 13,
                title: "趁肯德基 0 元 bug 狂下单的人，别偷笑了，商家是可以不作数的",
                imageUrl: "3.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 14,
                title: "它是生命力最顽强的生物，在太空真空状态下待 12 天都不会死亡",
                imageUrl: "4.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 15,
                title: "宝推出特价版，矛头直指拼多多，「宝推出特价版，矛头直指拼多多，「",
                imageUrl: "5.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 16,
                title: "宝推出特价版，矛头直指拼多多，「宝推出特价版，矛头直指拼多多，「",
                imageUrl: "6.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 17,
                title: "周围人都在焦虑，我却一点感觉也没有，好焦虑啊",
                imageUrl: "7.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 18,
                title: "和女朋友逛街，碰见比我高大的店员，我就忍不住花钱.....",
                imageUrl: "8.jpeg",
                link: "http://baidu.com"
            },
            {
                id: 19,
                title: "宝推出特价版，矛头直指拼多多，「打多办」终于还是出手了",
                imageUrl: "9.jpeg",
                link: "http://baidu.com"
            },
        ]
    })
});


router.post('/login', function (req, res, next) {
    if (req.body.user_name === "zhouliang" && req.body.password === '123456') {
        res.josn({
            err_no: 0,
            result: {
                userName: "Jack ZHou",
                gender: "男",
                age: 24,
                avatar: 'http://www.uimaker.com/templets/uim/images/weibo.gif',
                role: 1
            }
        })
    }
    else {
        res.json({
            err_no: 1,
            err_msg: '用户名或密码错误！'
        })
    }
})
module.exports = router;
