import { useState } from 'react';
import { TextEditor } from './TextEditor/TextEditor';

const Daily = () => {
  const [hop, setHop] = useState('');
  return (
    <>
      <TextEditor
        setHop={setHop}
        hop={hop}
      />
    </>
  );
};

export { Daily };
