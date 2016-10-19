import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 4, minPrimitives: 4, levelName: 'Level1'
  });
  if (!base) {
    return;
  }
  base.checkObject('pointtop', -0.4, 0.3);
  base.checkObject('pointbottom', -0.4, -0.3);
  base.checkSegment('segmentLB', -1.1, 0);
  base.checkSegment('segmentRB', 0, 0);
  base.checkSegment('segmentLT', -1.1, 0);
  base.checkSegment('segmentRT', 0, 0);

  if (base.drawn('pointtop') || base.drawn('pointbottom')) {
    Command('progress = 33');
  }
  if (base.drawn('segmentLT') || base.drawn('segmentLB') || base.drawn('segmentRB') || base.drawn('segmentRT')) {
    Command('progress = 66');
  }
  base.levelCompleted((base.drawn('segmentLT') && base.drawn('segmentRT')) ||
    (base.drawn('segmentLB') && base.drawn('segmentRB')), 4);
}