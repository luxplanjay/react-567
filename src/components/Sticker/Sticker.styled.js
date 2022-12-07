import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 1px solid #2a2a2a;
  padding: 8px;
  border-radius: 4px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const Label = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  color: #2a2a2a;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: lightgray;
  border: none;
  cursor: pointer;

  :hover {
    background-color: coral;
  }
`;
