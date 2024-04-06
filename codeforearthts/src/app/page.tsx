
//import ExperimentSelector from "@/form/forallplots";
import DateTimeRange from "@/form/dateselector";
import ExperimentSelector from "@/form/forallplots";
import ForStatisticsPlots from "@/form/forstatisticsplots";
import PlotIt from "@/form/submit";
import dynamic from "next/dynamic";
//import { experiments } from "@/lib/data";

export default function Home() {
  const NewPlot = dynamic(() => import('./plotly/plot'), { ssr: false });
  return (<>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NewPlot />
      <div className=" absolute right-24 columns-1">
        <ExperimentSelector/>
        <ForStatisticsPlots />

        <div className="mt-5"></div>
        <div className="mt-5"><PlotIt /></div>

      </div>

    </main></>
  );
}
