"use client";

import { useEffect, useState } from "react";
//import { supabase } from "@/lib/superbase";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { School, MapPin, Plus, Search, Loader2 } from "lucide-react";

interface School {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  image: string | null;
  email_id: string;
}

export default function ShowSchools() {
  const [schools, setSchools] = useState<School[]>([]);
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchSchools();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredSchools(schools);
    } else {
      const filtered = schools.filter(
        (school) =>
          school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          school.state.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSchools(filtered);
    }
  }, [searchTerm, schools]);

  const fetchSchools = async () => {

  //   try {
  //   const res = await fetch("/api/schools");
  //   const data = await res.json();
  //   setSchools(data);
  //   setFilteredSchools(data);
  // } catch (error) {
  //   console.error("Error fetching schools:", error);
  // } finally {
  //   setIsLoading(false);
  // }
  try {
    const storedSchools = JSON.parse(localStorage.getItem("schools") || "[]");
    setSchools(storedSchools);
    setFilteredSchools(storedSchools);
  } catch (error) {
    console.error("Error reading local storage:", error);
  } finally {
    setIsLoading(false);
  }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <School className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Schools Directory</h1>
                <p className="text-sm text-slate-600 mt-1">
                  Browse and discover schools
                </p>
              </div>
            </div>
            <Button
              onClick={() => router.push("/addSchool")}
              className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add School
            </Button>
          </div>
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search by school name, city, or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
          </div>
        ) : filteredSchools.length === 0 ? (
          <div className="text-center py-16">
            <School className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-slate-700 mb-2">
              {searchTerm ? "No schools found" : "No schools yet"}
            </h2>
            <p className="text-slate-500 mb-6">
              {searchTerm
                ? "Try adjusting your search terms"
                : "Start by adding your first school"}
            </p>
            {!searchTerm && (
              <Button
                onClick={() => router.push("/addSchool")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add First School
              </Button>
            )}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-slate-600">
                Showing <span className="font-semibold">{filteredSchools.length}</span>{" "}
                {filteredSchools.length === 1 ? "school" : "schools"}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSchools.map((school) => (
                <Card
                  key={school.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-slate-200 hover:border-blue-300"
                >
                  <div className="relative h-48 bg-slate-200 overflow-hidden">
                    {school.image ? (
                      <img
                        src={school.image}
                        alt={school.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200">
                        <School className="h-20 w-20 text-slate-400" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {school.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm text-slate-600">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-slate-400" />
                        <p className="line-clamp-2">{school.address}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {school.city}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                          {school.state}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
