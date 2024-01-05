import { useTranslation } from 'react-i18next';
import PagesModel from '../../components/PagesModel';
import TecnologiesGrid from '../../components/Grid/TecnologiesGrid';
import CardCertificates from '../../components/Grid/CardCertificates';

import qualifications from '../../json/qualifications.json';
import certificates from '../../json/certificates.json';

import IMAGES from '../../assets/images/Images';

import {
  AboutMePhoto,
  AboutMeSubTitle,
  AboutMeText,
  AboutMeAncor,
} from './styles';

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <PagesModel photoCover={IMAGES.aboutMeCover} title={t('about-title').toString()}>
      <section>
        <AboutMeSubTitle>{t('about-subtitle')}</AboutMeSubTitle>
        <AboutMePhoto src={IMAGES.aboutMePhoto} alt="Foto de Lucas Smaniotto Schuch" />
        <AboutMeText>{t('about-paragraph-1')}</AboutMeText>
        <AboutMeText>
          {t('about-paragraph-2')}{' '}
          <AboutMeAncor href="https://cc.uffs.edu.br/">
            Universidade Federal da Fronteira Sul (UFFS)
          </AboutMeAncor>{' '}
          {t('about-paragraph-3')}{' '}
          <AboutMeAncor href="https://www.udemy.com/">Udemy</AboutMeAncor>,{' '}
          <AboutMeAncor href="https://www.alura.com.br/">Alura</AboutMeAncor>,{' '}
          <AboutMeAncor href="https://www.coursera.org/">
            Coursera...
          </AboutMeAncor>
        </AboutMeText>
        <AboutMeText>{t('about-paragraph-4')}</AboutMeText>
        <AboutMeText>{t('about-paragraph-5')}</AboutMeText>
      </section>
      <AboutMeText>{t('about-paragraph-6')}</AboutMeText>
      <AboutMeText>
        {t('about-paragraph-7')}{' '}
        <AboutMeAncor href="https://open.spotify.com/user/22gktbankxa4r3eaxarfxdzgi">
          Lucas Smaniotto
        </AboutMeAncor>
        ).
      </AboutMeText>
      <AboutMeText>
        {t('about-paragraph-8')}{' '}
        <AboutMeAncor href="mailto:lucas91755@gmail.com">
          lucas91755@gmail.com
        </AboutMeAncor>{' '}
        {t('about-paragraph-9')}{' '}
        <AboutMeAncor href="mailto:lucas.schuch@estudante.uffs.edu.br">
          lucas.schuch@estudante.uffs.edu.br
        </AboutMeAncor>
        .
      </AboutMeText>
      <AboutMeText>{t('about-paragraph-10')}</AboutMeText>
      <section>
        <AboutMeSubTitle>{t('about-section-tech')}</AboutMeSubTitle>
        <TecnologiesGrid />
      </section>
      <section id="certificates-section">
        <AboutMeSubTitle>{t('about-section-qualifications')}</AboutMeSubTitle>
        <CardCertificates
          json={qualifications}
          searchPlaceholder={t('about-section-qualifications-search-placeholder')}
          defaultOption={t('about-section-qualifications-default-option')}
        />
        <AboutMeSubTitle>{t('about-section-certificates')}</AboutMeSubTitle>
        <CardCertificates
          json={certificates}
          searchPlaceholder={t('about-section-certificates-search-placeholder')}
          defaultOption={t('about-section-certificates-default-option')}
        />
      </section>
    </PagesModel>
  );
}
