import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { SearchIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const router = useRouter()
  const navigation = [
    {
      name: 'Home',
      href: '/',
      current: router.pathname === '/' ? true : false,
    },
    {
      name: 'Shop',
      href: '#',
      current: router.pathname === '/shop' ? true : false,
    },
    {
      name: 'About',
      href: '#',
      current: router.pathname === '/about' ? true : false,
    },
    {
      name: 'Contact',
      href: '/contact',
      current: router.pathname === '/contact' ? true : false,
    },
  ]
  return (
    <Disclosure as="nav" className="w-full bg-white">
      {({ open }) => (
        <>
          <div className=" px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://bhume-test.vercel.app/_next/image?url=%2Flogo.png&w=96&q=75"
                    alt="Workflow"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://bhume-test.vercel.app/_next/image?url=%2Flogo.png&w=96&q=75"
                    alt="Workflow"
                  />
                </div>
                <div
                  className="hidden sm:ml-6 sm:block"
                  style={{ marginInline: 'auto' }}
                >
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'inline-block rounded-none border-b-2 border-black	p-8 text-black'
                            : 'rounded-none text-black hover:border-b-2 hover:border-gray-200',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="hidden p-1 text-black hover:text-black sm:block"
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  className=" p-1 text-black hover:text-black "
                >
                  <span className="sr-only">My Cart</span>
                  <ShoppingCartIcon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  className="hidden p-1 text-black hover:text-black sm:block"
                >
                  <span className="sr-only">My Account</span>
                  <UserIcon className="h-6 w-6 text-black" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-300 text-black'
                      : 'text-black hover:bg-gray-200 hover:text-black',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
