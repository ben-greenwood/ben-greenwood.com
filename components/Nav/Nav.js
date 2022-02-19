import NavItem from "./NavItem"
import { HomeIcon, PhotographIcon } from "@heroicons/react/solid"
import TwitterIcon from "../Svgs/TwitterIcon"
import DribbbleIcon from "../Svgs/DribbbleIcon"

const Nav = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <NavItem
        svg={<HomeIcon className="h-6 w-6 fill-current text-gray-800" />}
        href="/"
        name="Home"
      />
      <NavItem
        svg={<PhotographIcon className="h-6 w-6 fill-current text-gray-900" />}
        href="/nfts"
        name="NFTs"
      />
      <div className="h-6 w-px bg-gray-200"></div>
      <NavItem
        svg={<TwitterIcon className="h-5 w-5 fill-current text-gray-800" />}
        href="https://twitter.com/_beanacre"
        name="Twitter"
        small
        external
      />
      <NavItem
        svg={<DribbbleIcon className="h-5 w-5 fill-current text-gray-800" />}
        href="https://dribbble.com/ben-greenwood"
        name="Dribbble"
        small
        external
      />
    </div>
  )
}

export default Nav
