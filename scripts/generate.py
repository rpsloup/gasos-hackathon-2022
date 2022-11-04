import random

names = open('data/names.txt', 'r')
surnames = open('data/surnames.txt', 'r')
output = open('out/queries.sql', 'a')

names_array = []
surnames_array = []

CITIES = ['Plzeň', 'Rokycany', 'Mirošov', 'Teplice', 'Březnice', 'Albaquerque', 'El Paso']
SCHOOLS = ['Škola 1', 'Škola 2', 'Škola 3', 'Škola 4', 'Škola 5']
LANGUAGES = list(range(1, 9))
LANGUAGE_DELTA = 0.3
TECHNOLOGIES = list(range(1, 5))
TECHNOLOGY_DELTA = 0.4
MIN_END_YEAR = 2023
MAX_END_YEAR = 2027

def get_count():
	print('Enter the total count\n')
	entering = True
	count = 0

	while entering:
		try:
			count = int(input('> '))
			entering = False
		except:
			pass

	return count

def generate_name():
	name = random.choice(names_array)
	surname = random.choice(surnames_array)
	return f'{name} {surname}'

def generate_location():
	return random.choice(CITIES)

def generate_school():
	return random.choice(SCHOOLS)

def generate_end_year():
	year = random.randint(MIN_END_YEAR, MAX_END_YEAR)
	return year

def generate_languages():
	languages = []

	for language in LANGUAGES:
		n = random.uniform(0, 1)
		if LANGUAGE_DELTA > n:
			languages.append(str(language))

	return languages

def generate_technologies():
	technologies = []

	for technology in TECHNOLOGIES:
		n = random.uniform(0, 1)
		if TECHNOLOGY_DELTA > n:
			technologies.append(str(technology))

	return technologies

def generate_gdpr():
	if random.randint(1, 2) == 1:
		return 'false'
	return 'true'

def main():
	for name in names.readlines():
		names_array.append(name.strip())

	for surname in surnames.readlines():
		surnames_array.append(surname.strip())

	count_to_generate = get_count()
	for i in range(count_to_generate):
		name = generate_name().replace("'", "''")
		email = name.lower().replace(' ', '.').replace("''", '') + '@domain.com'
		location = generate_location()
		school = generate_school()
		end_year = generate_end_year()
		languages = ','.join(generate_languages())
		technologies = ','.join(generate_technologies())
		gdpr = generate_gdpr()

		output.write(
			f'INSERT INTO Students (name, email, locality, school, end_year, languages, technologies, gdpr) VALUES (\'{name}\', \'{email}\', \'{location}\', \'{school}\', {end_year}, \'{languages}\', \'{technologies}\', {gdpr});\n')

	print('\nGenerated.')

if __name__ == '__main__':
	print('Student Generator\n')
	main()

names.close()
surnames.close()
output.close()
