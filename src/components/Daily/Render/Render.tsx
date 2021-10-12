import 'react-quill/dist/quill.bubble.css';
import './Render.less';

import ReactQuill from 'react-quill';

const Render = ({ hop }: any) => (
  <div className="quill-render__wrapper">
    <ReactQuill
      className="quill-render"
      value={hop}
      readOnly
      theme="bubble"
    />
  </div>
);

export { Render };
