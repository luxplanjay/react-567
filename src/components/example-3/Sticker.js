import { CardWrapper, Image, Label } from 'components/Sticker.styled';

export const Sticker = ({ sticker: { img, label } }) => {
  return (
    <CardWrapper>
      <Image src={img} alt={label} />
      <Label>{label}</Label>
    </CardWrapper>
  );
};
