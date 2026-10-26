import { site } from '../config/site'
import { brandAssets } from '../data/brand'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-transparent bg-[#0f0e0c] py-10 sm:py-12 [border-image:linear-gradient(90deg,#f59e0b,#e11d48,#7c3aed)_1]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <img
            src={brandAssets.logoCream}
            alt={site.brand.full}
            width={640}
            height={367}
            className="h-9 w-auto sm:h-10"
          />
          <p className="mt-3 text-sm text-muted">
            {site.location} · {site.label}
          </p>
        </div>

        <p className="text-sm text-muted">
          &copy; {year} {site.brand.full}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
