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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ImageIcon, MoreVertical, PlusIcon, Trash2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "image/jpg"]

const formSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  image: z.custom<FileList | null>(files => {
    if (files === null) {
      return true; // No files selected, valid because the field is optional
    }
    if (!(files instanceof FileList)) {
      return false;
    }
    const filesArray = Array.from(files);
    if (filesArray.length !== 1) {
      return false; // Only one file should be selected
    }
    return filesArray.every(file => ACCEPTED_FILE_TYPES.includes(file.type));
  }, {
    message: "Only one JPG, JPEG, or PNG file is allowed.",
  }).optional(),
});

type ServicesFormProps = {
  data: any
}

const ServicesForm = ({ data }: ServicesFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      image: null,
    }
  });

  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [services, setServices] = useState<any[]>(data.services);
  const [toggleServiceAdd, setToggleServiceAdd] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Values', values);
    const newService = {
      name: values.name,
      description: values.description,
      image: ''
    }

    setServices([...services, newService])
    setToggleServiceAdd(false)
  }

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setSelectedFiles(files);
    form.setValue('image', files); // Update the form state with selected files
  };

  return (
    <>
      {toggleServiceAdd ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Name of service" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={6} placeholder="What is this service about" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Service Image</FormLabel> */}
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
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Add Image
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
            </div>
            <div className="flex justify-start items-center gap-2">
              <Button type="submit" className="bg-violet-600 hover:bg-violet-700">Add</Button>
              <Button onClick={() => setToggleServiceAdd(false)} variant={"secondary"}>Cancel</Button>
            </div>
          </form>
        </Form>
      ) : (
        <Button onClick={() => setToggleServiceAdd(true)}><PlusIcon className="w-4 h-4 mr-2"/>Add New Service</Button>
      )}
      <div className="my-4">
      <Table>
        <TableCaption>Current list of services</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.length > 0 && services.map((service: any) => (
            <TableRow key={crypto.randomUUID()}>
              <TableCell>
                <div className="rounded-md w-12 h-12 relative overflow-hidden group bg-gray-100 flex justify-center items-center">
                  {service.image ? (<Image 
                    src={service.image} 
                    alt='' 
                    fill 
                    className="object-cover group-hover:cursor-pointer"
                  />) : (
                    <ImageIcon className="w-4 h-4" />
                  )}
                </div>
              </TableCell>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell className="text-right"><MoreVertical className="w-4 h-4"/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </>
  )
}

export default ServicesForm
