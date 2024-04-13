from datetime import datetime
import plotly.express as px
from pandas import DataFrame
from math import sqrt

settingsDictionary= {"as a function of":("time","lead time"),"parameters":("CO","NO2","SO2","aod500","aod675"),"experiment id": ("oper","mc0074"),"verification type":("bias","mrse"), "time interval":("20201001-20201031","20201101-20201130")}

def checkValues(valueList): 
    valueCheck={key:"None" for key in valueList}
    for key in (settingsDictionary.keys()):
        for value in settingsDictionary[key]:
            for receivedValue in valueList:
                if receivedValue==value:
                    valueCheck[receivedValue]=True
                
    for check in valueCheck:
        if valueCheck[check]!=True:
            raise Exception(f"The received {check} doesn't match predefined values.")
        else: print(f"The received {check} matches predefined values.")



def calculateData(asAFunctionOf: str="time", param: str="CO", verificationType: str="bias", experimentId:str = "oper", timeInterval:str = "20201001-20201031"):
   
    checkValues([asAFunctionOf,param,verificationType,experimentId,timeInterval])
    
    data = readData(param,asAFunctionOf,experimentId,timeInterval)
    #print(data)
    if verificationType=="bias":
        for key in data.keys():
            #print(data[key])
            for locationIndex in range(len(data[key])):
                data[key][locationIndex]=data[key][locationIndex][0]-data[key][locationIndex][1]#bias calculation


        for time in data:
            tempFinalBias=0
            for biasValue in data[time]:
                tempFinalBias+=biasValue
            tempFinalAverageBias=tempFinalBias/len(data[time])
            data[time]=tempFinalAverageBias
        
        
        # for time in data:
        #     if len(data[time])<100:
        #         print("for time: " + str(time) + " there are " + str(len(data[time])) + " datapoints")   
        #         print("\n")
        
        # i=0
        # for time in data:
        #     print(data[time])   
        #     print("\n\n\n")
        # print("i is" +str(i))

        #print(DataFrame.from_dict(data))
        # fig = px.scatter(data)
        # fig.show()

    elif verificationType=="mrse":
        for key in data.keys():
            #print(data[key])
            for locationIndex in range(len(data[key])):
                data[key][locationIndex]=(data[key][locationIndex][0]-data[key][locationIndex][1])**2#squared bias calculation
        
        for time in data:
            tempSquaredFinalBias=0
            for biasValue in data[time]:
                tempSquaredFinalBias+=biasValue
            tempSquaredFinalAverageBias=tempSquaredFinalBias/len(data[time])
            data[time]=sqrt(tempSquaredFinalAverageBias)

    return data
        

def makeLinePlot(data):
    dataForPlot = DataFrame.from_dict(data,orient="index")  
    plot = px.line(dataForPlot)
    return plot



def readData(param, asAFunctionOf, experimentId,timeInterval):
    if asAFunctionOf=="time":
        timeDict=dict()
        wlenString=""
        if param[:3]=="aod":
            wlenString = ",wlen=" + param[3:]
            param="aod"
        fileToBeRead=openFile(timeInterval,experimentId,param,wlenString)
        for line in fileToBeRead:
            if line[0]=="#": continue
            else:
                dataList=line.split(",")
                timeDict[datetime.strptime(dataList[0], '%Y%m%d %H:%M')]=[] #creation of list
        fileToBeRead=openFile(timeInterval,experimentId,param,wlenString)
        for line in fileToBeRead:
            if line[0]=="#": continue
            else:
                dataList=line.split(",")
                timeDict[datetime.strptime(dataList[0], '%Y%m%d %H:%M')]+=[[float(dataList[5]),float(dataList[6].rstrip("\n"))]] #forecast and observation -- Important! Not everything available for all times in files.
        return(timeDict)

    elif asAFunctionOf=="lead time":
        leadTimeDict=dict()
        wlenString=""
        if param[:3]=="aod":
            wlenString = ",wlen=" + param[3:]
            param="aod"
        fileToBeRead=openFile(timeInterval,experimentId,param,wlenString)
        for line in fileToBeRead:
            if line[0]=="#": continue
            else:
                dataList=line.split(",")
                leadTimeDict[int(float(dataList[1]))]=[] #creation of list

        fileToBeRead=openFile(timeInterval,experimentId,param,wlenString)
        for line in fileToBeRead:
            if line[0]=="#": continue
            else:
                dataList=line.split(",")
                leadTimeDict[int(float(dataList[1]))]+=[[float(dataList[5]),float(dataList[6].rstrip("\n"))]] #forecast and observation -- Important! Not everything available for all times in files.
        return(leadTimeDict)
    else: print("error")
    fileToBeRead.close()


def openFile(timeInterval, experimentId, param, wlenString):
    return open(f"C:/Users/Administrator/Desktop/Project/Code4Earth-Project-Proposal/PY/example_data/{timeInterval}/expid={experimentId},param={param}{wlenString}.txt","r")


#timeDict.update(  { datetime.strptime(dataList[0], '%Y%m%d %H:%M'),timeDict[datetime.strptime(dataList[0], '%Y%m%d %H:%M')].append([float(dataList[5]),float(dataList[6].rstrip("\n"))]) })


#makeLinePlot(calculateData()).show()














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