class StaticPagesController < ApplicationController

  def home
  end

  def play
  	@row = 15
  	@col = 30
  end
end


# class Cell
#   attr_accessor :x_axis, :y_axis, :alive
#   def initialize(x_axis, y_axis)
#     @x_axis = x_axis
#     @y_axis = y_axis
#     @alive = false
#   end

#   def adjacent_cells
#     arr_for_x = find_x_adders
#     arr_for_y = find_y_adders
#     p arr_for_x, '*' * 10, arr_for_y
#     return find_coordinates(arr_for_x, arr_for_y)
#   end

#   def find_coordinates(x, y)
#     arr_of_coord = []
#     y.each do |y_num|
#       x.each do |x_num|
#          unless (x_num == 0 && y_num == 0)
#           arr_of_coord << [(@x_axis + x_num), (@y_axis + y_num)]
#          end
#       end
#     end
#     arr_of_coord
#   end

#   def find_x_adders
#     if @x_axis == 0
#       [0, 1]
#     elsif @x_axis == 149
#       [-1, 0]
#     else
#       [-1, 0, 1]
#     end


#   end

#   def find_y_adders
#     if @y_axis == 0
#       [0, 1]
#     elsif @y_axis == 99
#       [-1, 0]
#     else
#       [-1, 0, 1]
#     end
#   end


# end


