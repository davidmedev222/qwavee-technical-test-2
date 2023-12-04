import { Logo, NavLink } from '@/components'
import { FooterLinks } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='footer'>
      <Logo />
      <p className='footer__description'>
        A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant
        colors, and dynamic visuals.
      </p>
      <ul className='footer__list'>
        {FooterLinks.map(({ label, links }) => (
          <li className='footer__item' key={label}>
            {label}
            <ul className='footer__links'>
              {links.map((link) => (
                <li className='footer__link' key={link.href}>
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <ul className='footer__social'>
        <li className='footer__icon'>
          <Link href='#'>
            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 12 10'>
              <path d='M11.2071 1.9831C10.7881 2.16933 10.3458 2.28573 9.88023 2.35557C10.3458 2.07622 10.7183 1.63392 10.8812 1.0985C10.4389 1.35457 9.95006 1.5408 9.41465 1.6572C8.99562 1.2149 8.39037 0.935547 7.73856 0.935547C6.48149 0.935547 5.45721 1.95982 5.45721 3.21689C5.45721 3.40312 5.48049 3.56608 5.52705 3.72903C3.64145 3.63591 1.94208 2.72803 0.801411 1.33129C0.615178 1.68048 0.498783 2.05294 0.498783 2.47196C0.498783 3.26345 0.894527 3.96182 1.52306 4.38084C1.1506 4.35756 0.801411 4.26445 0.475504 4.10149V4.12477C0.475504 5.24216 1.26699 6.17333 2.31455 6.38284C2.12831 6.42939 1.9188 6.45267 1.70929 6.45267C1.56962 6.45267 1.40666 6.42939 1.26699 6.40612C1.56962 7.314 2.40766 7.98909 3.40866 7.98909C2.61717 8.59434 1.63945 8.96681 0.56862 8.96681C0.382388 8.96681 0.196156 8.96681 0.0332031 8.94353C1.05748 9.59534 2.24471 9.96781 3.54833 9.96781C7.76184 9.96781 10.0665 6.47595 10.0665 3.44968C10.0665 3.35656 10.0665 3.24017 10.0665 3.14705C10.5088 2.84443 10.9045 2.44868 11.2071 1.9831Z' />
            </svg>
          </Link>
        </li>
        <li className='footer__icon'>
          <Link href='#'>
            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 8 13'>
              <path d='M2.70873 12.3038V6.75026H0.839844V4.58594H2.70873V2.98981C2.70873 1.13752 3.84005 0.128906 5.49242 0.128906C6.28392 0.128906 6.96418 0.187836 7.16243 0.214175V2.14993L6.01642 2.15045C5.11776 2.15045 4.94376 2.57748 4.94376 3.20411V4.58594H7.08697L6.80791 6.75026H4.94376V12.3038H2.70873Z' />
            </svg>
          </Link>
        </li>
        <li className='footer__icon'>
          <Link href='#'>
            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'>
              <path d='M7.00076 1.44721C8.80947 1.44721 9.02366 1.45398 9.73818 1.48656C10.1678 1.49182 10.5933 1.5707 10.9962 1.71979C11.2884 1.83248 11.5538 2.00511 11.7753 2.22656C11.9967 2.44802 12.1694 2.71339 12.282 3.00559C12.4311 3.40853 12.51 3.83406 12.5153 4.26366C12.5475 4.97817 12.5546 5.19237 12.5546 7.00108C12.5546 8.80979 12.5479 9.02398 12.5153 9.7385C12.51 10.1681 12.4311 10.5936 12.282 10.9966C12.1694 11.2888 11.9967 11.5541 11.7753 11.7756C11.5538 11.997 11.2884 12.1697 10.9962 12.2824C10.5933 12.4315 10.1678 12.5103 9.73818 12.5156C9.02398 12.5479 8.80979 12.5549 7.00076 12.5549C5.19172 12.5549 4.97753 12.5482 4.26334 12.5156C3.83373 12.5103 3.40821 12.4315 3.00527 12.2824C2.71307 12.1697 2.44769 11.997 2.22624 11.7756C2.00479 11.5541 1.83216 11.2888 1.71947 10.9966C1.57038 10.5936 1.4915 10.1681 1.48624 9.7385C1.45398 9.02398 1.44689 8.80979 1.44689 7.00108C1.44689 5.19237 1.45366 4.97817 1.48624 4.26366C1.4915 3.83406 1.57038 3.40853 1.71947 3.00559C1.83216 2.71339 2.00479 2.44802 2.22624 2.22656C2.44769 2.00511 2.71307 1.83248 3.00527 1.71979C3.40821 1.5707 3.83373 1.49182 4.26334 1.48656C4.97785 1.4543 5.19205 1.44721 7.00076 1.44721ZM7.00076 0.226562C5.16205 0.226562 4.93043 0.234304 4.20785 0.267208C3.64561 0.278391 3.08934 0.384847 2.56269 0.582046C2.11092 0.752261 1.70172 1.019 1.36366 1.36366C1.01869 1.70184 0.751722 2.11127 0.581401 2.56334C0.384201 3.08998 0.277746 3.64625 0.266563 4.2085C0.234304 4.93043 0.226562 5.16205 0.226562 7.00076C0.226562 8.83946 0.234304 9.07108 0.267208 9.79366C0.278391 10.3559 0.384847 10.9122 0.582046 11.4388C0.752178 11.8908 1.01892 12.3002 1.36366 12.6385C1.70191 12.9832 2.11133 13.25 2.56334 13.4201C3.08998 13.6173 3.64626 13.7238 4.2085 13.7349C4.93108 13.7672 5.16172 13.7756 7.0014 13.7756C8.84108 13.7756 9.07172 13.7679 9.7943 13.7349C10.3565 13.7238 10.9128 13.6173 11.4395 13.4201C11.8893 13.2457 12.2978 12.9794 12.6389 12.6381C12.98 12.2968 13.246 11.8882 13.4201 11.4382C13.6173 10.9115 13.7238 10.3553 13.735 9.79301C13.7672 9.07108 13.775 8.83946 13.775 7.00076C13.775 5.16205 13.7672 4.93043 13.7343 4.20785C13.7231 3.64561 13.6167 3.08934 13.4195 2.56269C13.2493 2.11068 12.9826 1.70126 12.6379 1.36301C12.2996 1.01828 11.8902 0.751533 11.4382 0.581401C10.9115 0.384201 10.3553 0.277746 9.79301 0.266563C9.07108 0.234304 8.83947 0.226562 7.00076 0.226562Z' />
              <path d='M7.00215 3.52344C6.31413 3.52344 5.64155 3.72746 5.06948 4.10971C4.49741 4.49195 4.05154 5.03525 3.78824 5.6709C3.52494 6.30655 3.45605 7.00601 3.59028 7.68081C3.72451 8.35561 4.05582 8.97546 4.54233 9.46197C5.02884 9.94847 5.64868 10.2798 6.32349 10.414C6.99829 10.5482 7.69774 10.4794 8.33339 10.2161C8.96904 9.95276 9.51234 9.50689 9.89459 8.93481C10.2768 8.36274 10.4809 7.69017 10.4809 7.00215C10.4809 6.07954 10.1144 5.19471 9.46197 4.54233C8.80958 3.88994 7.92476 3.52344 7.00215 3.52344ZM7.00215 9.26021C6.55555 9.26021 6.11897 9.12778 5.74764 8.87966C5.3763 8.63154 5.08688 8.27888 4.91597 7.86627C4.74506 7.45366 4.70034 6.99964 4.78747 6.56162C4.8746 6.1236 5.08966 5.72125 5.40546 5.40545C5.72125 5.08966 6.1236 4.8746 6.56162 4.78747C6.99964 4.70034 7.45367 4.74506 7.86627 4.91597C8.27888 5.08687 8.63154 5.3763 8.87966 5.74763C9.12778 6.11897 9.26021 6.55554 9.26021 7.00215C9.26021 7.60102 9.02231 8.17537 8.59884 8.59884C8.17537 9.02231 7.60102 9.26021 7.00215 9.26021Z' />
              <path d='M10.6176 4.19807C11.0665 4.19807 11.4305 3.83412 11.4305 3.38517C11.4305 2.93621 11.0665 2.57227 10.6176 2.57227C10.1686 2.57227 9.80469 2.93621 9.80469 3.38517C9.80469 3.83412 10.1686 4.19807 10.6176 4.19807Z' />
            </svg>
          </Link>
        </li>
        <li className='footer__icon'>
          <Link href='#'>
            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 13'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.60685 0.226562C3.01591 0.226562 0.126953 3.11552 0.126953 6.70646C0.126953 9.56841 1.98992 11.9984 4.55488 12.8624C4.87888 12.9164 4.98688 12.7274 4.98688 12.5384C4.98688 12.3764 4.98688 11.9714 4.98688 11.4314C3.1779 11.8364 2.79991 10.5674 2.79991 10.5674C2.50291 9.81141 2.07092 9.62241 2.07092 9.62241C1.47693 9.21742 2.12492 9.21742 2.12492 9.21742C2.77291 9.27142 3.1239 9.89241 3.1239 9.89241C3.6909 10.8914 4.63588 10.5944 5.01387 10.4324C5.06787 10.0004 5.22987 9.73041 5.41887 9.56841C3.98789 9.40642 2.47592 8.83942 2.47592 6.35546C2.47592 5.65347 2.71891 5.05948 3.1509 4.62749C3.09691 4.46549 2.85391 3.8175 3.2049 2.89952C3.2049 2.89952 3.74489 2.73752 4.98688 3.57451C5.49987 3.43951 6.06686 3.35851 6.60685 3.35851C7.14684 3.35851 7.71383 3.43951 8.22682 3.57451C9.4688 2.73752 10.0088 2.89952 10.0088 2.89952C10.3598 3.79051 10.1438 4.43849 10.0628 4.62749C10.4678 5.08648 10.7378 5.65347 10.7378 6.35546C10.7378 8.83942 9.22581 9.37942 7.76783 9.54141C8.01083 9.73041 8.19982 10.1354 8.19982 10.7294C8.19982 11.5934 8.19982 12.2954 8.19982 12.5114C8.19982 12.6734 8.30782 12.8894 8.65882 12.8354C11.2238 11.9984 13.0867 9.56841 13.0867 6.70646C13.0867 3.11552 10.1978 0.226562 6.60685 0.226562Z'
              />
            </svg>
          </Link>
        </li>
      </ul>
      <p className='footer__copyright'>© Copyright 2023, All Rights Reserved by board.</p>
      <Image
        className='footer__background'
        fill
        quality={100}
        sizes='100vw'
        src='/assets/footer-gradient.webp'
        alt='Image of person with 3d viewer'
      />
    </footer>
  )
}

export default Footer