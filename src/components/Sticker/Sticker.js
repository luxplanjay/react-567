import { CardWrapper, Image, Label } from './Sticker.styled';

export const Sticker = ({ sticker: { id, img, label }, onDelete }) => {
  return (
    <CardWrapper>
      <Image src={img} alt={label} />
      <Label>{label}</Label>
      <button onClick={() => onDelete(id)}>Удалить свинью</button>
    </CardWrapper>
  );
};
