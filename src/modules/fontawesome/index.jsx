import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, faBriefcase, faCode, faCog, faTerminal, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';

const setupFontAwesome = () => {
  // Import and add icons here.
  library.add(faGraduationCap, faBriefcase, faCode, faCog, faTerminal, faConnectdevelop, faWrench);
};

export default setupFontAwesome;
