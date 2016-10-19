import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 2, minPrimitives: 4, levelName: 'Level8'
  });
  if (!base) {
    return;
  }
  base.checkObject('targetpoint', 0.3, 0.5);
  base.checkSegment('targetsegment', 0.3, 0.5);

  if (base.drawn('targetpoint')) {
    Command('progress = 50');
  }
  base.levelCompleted(base.drawn('targetsegment'), 2);
}