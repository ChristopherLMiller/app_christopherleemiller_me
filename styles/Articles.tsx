import styled from 'styled-components';
import { Props } from './Themes';

const StyledArticle = styled.article`
  background: var(--background-light);
  color: black;
  font-family: var(--font-family);
  max-width: ${(props: Props) => props.theme.max_width};
  margin: 0 auto 50px auto;
  transition-delay: 2s;
  transition: all 0.25s;
  opacity: 1;

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    margin: 0 auto 100px auto;
    :first-of-type {
      margin-top: 50px;
    }
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    margin: 0 auto 100px auto;
  }
`;

export { StyledArticle };
