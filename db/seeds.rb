# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# ruby encoding: utf-8

names = ['Sumayya', 'Lyndsey', 'Stefan', 'Siana', 'Yazmin', 'Ubaid', 'Ishaaq', 'Sydney', 'Barney', 'Lochlan', 'Kit',
         'Antonia', 'Arnie', 'Rose', 'Leanna', 'Aimee', 'Bonnie', 'Usamah', 'Bobbi', 'Coral']
surnames = ['Lowery', 'Schneider', 'Ashton', 'Magana', 'Cottrell', 'Walmsley', 'Tran', 'Sheldon', 'Rudd', 'Howard',
            'Farley', 'Lister', 'Serrano', 'Mora', 'Farmer', 'Bravo', 'Cleveland', 'Shepard', 'Ho', 'Ramsay']
countries = ['Mauritania', 'Vanuatu', 'Belarus', 'Mexico', 'Botswana', 'Kiribati', 'Myanmar', 'Guernsey', 'El Salvador',
             'Faroe Islands', 'Tonga', 'Guernsey', 'Monaco', 'French Guiana', 'Saint Barthelemy', 'Nepal', 'Taiwan',
             'Benin', 'Luxembourg', 'Austria']
genders = ['male', 'female']

# funkcia na vytvorenie nahodneho datumu
def time_rand(from = 0.0, to = Time.now)
  Time.at(from + rand * (to.to_f - from.to_f)).strftime('%d-%m-%Y')
end

# cyklus pre vytvorenie osoby v db
names.zip(surnames, countries).each do |name, surname, country|
  Person.create([{
                  name: name,
                  surname: surname,
                  birth_date: time_rand,
                  gender: genders.sample,
                  nationality: country
                }])
end
