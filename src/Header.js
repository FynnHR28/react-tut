

const Header = ({title}) => {
  return (
    <header>{title}</header>
  )
}

Header.defaultProps = {
    // can set any number of props here,
    // no error if no props are passed
    // these are overridden by any passed to the componenent in app
    title: 'Default Title',
}
export default Header
