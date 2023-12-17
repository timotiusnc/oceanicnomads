import Image from 'next/image'
import logo from '@/images/logos/oceanicnomads.png'

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="" {...props}>
      <Image src={logo} alt="" className="w-[150px] lg:w-[250px]" priority />
    </div>
  )
}
