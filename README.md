# node-login

 ### 前言

 > 之前也写过 node，使用的express和mysql写的项目，记得当时情况是因为自己将数据不能返回给就放弃了一段时间，之后便没有碰过那个项目。直到这个项目才又写 node。

#### 功能

  + 注册
  + 登录
  + 列表

#### 技术栈

  + [Koa](https://github.com/koajs/koa)
  + [Koa-router](https://github.com/alexmingoia/koa-router)
  + [mongoose](https://github.com/Automattic/mongoose)
  + [Jwt](https://github.com/auth0/node-jsonwebtoken)
  + [Koa中间件]()

#### 本地运行

 > 第一步

  ````cmd
    git clone git@github.com:Surile/node-login.git
  ````

  > 第二步

  ````cmd
    cd node-login
    npm install || yarn
  ````

  > 第三步

  ````cmd
    npm start || yarn start
  ````

#### 后期准备

  + 部署项目上线（已完成）
    + 部署在阿里云服务器
    + api 接口：[http://api.surile.cn/v1](http://api.surile.cn/v1)
  + pm2支持 es6
  + 部署 HTTPS 证书

####  前端项目

  > 对接 api 接口，使用的是 vue 框架。[前端项目](https://github.com/Surile/vue-login/tree/master)
