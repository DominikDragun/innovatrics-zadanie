module Api
  class PersonController < ApplicationController
    def index #funkcia, ktora vrati vsetky zaznamy z db v podobe JSON suboru
      people = Person.all
      render json: PersonSerializer.new(people).serialized_json
    end
  end
end
