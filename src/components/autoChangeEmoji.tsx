/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

const listOfIcon = [
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Grinning%20face%20with%20smiling%20eyes/3D/grinning_face_with_smiling_eyes_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Pile%20of%20poo/3D/pile_of_poo_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Pleading%20face/3D/pleading_face_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Folded%20hands/Medium-Dark/3D/folded_hands_3d_medium-dark.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Smiling%20face%20with%20hearts/3D/smiling_face_with_hearts_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Fire/3D/fire_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Face%20with%20tears%20of%20joy/3D/face_with_tears_of_joy_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Red%20heart/3D/red_heart_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Crying%20face/3D/crying_face_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Loudly%20crying%20face/3D/loudly_crying_face_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Airplane/3D/airplane_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Face%20screaming%20in%20fear/3D/face_screaming_in_fear_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Smiling%20face%20with%20sunglasses/3D/smiling_face_with_sunglasses_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Smiling%20face%20with%20heart-eyes/3D/smiling_face_with_heart-eyes_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Smiling%20face%20with%20smiling%20eyes/3D/smiling_face_with_smiling_eyes_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Smiling%20face%20with%20tear/3D/smiling_face_with_tear_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Biting%20lip/3D/biting_lip_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Peach/3D/peach_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Sweat%20droplets/3D/sweat_droplets_3d.png",
];

// This component change the emoji randomly every 0,5 seconds
const Logo: React.FC = (props) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * listOfIcon.length);
      setIndex(randomIndex);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center">
      <img
        src={listOfIcon[index]}
        alt="logo"
        className="h-10 w-10 aspect-square"
      />
      <h1 className="text-lg md:text-xl ml-2">Fluent UI Emoji</h1>
    </div>
  );
};

export default Logo;
