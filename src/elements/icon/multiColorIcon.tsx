import React, { createElement } from 'react';
import { Svg, Path } from 'react-native-svg';

type MultiColorIconProps = {
  name: string;
  size?: number;
  currentIcon: any;
};

const MultiColorIcon: React.FC<MultiColorIconProps> = ({ name, size = 24, currentIcon }) => {
  if (!currentIcon) return null;

  const { paths, width = 1024, height = 1024 } = currentIcon.icon;
  const viewBox = `0 0 ${width} ${height}`;

  return React.createElement(
    Svg,
    { width: size, height: size, viewBox },
    paths.map((path: string, index: number) => {
      const attrs = currentIcon.icon.attrs?.[index];

      const pathProps = {
        d: path,
        key: name + index,
        ...(attrs ? attrs : {}),
      };

      return createElement(Path, pathProps);
    })
  );
};

export default MultiColorIcon;
