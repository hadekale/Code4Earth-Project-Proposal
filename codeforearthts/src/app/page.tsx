
//import ExperimentSelector from "@/form/forallplots";
import TimeIntervalSelector from "@/form/dateselector";
import DateTimeRange from "@/form/dateselector";
import ExperimentSelector, { VerificationTypeSelector } from "@/form/forallplots";
import ForStatisticsPlots, { AsFunctionOf } from "@/form/forstatisticsplots";
import PlotIt from "@/form/submit";
import { Button } from "@mui/material";
import dynamic from "next/dynamic";
//import { experiments } from "@/lib/data";

export default function Home() {
  const NewPlot = dynamic(() => import('./plotly/plot'), { ssr: false });
  return (<>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute left-24"><NewPlot /></div>
      <div className=" absolute right-24 columns-1">
        <ExperimentSelector/>
        <VerificationTypeSelector/>
        <ForStatisticsPlots />
        <TimeIntervalSelector/>

        <div className="mt-5"></div>
        <div className="mt-5"><PlotIt/></div>

      </div>

    </main></>
  );
}
