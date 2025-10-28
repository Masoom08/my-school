"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { School, Plus, BookOpen } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-2xl shadow-lg">
              <School className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            School Management System
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Manage and discover schools with ease. Add new schools or browse through our comprehensive directory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Plus className="h-10 w-10 text-blue-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
              Add School
            </h2>
            <p className="text-slate-600 mb-6 text-center">
              Register a new school by filling in the required details including name, location, and contact information.
            </p>
            <Button
              onClick={() => router.push("/addSchool")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
            >
              Get Started
            </Button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-slate-100 rounded-xl">
                <BookOpen className="h-10 w-10 text-slate-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
              View Schools
            </h2>
            <p className="text-slate-600 mb-6 text-center">
              Browse through our directory of schools. Search and filter to find the perfect school for your needs.
            </p>
            
            <Button
            
              onClick={() => router.push("/showSchools")}
              typeStyle="outline" size="sm"
              className="w-full text-lg py-6 border-2 hover:bg-slate-50"
            >
              Browse Directory
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
