## 即时租赁

> 线上flutter重构版本

### packages

> 分包，针对pages的分包，分包加载，同时配置了wifi预加载模式，打开app更快。是针对二级页面设置

### pages

> 主要的一级入口页面，比如首页，登录，我的等等，其中，`index.vue`是整个项目的入口文件

### serve

> 前端请求后端的接口文件，按照业务来分文件。举个栗子：

- `login.ts`登录的接口
- `my.ts`我的接口
- `supplier`供应商相关接口
- ...

### static

> 静态资源文件夹，比如图片等等

### types

> 所有的`TS`类型约束放置的文件夹。其中`common.ts`为公用的类型约束。`pages`文件夹为功能模块的页面约束，每个功能一个文件。比如`login.ts`就是登录功能的约束。

### utils

> 工具类文件夹

- `reg.ts`正则表达式
- `request.ts`请求接口的封装
- `storage.ts`缓存的封装
- `index.ts`主要工具文件
- `enum.ts`枚举文件
- ...