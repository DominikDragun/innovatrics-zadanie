#serializer pre vytvorenie JSON suboru s atributmi pre Person
class PersonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :surname, :birth_date, :gender, :nationality
end
