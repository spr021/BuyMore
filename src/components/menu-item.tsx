import Image from 'next/image'; 
import classes from "./menu-item.module.scss"

type MenuItemProps = {
  logo?: string
  children?: React.ReactNode
  hasHover?: boolean
  logoBackground?: boolean
  bigIcon?: boolean
  size?: 'small' | 'big'

}

export default function MenuItem({
  logo,
  children,
  size = 'big',
  hasHover = false,
  logoBackground = false,
  bigIcon = false
}: MenuItemProps) {
  
  if (size === 'small') return (
    <div style={{padding: '0 16px'}} className={hasHover ? classes.menu_item_hover : classes.menu_item}>
      {logo && <Image
      className={logoBackground ? classes.logo_background : classes.logo}
        src={logo}
        alt=""
        width={32}
        height={32}
      />}
      <span>{children}</span>
    </div>
  )

  return (
    <div className={hasHover ? classes.menu_item_hover : classes.menu_item}>
      {logo && <Image
      className={logoBackground ? classes.logo_background : classes.logo}
        src={logo}
        alt=""
        width={bigIcon ? 32 : 20}
        height={bigIcon ? 32 : 20}
      />}
      <span>{children}</span>
    </div>
  )
}
