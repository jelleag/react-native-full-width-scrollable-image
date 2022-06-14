import React from "react";
import { Image, ScrollView, ImageSourcePropType } from "react-native";
import {ScrollableImageProps} from './index.d'

const ScrollableImage: React.FC<ScrollableImageProps> = (props: ScrollableImageProps) => {

  function getAspectRatio(image: ImageSourcePropType) {
    const data = Image.resolveAssetSource(image);
    return data.width / data.height;
  };

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: getAspectRatio(props.image),
          }}
          resizeMode="contain"
          source={props.image}
        />
      </ScrollView>
    );
  
}

export default ScrollableImage