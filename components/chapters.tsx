import { PainPoints, Treatments, CareMethod, Testimonials, FAQ, ContactDetails } from './conversion-chapters';
import { ResultGallery } from './result-gallery';
import { ExperienceStatement } from './experience-statement';
import { AuthorChapter } from './author-chapter';
export function Chapters() { return <>
  <PainPoints/><Treatments/><ResultGallery/><CareMethod/><Testimonials/><FAQ/>
  <ExperienceStatement/><AuthorChapter/><ContactDetails/>
</>; }
