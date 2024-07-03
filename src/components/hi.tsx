import ReactDOM from 'react-dom'

const Hi = () => {
  return ReactDOM.createPortal((
    <div>Hsdfsdf</div>
  ), document.getElementById("notification")!)
}

export default Hi