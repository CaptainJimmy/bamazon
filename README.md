# bamazon
##A Node / MySQL version of Amazon Mashup of The Oregon Trail. 

Basically, a command line version / text of The Oregon Trail. Except on this trail, you spend all your money, and you die of cholera anyway.

The quanities are updated in the database as you purchase them, your money decreases from your wallet. If there is no more left, you are SOL. When you continue on the trail, you die. What else is new?

###DB Schema:

* products
	* id
	* item
	* description
	* category
	* quantity on hand
	* price

* orders
	* name
	* date
	* items
	* total price

* hall of shame
	* name
	* date of death
	* died of: (hint.  its always cholera. always.)

	