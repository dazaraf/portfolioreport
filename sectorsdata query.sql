select industrial, basicmaterials, technology,consumercyclical,financial,utilities,consumernoncyclical,communications,energy,diversified,funds,other
from portfolioshist
where date = (select max(date)
				from portfolioshist) and user = "icg"