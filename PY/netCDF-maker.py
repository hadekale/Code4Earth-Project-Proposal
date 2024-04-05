from netCDF4 import Dataset

rootgrp = Dataset("test.nc", "w", format="NETCDF4")
fcstgrp = rootgrp.createGroup("forecasts")