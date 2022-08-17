import React from 'react';
import Viewer from 'react-viewer';

interface Props {
  visible: boolean
  close: () => void
  src: string
  alt: string
}
export default function MakeViewer(props: Props) {
  // const [src, setSrc] = useState('');
  // const [alt, setAlt] = useState('');
  // const [visible, setVisible] = useState(false);
  // const viewerOpen = (src, alt) => {
  //   setSrc(src);
  //   setAlt(alt);
  //   setVisible(true);
  // }
  // const viewerClose = () => {
  //   setVisible(false); 
  // }

  return (
    <div>
      <Viewer
        visible={props.visible}
        onClose={props.close}
        images={[{ src: props.src, alt: props.alt }]}
        zIndex={1301}
        zoomSpeed={1}
        noNavbar={true}
      />
    </div>
  );
}