import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { formats, modules } from './options/options';

const TextEditor = ({ setHop, hop, isEditable }: any) => {
  console.log();
  return (
    <>
      <ReactQuill
        style={{ borderRadius: '50px', height: '40rem', margin: '1rem' }}
        modules={modules}
        formats={formats}
        placeholder="Tell me all about it"
        readOnly={!isEditable}
        theme={isEditable ? 'snow' : 'bubble'}
        value={hop}
        onChange={(content, _, __, editor) => {
          setHop(editor.getHTML());
        }}
      />
    </>
  );
};

export { TextEditor };
