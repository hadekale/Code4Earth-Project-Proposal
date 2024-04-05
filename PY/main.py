from datetime import datetime
import plotly.express as px
from pandas import DataFrame

def makeScatterPlot(asAFunctionOf: str="time", param: str="CO", verificationType: str="bias"):
   
    data = readData(param,asAFunctionOf)
    #print(data)
    if verificationType=="bias":
        for key in data.keys():
            #print(data[key])
            for locationIndex in range(len(data[key])):
                data[key][locationIndex]=data[key][locationIndex][0]-data[key][locationIndex][1]#bias calculation

        for time in data:
            if len(data[time])<100:
                print("for time: " + str(time) + " there are " + str(len(data[time])) + " datapoints")   
                print("\n")


        for time in data:
            tempFinalBias=0
            for biasValue in data[time]:
                tempFinalBias+=biasValue/len(data[time])
            data[time]=tempFinalBias
        
        dataForPlot = DataFrame.from_dict(data,orient="index")

        
        
        fig = px.line(dataForPlot)
        fig.show()
        
        # i=0
        # for time in data:
        #     print(data[time])   
        #     print("\n\n\n")
        # print("i is" +str(i))

        #print(DataFrame.from_dict(data))
        # fig = px.scatter(data)
        # fig.show()
    elif verificationType=="mrse":
        return None





def readData(param, asAFunctionOf):
    if asAFunctionOf=="time":
        timeDict=dict()
        fileToBeRead=open("A:/Projeler/Code4Earth-Project-Proposal/PY/example_data/20201001-20201031/expid=mc0074,param="+param+".txt","r")
        for line in fileToBeRead:
            if line[0]=="#": continue
            else:
                dataList=line.split(",")
                timeDict[datetime.strptime(dataList[0], '%Y%m%d %H:%M')]=[] #creation of list

        fileToBeRead=open("A:/Projeler/Code4Earth-Project-Proposal/PY/example_data/20201001-20201031/expid=mc0074,param="+param+".txt","r")
        for line in fileToBeRead:
            if line[0]=="#": continue
            else:
                dataList=line.split(",")
                timeDict[datetime.strptime(dataList[0], '%Y%m%d %H:%M')]+=[[float(dataList[5]),float(dataList[6].rstrip("\n"))]] #forecast and observation -- Important! Not everything available for all times in files.
        return(timeDict)

    elif asAFunctionOf=="lead_time":
        return None
    else: print("error")



#timeDict.update(  { datetime.strptime(dataList[0], '%Y%m%d %H:%M'),timeDict[datetime.strptime(dataList[0], '%Y%m%d %H:%M')].append([float(dataList[5]),float(dataList[6].rstrip("\n"))]) })


makeScatterPlot()














# from netCDF4 import Dataset
# rootgrp = Dataset("A:/Projeler/Code4Earth-Project-Proposal/PY/ENS_ANALYSIS.nc", "r")

# def getAllDims(rootgrp):
#     for variable in rootgrp.variables:
#         print ("\n"+variable)
#         for dimension in rootgrp.variables[variable].get_dims():
#             print(dimension.name)

#print(rootgrp.variables["so2_conc"].ncattrs())


#for value in rootgrp.variables["so2_conc"][0][0][0]:
#    print(value)

#for timeValue in rootgrp.variables["time"]:
#    print(timeValue)

# print(rootgrp.dimensions)

#getAllDims(rootgrp)


# rootgrp.close()