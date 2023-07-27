import React from 'react';

import qualifications from 'json/qualifications.json';

import CoursesContainer from 'components/UI/shared/Grid/CoursesContainer';
import CardAncor from '../../Card/CardAncor';

export default function QualificationsGrid() {
  return (
    <CoursesContainer qualifications={qualifications}>
      {qualifications.map((qualification) => (
        <CardAncor
          key={qualification.id}
          title={qualification.title}
          paragraph={qualification.paragraph}
          date={qualification.date}
          link={qualification.link}
          icon={qualification.icon}
        />
      ))}
    </CoursesContainer>
  );
}
