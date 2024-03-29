const COLORS = {
  LIGHT_BLUE_TEXT:"#35719B",
  TRANSPARENT: 'transparent',
  PRIMARY_BLUE: 'rgba(50,62,91,1)',
  PRIMARY_LIGHT_BLUE: 'rgba(142,204,216,1)',
  PRIMARY_RED: 'rgba(244,98,112,1)',
  PRIMARY_CYAN: 'rgba(53,113,155,1)',
  NEUTRAL_GREY: 'rgba(209,215,215,1)',
  NEUTRAL_LIGHT_GREY: 'rgba(226,226,217,1)',
  PLACE_HOLDER: 'rgba(103,103,90,1)',
  AUTH_BOTTOM: 'rgba(237, 237, 230,1)',
  IMAGE_BACKGROUND: 'rgba(242,242,242,1)',
  SIDE_MENU: '#293E6F',
  POST_ICON: '#8491AD',
  INPUT_TEXT:"#9ECFD8",
  DARK_BUTTON:'#293E6F',
  BORDER_COLOR_INPUT:"#9D9D9D",
  RED: '#EA5768',
  GRAY: '#DCE0E6',
  BLACKGREY: '#374053',
  WHITE: '#FFFFFF',
  DARKGREY: '#969CAA',
  LIGHTGREY: '#F2F2F2',
  BLACK: '#000000',
  GREYSUIT: '#8E8E93',
  GREY: '#525252',
  TRANSPARENTBLACK: 'rgba(0, 0, 0, 0.7)',
  BUTTONSEPARATORNEW: '#F1F1F0',
  STORYTITLE: '#8c9191',
  PRIMARY: '#019AC1',
  NAMECOLORNEW: '#A9A8A8',
  ALMOST_WHITE: '#FAFAFA',
  NEW_GRAY: '#BDC6CF',
  SELECTED_SEGMENT: '#d19230',
  GREY_TEXT: '#707070',
  GREY_TEXT_BOX: '#545454',
  SEPARATOR: '#BDC6CF',
  CALCULATOR_BORDER_COLOR: '#707070',
  SWIPER_DOT: '#D19130',
  INPUT_BORDER_COLOR: '#E2E2D9',
  REGISTER_NOW_COLOR: '#80807B',
  LIGHT_BLUE: '#9ED0D8',
  CHECKBOX_COLOR: '#475668',
  BUTTON_RED: 'rgba(244,98,112,1)',
  RADIO_BUTTON_TEXT: '#374053',
  SELECTED_DATE_COLOR: '#F46270',
  COST_BACKGROUND: 'rgba(244,98,112,0.1)',
  TIME_TAGS_BACKGROUND: '##F5F5EF',
  BORDER_COLOR: '#EFEFE7',
  POST_USERNAME:"#323E5B",
  POST_DESCRIPTION:"#323E5B",
  POST_MENU_TEXT:"#24345A",
  TIME_SLOT_SELECTED_TEXT:"#80807BB3",
  TIME_SLOT_UNSELECTED_TEXT:"#0C233CDE",
  SLOT_BOOKED:"#8ECCD8",
  COMMENT_BACKGROUND_COLOR:"#8491AD12",
  ORANGE_COLORS:"#8DB600",
  PRIMARY_DARK_BLUE: '#323E5B',
  PRIMARY_GRAY_TEXT: '#80807B',
  LIGHT_BORDER_COLOR: '#67675A12',
  IMAGE_BACKGROUND_COMMUNITY:"#8491AD71",
  LINE_COLOR:"#0000003F",
};

const lighten = (value) => {
  const MAX_HEX_VALUE = 255;
  const hexValue = Math.floor(MAX_HEX_VALUE * Math.min(value, 1)).toString(16);
  return hexValue.length < 2 ? `0${hexValue}` : hexValue;
};

const alpha = (color, value) => (color.startsWith('#') ? `${color}${lighten(value)}` : color);

export { alpha, lighten };

export default COLORS;
