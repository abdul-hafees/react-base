import React, { useContext } from "react"
import {
        MDBNavbar, 
        MDBNavbarBrand, 
        MDBNavbarNav, 
        // MDBNavbarLink,
        MDBNavbarToggler, 
        MDBCollapse, 
        // MDBFormInline,
        MDBNavbarItem,
        MDBNavbarLink,
        MDBDropdown, 
        MDBDropdownToggle, 
        MDBDropdownMenu, 
        MDBDropdownItem
} from "mdb-react-ui-kit";
import { AuthContext } from "./context/AuthContext";

export default function Dashboard() {
    
    const {user} = useContext(AuthContext)
    
    return (
        
        <MDBNavbar color="indigo" dark expand="md">
          <MDBNavbarBrand>
            <strong className="text-black px-2">Dashboard</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler />
          <MDBCollapse id="navbarCollapse3" >
            <MDBNavbarNav left>
              <MDBNavbarItem active>
                <MDBNavbarLink to="#!">Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink to="#!">Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink to="#!">Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Dropdown</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {/* <MDBNavbarItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavbarItem> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      
    );
}