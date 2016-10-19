// 引入尺规作图模块
import "euclid.js";

// 初始化尺规作图模块，监听新画的图形
function ggbOnInit() {
  euclidInit('newObjectListener');
}

// 新画图形的监听函数
function newObjectListener(obj) {
  // 检查新画图形：第3关，最少步数为3，简单工具最少步数4
  var eu = euclidNewObjectListener(obj, {
    levelName: 'Level3', minSteps: 3, minPrimitives: 4
  });
  // 新图形不用于作图则不继续检查
  if (!eu) {
    return;
  }

  // 检查新点是否在角平分线段 bisect 上
  eu.checkPointOnTarget('bisect', 0.5, 0);
  // 检查新点是否在角边 a 上
  eu.checkPointOnTarget('a', -0.3, 0.3);
  // 检查新点是否在角边 b 上
  eu.checkPointOnTarget('b', -0.3, 0.3);

  // 检查新线段或射线是否与角平分线段 bisect 共线且同向
  eu.checkDirection('bisect', -1, 0);

  // 有新点在角边或角平分线段上则显示进度文字
  eu.setProgress(eu.drawn('pa') + eu.drawn('pb') + 5 * eu.drawn('pbisect'));
  // 新线段或射线是否与角平分线段 bisect 共线且同向，则过关
  eu.levelCompleted(eu.drawn('bisect'));
}