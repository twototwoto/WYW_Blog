
##### self.class 和 super.class
```objc
Son *son = [[Son alloc] init];
```
```objc
#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface Father : NSObject

- (void)func;

@end

NS_ASSUME_NONNULL_END


```

```objc
#import "Father.h"

@implementation Father

- (instancetype)init {
    self = [super init];
    if (self) {
        NSLog(@"Father：%s-Line:%d: self.class：%@", __FUNCTION__, __LINE__, self.class); // Father：-[Father init]-Line:15: self.class：Son
        NSLog(@"Father：%s-Line:%d: super.class：%@", __FUNCTION__, __LINE__, super.class); // Father：-[Father init]-Line:16: super.class：Son
        
        NSLog(@"Father：%s-Line:%d: %@", __FUNCTION__, __LINE__, @"Father func 前");
        [self func]; // Son：-[Son func]-Line:27: Son
        NSLog(@"Father：%s-Line:%d: %@", __FUNCTION__, __LINE__, @"Father func 后\n");
    }
    return self;
}

- (void)func {
    NSLog(@"Father：%s-Line:%d: %@", __FUNCTION__, __LINE__, self.class);
}

@end
```

```objc
#import "Father.h"

NS_ASSUME_NONNULL_BEGIN

@interface Son : Father

@end

NS_ASSUME_NONNULL_END
```

```objc
#import "Son.h"

@implementation Son

- (instancetype)init {
    self = [super init];
    if (self) {
        NSLog(@"Son：%s-Line:%d: self.class：%@", __FUNCTION__, __LINE__, self.class); // Son：-[Son init]-Line:15: self.class：Son
        NSLog(@"Son：%s-Line:%d: super.class：%@", __FUNCTION__, __LINE__, super.class); // Son：-[Son init]-Line:16: super.class：Son
        
        NSLog(@"Son：%s-Line:%d: %@", __FUNCTION__, __LINE__, @"Son self super func 前");
        [self func]; // Son：-[Son func]-Line:24: Son
        [super func]; // Father：-[Father func]-Line:23: Son
        NSLog(@"Son：%s-Line:%d: %@", __FUNCTION__, __LINE__, @"Son self super func 后");
    }
    return self;
}

- (void)func {
    NSLog(@"Son：%s-Line:%d: %@", __FUNCTION__, __LINE__, self.class);
}

@end
```

##### dispatch_barrier_sync和dispatch_sync
- [https://www.jianshu.com/p/814e51e2e8e5](https://www.jianshu.com/p/814e51e2e8e5)
