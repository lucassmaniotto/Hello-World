import { Outlet } from 'react-router-dom'

import Banner from 'components/Banner'

export default function DefaultPage() {
  return (
    <main>
        <Banner />
        <Outlet />
    </main>
  )
}
