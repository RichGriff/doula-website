'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { Textarea } from "../ui/textarea"
import Image from "next/image"

const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(1)
})

export default function ContactForm() {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="bg-[#FFFDFB] py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <span className="uppercase text-sm text-[#5E55AE] font-medium">
            Lets Chat
          </span>
          <h3 className="text-3xl font-heading">Start your journey with me</h3>
        </div>
        <div className="flex justify-center items-center mt-24">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea rows={8} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col justify-start items-start gap-3">
                <Button type="submit" className='uppercase text-xs py-6 px-8 bg-[#5E55AE] hover:bg-[#554d9e] text-white'>Lets Talk</Button>
                <p className="text-muted-foreground text-sm">By submitting this form, I agree to the <span className="font-semibold text-[#5E55AE]">privacy policy</span>.</p>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <Image src={'/images/contact-accent.svg'} alt='' width={120} height={120} className='absolute top-0 left-0' />
    </div>
  )
}
