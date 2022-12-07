import { Button, Field, Form, Input } from './StickerForm.styled';

export const StickerForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { img, label } = event.target.elements;
    onSubmit(img.value, label.value);
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        Image url
        <Input name="img" />
      </Field>
      <Field>
        Label text
        <Input name="label" />
      </Field>
      <Button>Add sticker</Button>
    </Form>
  );
};
