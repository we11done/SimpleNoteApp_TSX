import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { addMemo } from '../../apis';
import Button from '../../components/Button';

const NewMemo = () => {
  const [value, setValue] = useState<string>('');
  const [saved, setSaved] = useState<boolean>(false);

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setValue(e.currentTarget.value);

  const handleClickSave = () => {
    const content = value.trim();
    if (!content) return;
    addMemo({ content });
    setSaved(true);
  };

  return saved ? (
    <Navigate to={'/memo'} />
  ) : (
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
      <Button onClick={handleClickSave}>Save</Button>
    </>
  );
};

export default NewMemo;
