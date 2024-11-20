import { Navbar } from "flowbite-react";

export const Header = () => {
  return (
    <Navbar fluid rounded className="bg-white max-w-6xl mx-auto">
      <Navbar.Brand href="">
        <p className="self-center whitespace-nowrap text-base md:text-4xl text-primary italic font-semibold">FrodenZ <span className="text-secondary">Labs</span></p>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-base md:text-xl">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-base md:text-xl">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="text-base md:text-xl">Services</Navbar.Link>
        <Navbar.Link href="#" className="text-base md:text-xl">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="text-base md:text-xl">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}