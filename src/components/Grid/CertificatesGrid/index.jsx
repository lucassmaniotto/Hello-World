import CardAncor from '../../Card/CardAncor';

import certificates from 'json/certificates.json'

import { CoursesContainer } from 'components/UI/shared/Grid/CoursesContainer';

export default function CertificatesGrid() {
  return (
    <CoursesContainer certificates={certificates}>
      {certificates.map((certificate) => (
        <CardAncor
          key={certificate.id}
          title={certificate.title}
          paragraph={certificate.paragraph}
          date={certificate.date}
          link={certificate.link}
          icon={certificate.icon}
        />
      ))}
    </CoursesContainer>
  );
}
