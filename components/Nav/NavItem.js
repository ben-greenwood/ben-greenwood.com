import Link from "next/link"
import { useRouter } from "next/router"
import Tooltip from "../Tooltip"

const NavItem = ({ href, svg, name, small, external }) => {
  const { asPath } = useRouter()
  const active = asPath === href

  return (
    <Link href={href}>
      <Tooltip text={name}>
        <a
          target={external ? "blank" : null}
          className={`${
            active
              ? "bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200"
              : null
          } cursor-pointer rounded p-2 hover:bg-gray-100`}
        >
          {svg}
        </a>
      </Tooltip>
    </Link>
  )
}

export default NavItem
