import style from 'react-syntax-highlighter/dist/styles/prism/atom-dark'

export default theme => ({
  ...theme,
  Slide: {
    padding: '40px',
    ...theme.Slide,
  },
  prism: {
    style,
    customStyle: {
      flex: 1,
      fontSize: '20px',
    },
  },
})
