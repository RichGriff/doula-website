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

const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "image/jpg"]

const formSchema = z.object({
  headline: z.string().min(2).max(50),
  tagline: z.string().min(2).max(50),
  primaryText: z.string().min(2),
  primaryUrl: z.string().min(1),
  secondaryText: z.string().min(2),
  secondaryUrl: z.string().min(1),
  images: z.custom<FileList | null>(files => {
    if (files === null) {
      return true; // No files selected, valid because the field is optional
    }
    if (!(files instanceof FileList)) {
      return false;
    }
    const filesArray = Array.from(files);
    if (filesArray.length === 0) {
      return false;
    }
    return filesArray.every(file => ACCEPTED_FILE_TYPES.includes(file.type));
  }, {
    message: "Only JPG, JPEG, and PNG files are allowed.",
  }).optional(),
});

type HomepageFormProps = {
  data: any
}

const HomepageForm = ({ data }: HomepageFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: data || {
      headline: '',
      tagline: '',
      primaryText: '',
      primaryUrl: '',
      secondaryText: '',
      secondaryUrl: '',
      images: null,
    }
  });

  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Values', values);
  }

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setSelectedFiles(files);
    form.setValue('images', files); // Update the form state with selected files
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="headline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Headline</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tagline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tagline</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="primaryText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Text</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  Main call to action button.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="primaryUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Url</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  URL for the main call to action button.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="secondaryText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Secondary Text</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="secondaryUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Secondary Url</FormLabel>
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
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <div>
                  <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <p className="text-muted-foreground text-sm mb-4">Upload new images to use on the homepage hero section.</p>
                  <Button
                    type="button"
                    onClick={handleFileInputClick}
                    variant={"secondary"}
                    // className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Upload Images
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
        <div className="flex justify-start items-start gap-2 pb-8">
          {data.images && data.images.map((image: any) => (
            <div key={crypto.randomUUID()} className="rounded-md w-28 h-28 relative overflow-hidden group">
              <Image 
                src={image} 
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
          ))}
        </div>
        <Button type="submit" className="bg-violet-600 hover:bg-violet-700">Save</Button>
      </form>
    </Form>
  )
}

export default HomepageForm
