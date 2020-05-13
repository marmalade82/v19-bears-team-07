# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

App.create([{ name: 'Facebook', description: 'Social Network'}])
App.create([{ name: 'Twitter', description: 'Tweets'}])

Tag.create([{ name: 'Games', description: 'Play Time'}])
Tag.create([{ name: 'Productivity', description: 'Work Stuff'}])