import React from 'react';
import * as S from './styles';

function Text({
  children,
  as,
}) {
  return (
    <S.Tittle as={as}>
      {children}
    </S.Tittle>
  );
}

export default Text;
