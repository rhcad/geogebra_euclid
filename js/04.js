import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 3, minPrimitives: 3, levelName: 'Level4'
  });
  if (!base) {
    return;
  }
  base.checkDirection('segmentPerp', -0.4, 0.3);
  base.checkPointOnTarget('segmentPerp', -0.4, 0.3);
  base.checkPointOnTarget('segmentA', -0.4, -0.3);

  if (base.drawn('psegmentA')) {
    Command('progress = 10');
  }
  if (base.drawn('psegmentPerp')) {
    Command('progress = 50');
  }
  base.levelCompleted(base.drawn('segmentPerp'), 3);
}