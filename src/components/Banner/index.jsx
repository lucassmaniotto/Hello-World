import { useTranslation } from "react-i18next";
import { BannerContainer, BannerText, BannerImage } from "./styles";

import { GENERAL_IMAGES } from "../../assets/images/Images";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <BannerContainer>
      <BannerText>
        <h1>{t("banner-title")}</h1>
        <p>{t("banner-text")}</p>
      </BannerText>
      <BannerImage>
        <img
          className="colored-circle"
          src={GENERAL_IMAGES.circle}
          aria-hidden="true"
          alt="Círculo colorido atrás da foto"
        />
        <img
          className="photo"
          src="https://github.com/lucassmaniotto.png"
          alt="Foto de Lucas Smaniotto Schuch"
        />
      </BannerImage>
    </BannerContainer>
  );
}
