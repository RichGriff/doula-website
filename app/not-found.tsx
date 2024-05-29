export default function NotFound() {
  return (
    <>
      <main className="relative isolate min-h-screen">
        <img
          src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="-z-10 absolute top-0 left-0 w-full h-full bg-slate-800/50" />
        <div className="z-50 mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base text-white sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex justify-center">
            <a href="/admin" className="text-sm font-semibold leading-7 text-white">
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
