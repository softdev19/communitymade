const em = (factor = 1) => Math.round(factor * 16)

export default {
  body: em(),
  body2: em(0.9),
  caption: em(0.75),
  small: em(0.63),
  subheading: em(1.05),
  title: em(1.37),
  headline: em(1.71),
  h4: em(2.42),
  h3: em(3.21),
  h2: em(4),
  h1: em(8),
  gapXS: 4,
  gapS: 8,
  gapM: 16,
  gapL: 24,
  gapX: 32,
  gapXL: 64
}
