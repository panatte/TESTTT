'use client';

import dynamic from 'next/dynamic'
// const DynmicEditor = dynamic(() => import('../../components/Editor').then(a => a.EditorWithStore), {
//   ssr: false,
// })

const DynamicEditorNew = dynamic(() => import('../../components/EditorNew').then(a => a.EditorWithStore), {
  ssr: false,
})

function EditorPage() {
  return (
      <DynamicEditorNew />
  );
}

EditorPage.diplsayName = "EditorPage";

export default EditorPage;
