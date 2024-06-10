import drm from '$content/projects/drm.yaml';
import recherchestation from '$content/projects/recherchestation.yaml';
import dialogmuseum from '$content/projects/dialogmuseum.yaml';
import kvwl from '$content/projects/kvwl.yaml';
import fhg from '$content/projects/fhg.yaml';

import metronome from '$content/projects/metronome.yaml';
import sloepaul from '$content/projects/sloepaul.yaml';

import onoffWebApp from '$content/projects/onoff-web-app.yaml';
import onoffChromeExtension from '$content/projects/onoff-chrome-extension.yaml';

const projects = [
  fhg,
  drm,
  recherchestation,
  dialogmuseum,
  kvwl,
  metronome,
  sloepaul,
  onoffWebApp,
  onoffChromeExtension
];

const projectsSorted = [...projects].sort((projectA, projectB) => {
  return projectB.date.valueOf() - projectA.date.valueOf();
});

export default projectsSorted;
