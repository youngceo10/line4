export default function LogoCloud() {
  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-semibold leading-8 text-muted-foreground">
          Built by ex-lobbyists and engineers from
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-1 flex justify-center text-2xl font-bold text-gray-400 filter grayscale opacity-60">
            amazon
          </div>
          <div className="col-span-1 flex justify-center text-center text-lg font-bold uppercase text-gray-400 filter grayscale opacity-60">
            University of California, Berkeley
          </div>
          <div className="col-span-1 flex justify-center text-lg font-bold uppercase text-gray-400 filter grayscale opacity-60">
            Harvard University
          </div>
          <div className="col-span-1 flex justify-center text-lg font-bold text-gray-400 filter grayscale opacity-60">
            Williams College
          </div>
          <div className="col-span-1 flex justify-center text-lg font-bold text-gray-400 filter grayscale opacity-60">
            United Way
          </div>
        </div>
      </div>
    </div>
  )
}
