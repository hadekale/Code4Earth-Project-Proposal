from fastapi import FastAPI
from enum import Enum
import functions
from fastapi.responses import HTMLResponse


class AsAFunctionOf(str, Enum):
    time = "time"
    lead_time = "lead time"

class Parameter(str, Enum):
    co = "CO"
    no2 = "NO2"
    so2 = "SO2"
    aod500 = "aod500"
    aod675 = "aod675"

class ExperimentId(str, Enum):
    oper = "oper"
    mc0074 = "mc0074"

class VerificationType(str, Enum):
    bias = "bias"
    mrse = "mrse"

class TimeInterval(str, Enum):
    interval1 = "20201001-20201031"
    interval2 = "20201001-20201031"

app = FastAPI()


@app.get("/", response_class=HTMLResponse)
def getHtml(asAFunctionOf: AsAFunctionOf, parameter: Parameter, experimentId: ExperimentId, verificationType: VerificationType, timeInterval: TimeInterval):
    data=functions.calculateData(asAFunctionOf=asAFunctionOf.value, param=parameter.value, verificationType=verificationType.value, experimentId=experimentId.value, timeInterval=timeInterval.value)
    plot=functions.makeLinePlot(data)
    plot.write_html("/root/Desktop/Code4Earth-Project-Proposal/PY/tempHtml.html")
    htmlFileToBeSent = open('/root/Desktop/Code4Earth-Project-Proposal/PY/tempHtml.html', 'r', encoding="utf8")
    htmlString = htmlFileToBeSent.read()
    print(htmlString)
    return htmlString
    #return {"asAFunctionOf": asAFunctionOf.value, "parameter": parameter.value, "experimentId": experimentId.value, "verification type": verificationType.value, "time interval": timeInterval.value}
