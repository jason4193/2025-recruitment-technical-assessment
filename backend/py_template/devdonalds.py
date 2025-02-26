from dataclasses import dataclass
from typing import List, Dict, Union
from flask import Flask, request, jsonify
import re

# ==== Type Definitions, feel free to add or modify ===========================
@dataclass
class CookbookEntry:
	name: str

@dataclass
class RequiredItem():
	name: str
	quantity: int

@dataclass
class Recipe(CookbookEntry):
	required_items: List[RequiredItem]

@dataclass
class Ingredient(CookbookEntry):
	cook_time: int

# ==== Helper Functions =======================================================
def create_recipe(name, requiredItems, cookbook):
	# Create list of required items
	requiredItemsList = []
	item_names = set()
	for item in requiredItems:
		if item['name'] in item_names:
			return 'Duplicate item name found', 400
		item_names.add(item['name'])
		requiredItemsList.append(RequiredItem(item['name'], item['quantity']))
	# Create a new recipe
	recipe = Recipe(name, requiredItemsList)
	cookbook[name] = recipe
	print(cookbook)
	return 'Recipe added', 200

def create_ingredient(name, cookTime, cookbook):
	# Check if the cookTime is a positive integer
	if not isinstance(cookTime, int) or cookTime < 0:
		return 'Invalid cook time', 400
	# Create a new ingredient
	ingredient = Ingredient(name, cookTime)
	cookbook[name] = ingredient
	print(cookbook)
	return 'Ingredient added', 200



# =============================================================================
# ==== HTTP Endpoint Stubs ====================================================
# =============================================================================
app = Flask(__name__)

# Store your recipes here!
cookbook = None

# Task 1 helper (don't touch)
@app.route("/parse", methods=['POST'])
def parse():
	data = request.get_json()
	recipe_name = data.get('input', '')
	parsed_name = parse_handwriting(recipe_name)
	if parsed_name is None:
		return 'Invalid recipe name', 400
	return jsonify({'msg': parsed_name}), 200

# [TASK 1] ====================================================================
# Takes in a recipeName and returns it in a form that 
def parse_handwriting(recipeName: str) -> Union[str | None]:
	def is_replaceable(char):
		return char in ['-', '_']

	newRecipeName = ''
	capNext = True

	for index in range(len(recipeName)):
		# if the char is replaceable, replace it with a space and reset the capNext
		if is_replaceable(recipeName[index]) and capNext != True:
			newRecipeName += ' '
			capNext = True
		# if the char is a space, add it to the newRecipeName and reset the capNext
		if recipeName[index] == ' ':
			# if the previous letter is also a space, skip this space
			if capNext != True:
				newRecipeName += recipeName[index]
				capNext = True
		# if the char is a letter, add it to the newRecipeName based on the capNext
		if recipeName[index].isalpha():
			if capNext:
				newRecipeName += recipeName[index].upper()
				capNext = False
			else:
				newRecipeName += recipeName[index].lower()
		
	# if the newRecipeName is empty, return None
	if newRecipeName == '':
		return None

	# if the newRecipeName has a space at the end, remove it
	if newRecipeName[-1] == ' ':
		newRecipeName = newRecipeName[:-1]
		
	return newRecipeName

# [TASK 2] ====================================================================
# Endpoint that adds a CookbookEntry to your magical cookbook
@app.route('/entry', methods=['POST'])
def create_entry():
	global cookbook
	if cookbook is None:
		cookbook = {}
	# Get the entry from the request
	entry = request.get_json()
	print(entry)
	# Check if the entry is unique
	if entry['name'] in cookbook:
		return 'Entry already exists', 400
	# Check if the entry is valid type
	if entry["type"] == "recipe":
		return create_recipe(entry['name'], entry['requiredItems'], cookbook)
	elif entry["type"] == "ingredient":
		return create_ingredient(entry['name'], entry['cookTime'], cookbook)
	else:
		return 'Invalid entry type', 400


# [TASK 3] ====================================================================
# Endpoint that returns a summary of a recipe that corresponds to a query name
@app.route('/summary', methods=['GET'])
def summary():
	# TODO: implement me
	return 'not implemented', 500


# =============================================================================
# ==== DO NOT TOUCH ===========================================================
# =============================================================================

if __name__ == '__main__':
	app.run(debug=True, port=8080)
