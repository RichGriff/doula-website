'use client'

import { login } from "@/actions/auth"
import { BabyIcon, Loader2 } from "lucide-react"
import { useState } from "react"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8)
})

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError('')
    setLoading(true)
    
    const {user, error} = await login(values.email, values.password)
    
    if(error) {
      setLoading(false)
      setError(error)
    }
    if(user) {
      setLoading(false)
      router.push('/admin')
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <div className='w-full flex justify-center items-center gap-2 mt-3'>
            <BabyIcon className='w-12 h-12 text-violet-700' />
            <span className='text-violet-700 font-semibold text-2xl'>Doula.</span>
          </div>
          {/* <h2 className="mt-6 text-center text-xl font-bold leading-9 tracking-tight text-slate-700">
            Sign in to your account
          </h2> */}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 pt-8 pb-16 shadow sm:rounded-lg sm:px-12">
            <h2 className="text-left text-xl font-bold leading-9 tracking-tight text-slate-700 pb-4">
              Sign in to your account
            </h2>
            {error && <p className="text-rose-500 font-semibold pb-4">{error}</p>}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-start">
                  <div className="text-sm leading-6">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <Button type="submit" disabled={loading} className="w-full bg-violet-600 hover:bg-violet-700">
                  {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin"/> : 'Login'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
