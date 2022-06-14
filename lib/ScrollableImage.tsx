import React, { useState, useEffect } from "react";
import { Image, ScrollView, Dimensions } from "react-native";

interface ScrollableImageProps {
  uri: string;
}

const ScrollableImage = (props: ScrollableImageProps) => {
  const [imgWidth, setImgWidth] = useState<number>(0);
  const [imgHeight, setImgHeight] = useState<number>(0);

  useEffect(() => {
    Image.getSize(props.uri, (width, height) => {
      const totalScreenWidth = Dimensions.get("window").width;

      const scale = width / totalScreenWidth;

      const imageHeight = height / scale;

      setImgWidth(totalScreenWidth);
      setImgHeight(imageHeight);
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Image
        style={{ width: imgWidth, height: imgHeight }}
        source={{ uri: props.uri }}
      />
    </ScrollView>
  );
};

export default ScrollableImage;
