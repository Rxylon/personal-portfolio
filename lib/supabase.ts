import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

// Only create client if env vars are available
let supabase: SupabaseClient | null = null;

console.log("Supabase URL exists:", !!supabaseUrl);
console.log("Supabase Key exists:", !!supabaseKey);

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
  console.log("Supabase client created successfully");
} else {
  console.log("Supabase client NOT created - missing env vars");
}

export { supabase };

export interface Project {
  id: number;
  title: string;
  description: string;
  long_description?: string;
  tech_stack: string[];
  repo_url: string;
  live_url?: string;
  image_url: string;
  featured: boolean;
  category?: string;
  created_at?: string;
  order_index: number;
}

export async function getProjects(): Promise<Project[]> {
  if (!supabase) {
    return [];
  }
  
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data || [];
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .order("order_index", { ascending: true })
    .limit(3);

  if (error) {
    console.error("Error fetching featured projects:", error);
    return [];
  }

  return data || [];
}

export async function getProjectById(id: number): Promise<Project | null> {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching project:", error);
    return null;
  }

  return data;
}
