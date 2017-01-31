select user,allocation, incomingpnl, tradingpnl, grossexp, longpos, -shortpos as shortpos, ptfbeta, onedayonepctvar
from portfolioshist
where date = (select max(date)
				from portfolioshist) and user = "icg"
