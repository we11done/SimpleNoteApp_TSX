import React, { useState } from 'react';
import Button from '../../components/Button';

type NewMemoProps = {
  handleClickSave(input: string): void;
};

const NewMemo = ({ handleClickSave }: NewMemoProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setValue(e.currentTarget.value);

  return (
    <>
      <form>
        <textarea
          style={{
            width: '97%',
            height: '100px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            padding: '10px',
          }}
          placeholder='Type your content here...'
          onChange={handleChange}
          value={value}
        />
      </form>
      <Button to='/memo'>Back</Button>
      <Button
        onClick={() => {
          handleClickSave(value);
        }}
      >
        Save
      </Button>
    </>
  );
};

export default NewMemo;
