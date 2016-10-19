import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 4, minPrimitives: 12, levelName: 'Level11'
  });
  if (!base) {
    return;
  }
  base.checkSegment('target1a', -0.5, 0);
  base.checkSegment('target2a', -0.5, 0);
  base.checkSegment('target3a', -0.5, 0);
  base.checkSegment('target4a', -0.5, 0);
  base.checkSegment('target1b', 0.5, 0);
  base.checkSegment('target2b', 0.5, 0);
  base.checkSegment('target3b', 0.5, 0);
  base.checkSegment('target4b', 0.5, 0);

  if (base.drawn('target1a') || base.drawn('target1b') || base.drawn('target2a') ||
    base.drawn('target2b') || base.drawn('target3a') || base.drawn('target3b') ||
    base.drawn('target4a') || base.drawn('target4b')) {
    Command('progress = 50');
  }

  base.levelCompleted(
    (base.drawn('target1a') && base.drawn('target1b')) ||
    (base.drawn('target2a') && base.drawn('target2b')) ||
    (base.drawn('target3a') && base.drawn('target3b')) ||
    (base.drawn('target4a') && base.drawn('target4b')), 4);
}