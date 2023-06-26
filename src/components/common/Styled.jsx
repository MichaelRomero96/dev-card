import styled from 'styled-components';
import theme from '../../theme';

const { fontSize } = theme;

const setHTMLElement = (fontSize) => {
  const fontSizeRule = `font-size: ${fontSize}px;`;
  switch (fontSize) {
    case fontSize < 29:
      return styled.p`
        ${fontSizeRule}
      `;
    case fontSize < 44:
      return styled.h2`
        ${fontSizeRule}
      `;
    default:
      return styled.h1`
        ${fontSizeRule}
      `;
  }
};

const Text = setHTMLElement(fontSize);

export default { Text };
