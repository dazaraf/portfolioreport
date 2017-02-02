select tradeshist.id,portfolioshist.user, Ticker, TradePrice as OpenPrice, Quantity
from tradeshist join portfolioshist on tradeshist.Portfolio = portfolioshist.name
where  TradeDate = '2016-01-04' and user = 'alphaness'
group by tradeshist.id