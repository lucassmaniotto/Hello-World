import { CardAncorContainer, CardAncorIcon, CardAncorTitle  } from './styles';

export default function CardAncor({ title, paragraph, date, link, icon }) {
  return (
    <CardAncorContainer 
      href={link}
    >
      <CardAncorIcon
        src={icon}
        alt={title}
      />
      <CardAncorTitle>{title}</CardAncorTitle>
      <p>{paragraph}</p>
      <p>{date}</p>
    </CardAncorContainer>
  )
}