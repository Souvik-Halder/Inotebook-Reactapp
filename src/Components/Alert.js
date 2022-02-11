import React from 'react'

function Alert(props) {
    const{message}=props;
  return (
    <div>
        <div class="alert alert-primary" role="alert">
  {message}
</div>
    </div>
  )
}

export default Alert