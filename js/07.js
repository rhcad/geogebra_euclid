import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 3, minPrimitives: 6, levelName: 'Level7'
  });
  if (!base) {
    return;
  }
  base.checkObject('targetPoint', 0.3, 0.3);
  base.checkDirection('segmentAC', 0, 0);
  base.checkSegment('segmentCD', 0, 0);
  base.checkDirection('segmentBD', 0, 0);
  base.checkObject('lineParAB', 0.5, 0);
  base.checkDirection('targetsegment', 0, 0);

  base.levelCompleted((base.drawn('targetPoint') && base.drawn('targetsegment') ) || base.drawn('segmentCD'), 3);
}