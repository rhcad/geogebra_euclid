import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 4, minPrimitives: 5, levelName: 'Level19'
  });
  if (!base) {
    return;
  }
  base.checkObject('target1');
  base.checkObject('target2a');
  base.checkObject('target2b');

  base.levelCompleted(base.drawn('target1') && (base.drawn('target2a') || base.drawn('target2b')), 4);
}