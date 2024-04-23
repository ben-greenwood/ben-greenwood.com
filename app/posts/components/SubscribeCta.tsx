"use client"

import { createSubscriber } from "@/app/_lib/ghost"
import { useState } from "react"

const SubscribeCta = ({ className }: { className: string }) => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await createSubscriber(email)
    setEmail("")
    setSuccess(true)
  }

  return (
    <div className={className}>
      <h2 className="text-center font-bold tracking-tight text-white">
        Subscribe to <em className="font-magnat text-lg">201 Created</em>
      </h2>
      <p className="mx-auto mt-2 max-w-lg text-center text-sm leading-8 text-slate-300">
        Today it might be tech, tomorrow it might be something else.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-6 flex max-w-md gap-x-4"
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {success ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </div>
  )
}

export default SubscribeCta
