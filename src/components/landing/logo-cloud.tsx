export default function LogoCloud() {
  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-left text-lg font-normal leading-8 text-muted-foreground">
          Tracking the leading AI labs
        </h2>
        <div className="mt-10 grid max-w-4xl grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4">
          <div className="col-span-1 flex justify-start">
            <img src="https://res.cloudinary.com/djrdh7thl/image/upload/v1769947936/Untitled_3_f6vp7t.png" alt="OpenAI Logo" className="h-10" />
          </div>
          <div className="col-span-1 flex justify-start">
             <img src="https://res.cloudinary.com/djrdh7thl/image/upload/v1769947988/Anthropic_Logo_1_r5jxzt.png" alt="Anthropic Logo" className="h-9" />
          </div>
          <div className="col-span-1 flex justify-start">
            <img src="https://res.cloudinary.com/djrdh7thl/image/upload/v1769947962/DeepMind_idlHaUh9oK_1_kb4fr4.png" alt="DeepMind Logo" className="h-10" />
          </div>
           <div className="col-span-1 flex justify-start">
            <img src="https://res.cloudinary.com/djrdh7thl/image/upload/v1769948142/Meta_idlf4cVSsS_1_wdkqrv.png" alt="Meta Logo" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  )
}
