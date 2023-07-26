import { useTranslation } from "react-i18next";
import PagesModel from "components/PagesModel";
import TecnologiesGrid from "components/Grid/TecnologiesGrid";
import CertificatesGrid from "components/Grid/CertificatesGrid";

import {
  AboutMePhoto,
  AboutMeSubTitle,
  AboutMeText,
  AboutMeAncor,
} from "./styles";

import photoCover from "assets/about_me_cover.jpg";
import photoAboutMe from "assets/about_me_photo.jpg";
import QualificationsGrid from "components/Grid/QualificationsGrid";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
      <PagesModel photoCover={photoCover} title={t("about-title").toString()}>
        <section>
          <AboutMeSubTitle>{t("about-subtitle")}</AboutMeSubTitle>
          <AboutMePhoto
            src={photoAboutMe}
            alt="Foto de Lucas Smaniotto Schuch"
          />
          <AboutMeText>{t("about-paragraph-1")}</AboutMeText>
          <AboutMeText>
            {t("about-paragraph-2")}{" "}
            <AboutMeAncor href="https://cc.uffs.edu.br/">
              Universidade Federal da Fronteira Sul (UFFS)
            </AboutMeAncor>{" "}
            {t("about-paragraph-3")}{" "}
            <AboutMeAncor href="https://www.udemy.com/">Udemy</AboutMeAncor>,{" "}
            <AboutMeAncor href="https://www.alura.com.br/">Alura</AboutMeAncor>,{" "}
            <AboutMeAncor href="https://www.coursera.org/">
              Coursera...
            </AboutMeAncor>
          </AboutMeText>
          <AboutMeText>{t("about-paragraph-4")}</AboutMeText>
          <AboutMeText>{t("about-paragraph-5")}</AboutMeText>
        </section>
        <AboutMeText>{t("about-paragraph-6")}</AboutMeText>
        <AboutMeText>
          {t("about-paragraph-7")}{" "}
          <AboutMeAncor href="https://open.spotify.com/user/22gktbankxa4r3eaxarfxdzgi">
            Lucas Smaniotto
          </AboutMeAncor>
          ).
        </AboutMeText>
        <AboutMeText>
          {t("about-paragraph-8")}{" "}
          <AboutMeAncor href="mailto:lucas91755@gmail.com">
            lucas91755@gmail.com
          </AboutMeAncor>{" "}
          {t("about-paragraph-9")}{" "}
          <AboutMeAncor href="mailto:lucas.schuch@estudante.uffs.edu.br">
            lucas.schuch@estudante.uffs.edu.br
          </AboutMeAncor>
          .
        </AboutMeText>
        <AboutMeText>{t("about-paragraph-10")}</AboutMeText>
        <section>
          <AboutMeSubTitle>{t("about-section-tech")}</AboutMeSubTitle>
          <TecnologiesGrid />
        </section>
        <section>
          <AboutMeSubTitle>{t("about-section-qualifications")}</AboutMeSubTitle>
          <QualificationsGrid />
          <AboutMeSubTitle>{t("about-section-certificates")}</AboutMeSubTitle>
          <CertificatesGrid />
        </section>
      </PagesModel>
    </>
  );
}
