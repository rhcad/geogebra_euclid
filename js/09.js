import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 2, minPrimitives: 5, levelName: 'Level9'
  });
  if (!base) {
    return;
  }
  base.checkObject('targetcircle');
  base.checkSegment('targetsegment', 0.3, -0.5);

  if (base.drawn('targetsegment')) {
    Command('progress = 50');
  }
  base.levelCompleted(base.drawn('targetcircle'), 2);
}