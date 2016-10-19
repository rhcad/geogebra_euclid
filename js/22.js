import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 6, minPrimitives: 10, levelName: 'Level22'
  });
  if (!base) {
    return;
  }
  base.checkObject('pointC', -0.5, 0.5);
  base.checkObject('pointLT', 0.2, 0);
  base.checkObject('pointR', 0.2, 0);
  base.checkObject('pointRT', 1, 0);
  base.checkObject('pointLT', -1.2, 0);
  base.checkObject('pointL', -1.2, 0);
  base.checkSegment('segmentLB');
  base.checkSegment('segmentRB');
  base.checkSegment('segmentLT');
  base.checkSegment('segmentRT');
  base.checkSegment('segmentT');

  var count = base.drawn('segmentLT') + base.drawn('segmentRT') +
    base.drawn('segmentLB') + base.drawn('segmentRB') + base.drawn('segmentT');

  if (base.drawn('pointC')) {
    Command('progress = 10');
  }
  if (count > 0 && count < 5) {
    Command('progress = ' + (20 * count));
  }
  base.levelCompleted(count === 5, 6);
}