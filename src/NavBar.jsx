import React from 'react'

const NavBar = () => {
  return (
    <>
    <div class="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-white border-bottom border-primary">
  <h5 class="my-0  font-weight-normal">Company name</h5>
  <nav class="my-2  mr-3 ms-auto">
    <a class="p-2 text-dark" href="#">Features</a>
    <a class="p-2 text-dark" href="#">Enterprise</a>
    <a class="p-2 text-dark" href="#">Support</a>
    <a class="p-2 text-dark" href="#">Pricing</a>
  </nav>
  <a class="btn btn-outline-primary" href="#">Sign up</a>
</div>
</>
  )
}

export default NavBar