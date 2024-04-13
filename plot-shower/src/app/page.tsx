'use client';

import Image from "next/image";
import Button from '@mui/material/Button';

function getValueOf(elementId: string) {
  return document.getElementById(elementId).value
}

function updatePlot() {
  let plotSrc = "http://localhost:8000/?asAFunctionOf=" + getValueOf("id possible functions") + "&parameter=" + getValueOf("id parameters") + "&experimentId=" + getValueOf("id experiment id") + "&verificationType=" + getValueOf("id verification type") + "&timeInterval=" + getValueOf("id time interval")
  document.getElementById('plot shower').src = plotSrc;
}
//asAFunctionOf = time & parameter=CO & experimentId=oper & verificationType=bias & timeInterval=20201001 - 20201031


export default function Home() {
  return (



    <main className="h-screen bg-white">
      <div className="grid grid-cols-5 h-full gap-5 p-10	">

        <iframe className="w-full h-full col-span-4" id="plot shower" src="http://localhost:8000/?asAFunctionOf=time&parameter=CO&experimentId=oper&verificationType=bias&timeInterval=20201001-20201031"></iframe>

        <div className="w-full h-full col-span-1 text-black	">

          <label htmlFor="id possible functions">As a function of:    </label>
          <select name="possible functions" id="id possible functions">
            <option value="time">Time</option>
            <option value="lead time">Lead Time</option>
          </select><br /><br />

          <label htmlFor="id parameters">Parameter:    </label>
          <select name="parameters" id="id parameters">
            <option value="CO">CO</option>
            <option value="NO2">NO2</option>
            <option value="SO2">SO2</option>
            <option value="aod500">AOD500</option>
            <option value="aod675">AOD675</option>
          </select><br /><br />

          <label htmlFor="id experiment id">Experiment ID:    </label>
          <select name="experiment id" id="id experiment id">
            <option value="oper">oper</option>
            <option value="mc0074">mc0074</option>
          </select><br /><br />

          <label htmlFor="id verification type">Verification Type:    </label>
          <select name="verification type" id="id verification type">
            <option value="bias">Bias</option>
            <option value="mrse">MRSE</option>
          </select><br /><br />

          <label htmlFor="id time interval">For Time Interval:    </label>
          <select name="time interval" id="id time interval">
            <option value="20201001-20201031">20201001-20201031</option>
            <option value="20201101-20201130">20201101-20201130</option>
          </select><br /><br />

          <Button onClick={updatePlot} variant="contained">Get Plot</Button>


        </div>
      </div>
    </main>
  );
}
