

const Footer = ({length}) => {
  return (
    <footer>
        <p>{length} {length === 1? "item": "items"} in your list</p>
    </footer>
  )
}

export default Footer