const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['blockquote', 'code-block'],
    [{ direction: 'rtl' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image',
  'color', 'background',
  'font',
  'align',
  'blockquote', 'code-block',
  'direction',
  'size',
  'clean{',
];

export { modules, formats };
