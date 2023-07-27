import {
  PageModelContainer,
  PageModelPhotoCover,
  PageModelTitle,
  PageModelContent,
} from './styles';

export default function PagesModel({ children, photoCover, title }) {
  return (
    <PageModelContainer>
      <PageModelPhotoCover style={{ backgroundImage: `url(${photoCover})` }} />
      <PageModelTitle>{title}</PageModelTitle>
      <PageModelContent>{children}</PageModelContent>
    </PageModelContainer>
  );
}
