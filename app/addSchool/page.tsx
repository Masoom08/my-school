"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
//import { supabase } from "@/lib/superbase";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation";
import { Loader2, School } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "School name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  contact: z.string().regex(/^[0-9]{10}$/, "Contact must be a valid 10-digit number"),
  email_id: z.string().email("Must be a valid email address"),
  image: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddSchool() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      city: "",
      state: "",
      contact: "",
      email_id: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
    const existingSchools = JSON.parse(localStorage.getItem("schools") || "[]");

    const newSchool = {
      id: Date.now(), // unique ID
      ...values,
      image: imagePreview, // use preview as image
    };

    const updatedSchools = [newSchool, ...existingSchools];
    localStorage.setItem("schools", JSON.stringify(updatedSchools));

    toast.success("School added successfully!");
    form.reset();
    setImagePreview(null);
    router.push("/showSchools");
  } catch (error) {
    toast.error("Something went wrong while saving!");
  } finally {
    setIsSubmitting(false);
  }

  //   try {
  //   const res = await fetch("/api/schools", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(values),
  //   });

  //   if (!res.ok) throw new Error("Failed to add school");

  //   toast.success("School added successfully!");
  //   form.reset();
  //   router.push("/showSchools");
  // } catch (error) {
  //   if (error instanceof Error) {
  //     toast.error(error.message);
  //   } else {
  //     toast.error("Something went wrong!");
  //   }
  // } finally {
  //   setIsSubmitting(false);
  // }
   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <School className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Add New School</h1>
          <p className="text-slate-600">Fill in the details to register a new school</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>School Information</CardTitle>
            <CardDescription>Enter all required details about the school</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School Name</FormLabel>
                      <FormControl>
                        <Input placeholder="St. Mary's High School" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="123 Main Street"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Mumbai" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="Maharashtra" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                          <Input placeholder="9876543210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="school@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="image"
                  render={({ field: { onChange, value, ...field } }) => (
                    <FormItem>
                      <FormLabel>School Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            onChange(e.target.files);
                            handleImageChange(e);
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-w-full h-48 object-cover rounded-lg border-2 border-slate-200"
                    />
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Adding School...
                      </>
                    ) : (
                      "Add School"
                    )}
                  </Button>
                  <Button
                    type="button"
                    typeStyle="outline" size="sm"
                    onClick={() => router.push("/showSchools")}
                  >
                    View Schools
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
