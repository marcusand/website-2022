import drm from '$content/home/projects/drm.yaml';
import recherchestation from '$content/home/projects/recherchestation.yaml';
import dialogmuseum from '$content/home/projects/dialogmuseum.yaml';
import kvwl from '$content/home/projects/kvwl.yaml';
import fhg from '$content/home/projects/fhg.yaml';

import metronome from '$content/home/projects/metronome.yaml';
import sloepaul from '$content/home/projects/sloepaul.yaml';

import onoffWebApp from '$content/home/projects/onoff-web-app.yaml';
import onoffChromeExtension from '$content/home/projects/onoff-chrome-extension.yaml';

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
