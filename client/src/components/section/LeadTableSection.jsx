import LeadTable from "../leads/LeadTable"

function LeadTableSection() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="border-b-3 pl-2 text-center rounded-md bg-green-100 py-3 border-green-600 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Lead Management Dashboard
        </h1>
        <p className="mt-2 text-gray-600">
          View submitted leads, monitor sources, and track automation activity
        </p>
      </header>
      <div className="">
        <LeadTable />
      </div>
    </section>
  )
}

export default LeadTableSection