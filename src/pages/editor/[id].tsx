import React from 'react';
import { useRouter } from 'next/router';
import { useEditor } from '../../context/EditorContext';

const ImageEditor: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { settings, setSettings } = useEditor();

  const imageUrl = `https://picsum.photos/id/${id}/${settings.width}/${settings.height}?blur=${settings.blur}${settings.greyscale ? '&grayscale' : ''}`;

  const handleDownload = async () => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `image-${id}.jpg`; // Provide a name for the downloaded file
    link.click();
    URL.revokeObjectURL(link.href); // Clean up memory
  };

  return (
    <div>
      <h1>Edit Image</h1>
      <div>
        <img src={imageUrl} alt="Preview" />
      </div>
      <div>
        <label>
          Width: 
          <input
            type="number"
            value={settings.width}
            onChange={(e) => setSettings({ ...settings, width: +e.target.value })}
          />
        </label>
        <label>
          Height: 
          <input
            type="number"
            value={settings.height}
            onChange={(e) => setSettings({ ...settings, height: +e.target.value })}
          />
        </label>
        <label>
          Blur: 
          <input
            type="range"
            min="0"
            max="10"
            value={settings.blur}
            onChange={(e) => setSettings({ ...settings, blur: +e.target.value })}
          />
        </label>
        <label>
          Greyscale: 
          <input
            type="checkbox"
            checked={settings.greyscale}
            onChange={(e) => setSettings({ ...settings, greyscale: e.target.checked })}
          />
        </label>
      </div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default ImageEditor;
