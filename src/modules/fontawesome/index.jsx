import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';

const setupFontAwesome = () => {
  // Import and add icons here.
  library.add(faGraduationCap, faBriefcase, faCode);
};

export default setupFontAwesome;
