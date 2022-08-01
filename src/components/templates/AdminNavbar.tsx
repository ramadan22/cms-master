import React from 'react';

const AdminNavbar = () => (
  <nav className="bg-blue-500 md:ml-56 py-4 px-3">
    <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
      <div className="md:hidden">
        <button type="button">
          test
          {/* <Icon name="menu" size="2xl" color="white" /> */}
        </button>
        <div className="absolute top-2 md:hidden z-50 transition-all duration-300 left-64">
          <button type="button">test</button>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <h4 className="uppercase text-white text-sm tracking-wider mt-1">DASHBOARD</h4>

        <div className="flex">
          {/* <NavbarInput placeholder="Search" /> */}

          <div className="-mr-4 ml-6">
            {/* <Dropdown
              color="transparent"
              buttonText={
                <div className="w-12">
                  <Image src={ProfilePicture} rounded />
                </div>
              }
              rounded
              style={{
                padding: 0,
                color: 'transparent',
              }}
            >
              <DropdownItem color="lightBlue">
                Action
                              </DropdownItem>
              <DropdownItem color="lightBlue">
                Another Action
                              </DropdownItem>
              <DropdownItem color="lightBlue">
                Something Else
                              </DropdownItem>
            </Dropdown> */}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default AdminNavbar;
