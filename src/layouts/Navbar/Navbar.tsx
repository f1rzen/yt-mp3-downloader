import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">YT Mp3 Downloader</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
