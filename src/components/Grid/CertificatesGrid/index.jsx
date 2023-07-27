import React from 'react';

import certificates from 'json/certificates.json';

import CoursesContainer from '../../UI/shared/Grid/CoursesContainer';
import CardAncor from '../../Card/CardAncor';

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
