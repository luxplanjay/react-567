import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 1px solid #2a2a2a;
  padding: 8px;
  border-radius: 4px;
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
  margin-top: 8px;
  margin-bottom: 0;
  color: #2a2a2a;
`;
