import supabase from "./supabase";

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log("Cabins can't be loaded!");
    throw new Error("Cabins can't be loaded!");
  }
  return cabins;
}
