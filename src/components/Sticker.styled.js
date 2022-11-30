import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 2px solid #2a2a2a;
  padding: 8px;
  width: 140px;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    border-style: dashed;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const Label = styled.p`
  margin-bottom: 0;
  color: #2a2a2a;
`;
