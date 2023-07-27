import { TechBadgeWrapper, TechBadgeIcon, TechBadgeName } from './styles';

export default function TechBadge({ name, icon }) {
  return (
    <TechBadgeWrapper>
      <TechBadgeIcon src={icon} alt={name} />
      <TechBadgeName>{name}</TechBadgeName>
    </TechBadgeWrapper>
  );
}
