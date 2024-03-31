import ForStatisticsPlots from "@/form/forstatisticsplots";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className=" absolute right-24 columns-1">
      <ForStatisticsPlots/>
     </div>
    </main>
  );
}
