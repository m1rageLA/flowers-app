import { ViewStyle, TextStyle } from 'react-native';

type Color = string;

interface ButtonColors {
  DEFAULT: Color;
  ACTIVE: Color;
}

interface TextColors {
  LOGO: Color,
  PRIMARY: Color,
}

interface Variables {
  PRIMARY_COLOR: Color;
  SECONDARY_COLOR: Color;
  BUTTONS: ButtonColors;
  TEXT: TextColors,
  HEADER: Color;
}

export const variables: Variables = {
  PRIMARY_COLOR: "#f5e1ef",
  SECONDARY_COLOR: "#e6cadd",
  BUTTONS: {
    DEFAULT: "#9e959c",
    ACTIVE: "#cf6bb2"
  },
  TEXT: {
    LOGO: "white",
    PRIMARY: "black"
  },
  HEADER: "#cf6bb2"
};
