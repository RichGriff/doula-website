'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState, useRef } from "react"
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
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { updateContentType } from "@/actions/contentTypes"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "image/jpg"]

const formSchema = z.object({
  intro: z.string().min(1),
  experience: z.string().min(1),
  buttonText: z.string().min(1),
  buttonUrl: z.string().min(1),

  // featuredImage: z.custom<FileList | null>(files => {
  //   if (files === null) {
  //     return true; // No files selected, valid because the field is optional
  //   }
  //   if (!(files instanceof FileList)) {
  //     return false;
  //   }
  //   const filesArray = Array.from(files);
  //   if (filesArray.length !== 1) {
  //     return false; // Only one file should be selected
  //   }
  //   return filesArray.every(file => ACCEPTED_FILE_TYPES.includes(file.type));
  // }, {
  //   message: "Only one JPG, JPEG, or PNG file is allowed.",
  // }).optional(),
});

type AboutMeProps = {
  content: {
    id: string,
    data: any
  }
}

const AboutMe = ({ content }: AboutMeProps) => {
  const { id, data } = content 
  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: data
  });

  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
   
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)

    const newContent = JSON.stringify(values)

    const updated = await updateContentType(id, newContent)

    if(!updated) {
      toast.error('Something went wrong', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    toast.success('Updated Successfully', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setLoading(false)
  }

  // const handleFileInputClick = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   setSelectedFiles(files);
  //   form.setValue('featuredImage', files); // Update the form state with selected files
  // };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="intro"
          render={({ field }) => (
            <FormItem>
              <FormLabel>A little about me</FormLabel>
              <FormControl>
                <Textarea rows={8} placeholder="Write something about you" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>My Experience</FormLabel>
              <FormControl>
                <Textarea rows={8} placeholder="What you can offer, how did you get here etc" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="buttonText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Button Text</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="buttonUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Button Url</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* {data.featuredImage ? (
          <div className="flex flex-col justify-start items-start gap-4">
            <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Featured Image</span>
            <div className="rounded-md w-48 h-48 relative overflow-hidden group">
              <Image 
                src={data.featuredImage} 
                alt='' 
                fill 
                className="object-cover group-hover:cursor-pointer"
              />
              <div className="">
                <Button 
                  variant={"ghost"} 
                  size={"icon"}
                  className="group-hover:absolute group-hover:cursor-pointer hover:bg-rose-500/80 w-full h-full"
                >
                    <Trash2 className="text-white w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <FormField
            control={form.control}
            name="featuredImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Featured Image</FormLabel>
                <FormControl>
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      onClick={handleFileInputClick}
                      variant={"secondary"}
                      // className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Upload Image
                    </Button>
                    {selectedFiles && (
                      <div className="mt-2">
                        {Array.from(selectedFiles).map((file, index) => (
                          <div key={index} className="text-sm text-gray-700">
                            {file.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )} */}
        <div className="pt-6">
          <Button type="submit" disabled={loading} className="bg-violet-600 hover:bg-violet-700">
            {loading ? 'Saving...' : 'Save' }
          </Button>
        </div>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Form>
  )
}

export default AboutMe
