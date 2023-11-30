import Image from "next/image"

type MenuItemProps = {
  logo: string
  children: React.ReactNode
  className?: string
}

export function MenuPath({ logo, children, className = "" }: MenuItemProps) {
  return (
    <div
      className={
        "flex w-full items-start rounded-3xl mt-2 p-4 border-white border-1 transition ease-in-out delay-200 hover:color-whte hover:transition hover:ease-in-out hover:delay-200 hover:bg-blue-600 hover:border-1 hover:border-blue-600 hover:invert hover:hue-rotate-180 " +
        className
      }
    >
      {logo && (
        <Image
          className={
            " hover:invert hover:hue-rotate-180 hover:transition hover:ease-in-out hover:delay-100"
          }
          src={logo}
          alt=""
          width={20}
          height={20}
        />
      )}
      <span className={"ml-3 font-medium"}>{children}</span>
    </div>
  )
}
export function MenuItem({ logo, children, className = "" }: MenuItemProps) {
  return (
    <div
      className={
        "flex w-full items-start rounded-3xl mt-2 px-4 border-white border-1 transition ease-in-out delay-200 " +
        className
      }
    >
      {logo && (
        <Image
          className={"bg-slate-100 rounded-xl"}
          src={logo}
          alt=""
          width={32}
          height={32}
        />
      )}
      <span className={"ml-3 leading-8 text-xs font-semibold"}>{children}</span>
    </div>
  )
}
