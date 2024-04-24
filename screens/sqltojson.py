import os
import json

# File paths
sql_file = 'dbdump/workouts_fullday.sql'
json_file = 'dbdump/workouts_fullday.json'

# Print absolute paths
print("Absolute path to SQL file:", os.path.abspath(sql_file))
print("Absolute path to JSON file:", os.path.abspath(json_file))

# Column names
columns = ['ExerciseType', 'EquipmentType', 'Variation']

# Read SQL file
with open(sql_file, 'r') as file:
    data = file.readlines()

# Process data
json_data = []
for line in data:
    # Skip lines that start with '--' or '/*' or are empty
    if line.startswith('--') or line.startswith('/*') or line.strip() == '':
        continue
    # Assuming each line is a comma-separated list of values
    values = line.strip().split(',')
    # Create a dictionary for each row
    row_dict = {columns[i]: value for i, value in enumerate(values) if i < len(columns)}
    json_data.append(row_dict)

# Write to JSON file
with open(json_file, 'w') as file:
    json.dump(json_data, file)