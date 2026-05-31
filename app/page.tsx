export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For Remote Freelancers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Split Freelance Invoices by{' '}
          <span className="text-[#58a6ff]">Tax Jurisdiction</span>{' '}Automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your invoices and instantly categorize income by client location and tax rules — ready for multi-state and multi-country tax filing.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No contracts. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Multi-state tax rules','Client location detection','PDF invoice parsing','Jurisdiction reports','CSV export','$50k+ freelancer ready'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited invoice uploads',
              'Auto jurisdiction detection',
              'Multi-state & multi-country',
              'Categorized tax reports',
              'CSV & PDF export',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Free Trial
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">7-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does jurisdiction detection work?</h3>
            <p className="text-sm text-[#8b949e]">We extract client address data from your uploaded invoices and match it against a database of state and country tax rules to automatically assign the correct jurisdiction to each invoice.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which invoice formats are supported?</h3>
            <p className="text-sm text-[#8b949e]">We support PDF, PNG, and JPG invoice files. Our parser handles most common freelance invoice templates from tools like FreshBooks, Wave, and custom PDFs.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I use this for international clients?</h3>
            <p className="text-sm text-[#8b949e]">Yes. The system supports multi-country tax jurisdictions including the US (all 50 states), Canada, EU countries, and the UK — ideal for freelancers with a global client base.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Invoice Tax Splitter. All rights reserved.
      </footer>
    </main>
  )
}
