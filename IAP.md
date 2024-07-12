- [iOS内购二:购买和恢复](https://blog.csdn.net/u014084081/article/details/108404868)

- https://support.apple.com/zh-cn/HT204530

- [八、<iOS IAP>内购之恢复购买记录](https://www.jianshu.com/p/5d92fb42aae8)

- [苹果内购（IAP）从入门到精通（4）- 订阅、续订、退订、恢复订阅](https://juejin.cn/post/7050041490080268319)

- [ios内购——因缺少“恢复购买”功能被拒解决方案](https://www.vinchin.com/blog/vinchin-technique-share-details.html?id=22443)

- [iOS内购IAP（十） —— 编程指南之恢复购买的产品（一）](https://www.jianshu.com/p/4cbbea03f24f)


#### 内购相关文档

- [App 内购买项目](https://developer.apple.com/cn/in-app-purchase/)

- [内购订阅审核状态](https://developer.apple.com/help/app-store-connect/reference/in-app-purchase-localization-statuses)

- [促销内购商品](https://developer.apple.com/app-store/promoting-in-app-purchases/)


##### 关于审核

- 1、内购需要有游客身份的购买：[关于In-App Purchase(内购)的注意事项](https://www.cnblogs.com/ITCoderW/p/8403787.html)
  - 拒审的理由一般包含：Guideline 5.1.1 - Legal - Data Collection and Storage We noticed that your app requires users to register with personal information to purchase in-app purchase products that are not account based. Apps cannot require user registration prior to allowing access to app content and features that are not associated specifically to the user. User registration that requires the sharing of personal information must be optional or tied to account-specific functionality.
  - 目前有类似功能的产品有爱奇艺，有的产品没有类似功能或者是因为有 Apple 登录选项，或者可能是因为有开关控制。
  - 页面一般会提示出“游客身份开通会员或订阅产品 (限当前设备使用)”
- 2、内购页面需要包含的元素
  - 需要凸显购买 VIP 的权益
  - 对于订阅类的产品需要说明之后的以多少钱续费，可随时取消。
  - 需要包含付费会员协议并注明自动续费条款情况
  - 最好在苹果开发者后台也注明购买或订阅详情信息，具体的可参考同有会员的 App
  - 拒审的理由一般包含：Guideline 3.1.2 - Business - Payments - Subscriptions. Price of subscription, and price per unit if appropriate. Functional links to the privacy policy and Terms of Use (EULA).

- 3、没有促销相关功能时，不要在苹果开发者后台配置相应的促销信息。如果配置了相关信息，可以在拒审后移除相关信息。

  - 拒审的理由一般包含：Guideline 2.3.2 - Performance - Accurate Metadata. Your promotional image is the same as your app's icon. You submitted duplicate or identical promotional images for different promoted in-app purchase products.
  - [促销内购商品](https://developer.apple.com/app-store/promoting-in-app-purchases/)

- 4、审核使用的预览图上不能包含 debug 标识信息

  - 拒审的理由一般包含：Guideline 2.3.10 - Performance - Accurate Metadata. We noticed your submission includes irrelevant references to your app's development process. your screenshots include debug banners. Since apps on the App Store should be ready for users, they should not include references to the development process.
